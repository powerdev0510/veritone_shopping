"use strict";

const express = require("express");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const router = express.Router();

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const routes = require(path.join(__dirname, file));
    const routeName = "/" + file.slice(0, -3);
    router.use(routeName, routes);
  });

module.exports = router;
