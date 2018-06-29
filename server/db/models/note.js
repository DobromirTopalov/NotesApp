'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isSticked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
  Note.associate = (models) => {
    const {
      Category,
      User,
    } = models;

    Note.belongsTo(User, { onDelete: 'cascade' });
    Note.belongsToMany(Category, {
      through: 'NoteCategory',
      onDelete: 'cascade',
    });
    Category.belongsToMany(Note, {
      through: 'NoteCategory',
      onDelete: 'cascade',
    });
  };

  return Note;
};