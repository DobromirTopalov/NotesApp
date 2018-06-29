'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [{
      content: 'Walk the dog',
      isSticked: false,
      UserId: 1,
      date: '23 May 2018',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      content: 'Learn to cook scrambled eggs',
      isSticked: false,
      UserId: 1,
      date: '07 June 2018',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      content: 'Don"t mess with her right now',
      isSticked: false,
      UserId: 1,
      date: '30 September 2018',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      content: 'Plant a tree with family when on a trip to "Old Mountain"',
      isSticked: true,
      UserId: 1,
      date: '13 August 2018',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      content: 'Fix all the lightbulbs and protect roof of leaking',
      isSticked: true,
      UserId: 1,
      date: '22 July 2018',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      content: 'Watch a movie trilogy this weekend',
      isSticked: true,
      UserId: 1,
      date: '01 October 2018',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      content: 'Celebrate the end of tomorrow',
      isSticked: false,
      UserId: 1,
      date: '31 January 2019',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes', null, {});
  },
};