const {
  User,
  Note,
  Category,
  NoteCategory,
} = require('../../db/models');

const Data = require('./generic.data');

module.exports = {
  users: new Data(User),
  notes: new Data(Note),
  categories: new Data(Category),
  notecategories: new Data(NoteCategory),
};