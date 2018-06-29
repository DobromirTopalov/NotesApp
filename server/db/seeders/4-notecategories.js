'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notecategories', [{
      NoteId: 1,
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      NoteId: 2,
      CategoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      NoteId: 3,
      CategoryId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      NoteId: 4,
      CategoryId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      NoteId: 5,
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      NoteId: 6,
      CategoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      NoteId: 7,
      CategoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notecategories', null, {});
  },
};