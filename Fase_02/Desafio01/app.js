const express = require("express");

const app = express();

app.use(express.json());

const RouterProjects = require("./src/controller/projects")(app);

module.exports = app;
