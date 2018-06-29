'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@mail.com',
      password: 'admin123',
      firstName: 'Admin',
      lastName: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      email: 'user@mail.com',
      password: 'user123',
      firstName: 'User',
      lastName: 'User',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};