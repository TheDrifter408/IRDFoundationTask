const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    title_ar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    number_of_hadis: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    abvr_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    book_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    book_descr: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'books',
    timestamps: false
  });
};
