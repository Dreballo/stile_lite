const bcrypt = require('bcrypt-nodejs');


module.exports = function(sequelize, DataTypes) {

    let User = sequelize.define("User", {

            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            imageURL: {
                type: DataTypes.STRING,
                allowNull: true
            },

            phone: {
                type: DataTypes.TEXT,
                allowNull: true,
                len: [1, 16]
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    len: [1]
                }
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: true,
                len: [1]
            }
        },
        {

            // Creating a custom method for our User model. This will check if an unhashed password entered by
            // The user can be compared to the hashed password stored in our database
            instanceMethods: {
                validPassword: function(password) {
                    return bcrypt.compareSync(password, this.password);
                }
            },
            // Hooks are automatic methods that run during various phases of the User Model lifecycle
            // In this case, before a User is created, we will automatically hash their password
            // hooks: {
            //     beforeCreate: function(user, options, done) {
            //         user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
            //         done(null, options);
            //     }
            // }


        });
    return User;
};
