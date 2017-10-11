'use strict';

// =================================================================
// Passport Configuration
// ==========================================================

//Declaring Dependencies

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const db = require('../models');


//loading our auth properties
const configAuth = require('../config/auth');

module.exports = function() {

// =================================================================
// Local Strategies
// =================================================================

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
    passport.use(new LocalStrategy(
        // Our user will sign in using an email, rather than a "username"
        {
            usernameField: "email"
        },
        function(email, password, done) {
            // When a user tries to sign in this code runs
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(function(dbUser) {
                // If there's no user with the given email
                if (!dbUser) {
                    return done(null, false, {
                        message: "Incorrect email."
                    });
                }
                // If there is a user with the given email, but the password the user gives us is incorrect
                // else if (!dbUser.validPassword(password)) {
                //     return done(null, false, {
                //         message: "Incorrect password."
                //     });
                // }
                // If none of the above, return the user
                return done(null, dbUser);
            });
        }
    ));




// =================================================================
// Facebook Strategies
// =================================================================

    passport.use(new FacebookStrategy({

            // pull in our app id and secret from our auth.js file
            clientID        : configAuth.facebookAuth.clientID,
            clientSecret    : configAuth.facebookAuth.clientSecret,
            callbackURL     : configAuth.facebookAuth.callbackURL,
            profileFields   : ['id', 'displayName', 'picture.type(large)', 'email', 'first_name', 'gender', 'last_name']

        },

        // facebook will send back the token and profile
        function(token, refreshToken, profile, done) {

            // asynchronous function in node.js
            process.nextTick(function () {

                db.User.findOrCreate({where:{

                    email: profile.emails[0].value,
                    password: profile.emails[0].value,
                    first_name: profile.name.givenName,
                    last_name: profile.name.familyName,
                    imageURL: profile.photos[0].value


                }}).then(function(dbUser){

                        return done(null, dbUser);

                });



            });//end of asynch

        }));

    // // used to serialize the user for the session
    // passport.serializeUser(function(user, done) {
    //     done(null, user);
    // });
    //
    // // used to deserialize the user
    // passport.deserializeUser(function(email, done) {
    //     db.User.findOne({
    //         where:{
    //             email: email
    //         }
    //     }).then(function(user){
    //         if (!user) return done(new Error('Invalid user'));
    //         return done(null,user);
    //     })
    // });

    // In order to help keep authentication state across HTTP requests,
    // Sequelize needs to serialize and deserialize the user
    // Just consider this part boilerplate needed to make it all work
    passport.serializeUser(function(user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function(obj, cb) {
        cb(null, obj);
    });



}; //end of module.exports
