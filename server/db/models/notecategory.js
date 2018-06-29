'use strict';
module.exports = (sequelize, DataTypes) => {
  const NoteCategory = sequelize.define('NoteCategory', {
    NoteId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
  NoteCategory.associate = (models) => {
  };

  return NoteCategory;
};