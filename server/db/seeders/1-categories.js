'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: 'Home',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Office',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Hobby',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'R&D',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Education',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Friends',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Health',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Sport',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Relationship',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Family',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};