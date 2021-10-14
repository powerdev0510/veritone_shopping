"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const config = require("../config/database");
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.querySelect = (sql, bind = [], plain = false) =>
  db.sequelize.query(sql, {
    bind: bind.map((param) => param.toString()),
    type: db.Sequelize.QueryTypes.SELECT,
    raw: true,
    plain,
  });

db.queryUpdate = (sql, bind = []) =>
  db.sequelize.query(sql, { bind: bind.map((param) => param.toString()) });

db.upsert = (Model, values, where) => {
  return Model.findOne({ where }).then((obj) => {
    if (obj) return obj.update(values);
    Model.create(values);
  });
};

module.exports = db;
