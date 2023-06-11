const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// Simulando um banco de dados
const makeDinner = new Task(
  "dinner",
  "Make Dinner",
  "Make a dinner for my love"
);
const doLaundry = new Task("laundry", "Do Laundry", "Do the laundry until 8pm");
const tasks = [makeDinner, doLaundry];

// Rota para exibir a lista de tarefas utilizando o Template Engine
router.get("/", (req, res) => {
  res.render("index", { tasks });
});

// Rota para exibir a lista de tarefas utilizando o JSON
router.get("/tasks", (req, res) => {
  res.json(tasks);
});

module.exports = router;
