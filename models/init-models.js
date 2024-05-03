var DataTypes = require("sequelize").DataTypes;
var _books = require("./books");
var _chapter = require("./chapter");
var _hadith = require("./hadith");
var _section = require("./section");

function initModels(sequelize) {
  var books = _books(sequelize, DataTypes);
  var chapter = _chapter(sequelize, DataTypes);
  var hadith = _hadith(sequelize, DataTypes);
  var section = _section(sequelize, DataTypes);


  return {
    books,
    chapter,
    hadith,
    section,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
