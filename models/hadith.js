const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hadith', {
    hadith_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chapter_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    narrator: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ar_diacless: {
      type: DataTypes.STRING,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    grade_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    grade_color: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hadith',
    timestamps: false
  });
};
