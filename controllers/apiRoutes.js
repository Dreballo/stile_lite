//importing express
const express = require('express');
const router = express.Router();
//importing database
const db = require('../models');
const stylist = db.Stylist;
//importing passport
const passport = require('passport');
const isAuthenticated = require('../config/middleware/isAuthenticated');



// =====================================
// Passport-local ROUTES ===============
// =====================================

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.cookie('signIn', 'true');
        res.redirect('/home');


    });


// =====================================
// FACEBOOK ROUTES =====================
// =====================================

// route for facebook authentication and login
router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {failureRedirect : '/'}), function (req, res){
        res.cookie('signIn', 'true');
        res.redirect('/home');


    });

// route for logging out
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');


});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()){

        // console.log("HERE COMES USER ID!!! --------!!_!_!_!_!__!_!");
        // console.log(req.user);
        // console.log("HELLO WORLD -------!_!_!_!_!_!_!---------");
        return next();
    } else{
        // if they aren't redirect them to the home page
        res.redirect('/');
    }
}

// =====================================
//  ROUTES ===============
// =====================================
    //redirect to home page
    router.get('/', function (req,res){
        res.redirect('/prelogin')
    });

    //route for main router (user selects options)
    router.get('/home', isLoggedIn, function (req,res){
        db.User.findOne({
            where:{
                email:req.user.email || req.user[0].email//facebook profile object
            }
        }).then(function(data){
            let hbsObject = {
                user: data
            };

            res.render('index', {title: "Stile", layout: 'main', hbsObject});
        });



    });

    //route for registration page
    router.get('/register', function (req, res){
        res.render('register')
    });

    //route for account profile page
    router.get('/profile', isLoggedIn, function(req, res){

        db.User.findAll({
            where:{
                email:req.user.email || req.user[0].email//facebook profile object
            }
        }).then(function(data){
            let hbsObject = {
                profile: data
            };

            res.render('profile', hbsObject);
        });

    });

    //creating user profile
    router.post("/register/create", function (req, res) {

        db.User.create({

            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.mobile,
            email: req.body.email,
            password: req.body.password

        }).then(function () {

            console.log('Okay I have user profile');
            res.redirect('/home')
        });
    });

    //route to find all barbers with availability posted
    router.get('/available', function (req, res){
        //console.log();
        stylist.findAll({}).then(function(data){
           let hbsObject = {
               stylist: data
           };
            res.render('available', hbsObject);
            console.log(hbsObject);
        });

    });

    //route to find barbers with morning availability
    router.get('/available/morning', function (req,res){
       stylist.findAll({
           where: {
               start_time: {

                   $in: ["7:00a", "7:30a","8:00a", "8:30a", "9:00a","9:30"
                       , "10:00a", "10:30a", "11:00a", "11:30a"]
               }
           }
       }).then(function(data){
           let hbsObject = {
               stylist: data
           };

           res.render('available', hbsObject);
       })
    });

    //route to find barbers with afternoon availability
    router.get('/available/afternoon', function (req, res){

        stylist.findAll({
            where: {
                start_time: {
                    $in: ["12:00p", "12:30p","1:00p","1:30p","2:00p","2:30p",
                        "3:00p","3:30","4:00p", "4:30p","5:00p", "5:30p","6:00p"]
                }
            }
        }).then(function(data){
            let hbsObject = {
                stylist: data
            };

            res.render('available', hbsObject);
        })
    });



    //route for login page
    router.get('/login', function (req, res){
        res.render('login');
    });

    //route for prelogin options (i.e. facebook or local)
    router.get('/prelogin', function (req, res){
        res.render('prelogin');
    });

    //route for confirmation page
    router.get('/appointment/:id', function(req, res){
        stylist.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(data){
            let hbsObject = {
                stylist: data
            };
            console.log(hbsObject);
            res.render('appointment', hbsObject)
        });
    });


module.exports = router;
