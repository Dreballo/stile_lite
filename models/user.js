module.exports = function(sequelize, DataTypes) {

    let User = sequelize.define("User", {

            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },

            email: {
                type: DataTypes.STRING,
                allowNull: true,
                validate:{
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true,
                len: [1, 20]
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

            classMethods: {
                associate: function(models) {


                }
            }



        });
    return User;
};
