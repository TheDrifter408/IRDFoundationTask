const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('section', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    book_name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chapter_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preface: {
      type: DataTypes.STRING,
      allowNull: true
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'section',
    timestamps: false
  });
};
