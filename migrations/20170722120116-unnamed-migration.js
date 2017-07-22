'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
      /*
       Add altering commands here.
       Return a promise to correctly handle asynchronicity.

       Example:
       return queryInterface.createTable('users', { id: Sequelize.INTEGER });
       */
        return queryInterface.bulkInsert('Stylists',[{
                imageURL: "stile/public/assets/images/stylist_1.jpg",
                phone: "3212253159",
                first_name:'Karen',
                last_name: 'Smith',
                address: '2345 Magnolia Blv Orlando Fl',
                start_time: '14:00',
                createdAt: Sequelize.fn('NOW'),
                updatedAt: Sequelize.fn('NOW')
            },
                {
                    imageURL: "stile/public/assets/images/stylist_2.jpg",
                    phone: "4072253143",
                    first_name:'Don',
                    last_name: 'Julio',
                    address: '843 Osceola Parkway Orlando FL',
                    start_time: '17:00',
                    createdAt: Sequelize.fn('NOW'),
                    updatedAt: Sequelize.fn('NOW')
                },
                {
                    imageURL: "stile/public/assets/images/stylist_3.jpg",
                    phone: "4072253159",
                    first_name:'Cedric',
                    last_name: 'Barber',
                    address: '863 Sandlake Road Orlando FL',
                    start_time: '8:00',
                    createdAt: Sequelize.fn('NOW'),
                    updatedAt: Sequelize.fn('NOW')
                },
                {
                    imageURL: "stile/public/assets/images/stylist_4.jpg",
                    phone: "4072253143",
                    first_name:'Tina',
                    last_name: 'James',
                    address: '843 Central Florida Prk Orlando FL',
                    start_time: '17:00',
                    createdAt: Sequelize.fn('NOW'),
                    updatedAt: Sequelize.fn('NOW')
                },
                {
                    imageURL: "stile/public/assets/images/stylist_5.jpg",
                    phone: "4072253143",
                    first_name:'Jack',
                    last_name: 'Daniels',
                    address: '201 Orange Avenue Orlando FL',
                    start_time: '17:00',
                    createdAt: Sequelize.fn('NOW'),
                    updatedAt: Sequelize.fn('NOW')
                }]
        )
    },

    down: function (queryInterface, Sequelize) {
      /*
       Add reverting commands here.
       Return a promise to correctly handle asynchronicity.

       Example:
       return queryInterface.dropTable('users');
       */
        return queryInterface.dropTable('stylists');
    }
};

