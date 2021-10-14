const express = require("express");
const cors = require("cors");
const db = require("./models");
const routes = require("./routes");
const app = express();

db.sequelize
  .authenticate()
  .then(() => {
    db.sequelize.sync();
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-timebase, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "10mb" }));

// Add routes
app.use(routes);

// Error handling
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: { message: err.message } });
});

module.exports = app;
