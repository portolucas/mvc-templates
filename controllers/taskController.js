const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// Rota para exibir a lista de tarefas
router.get("/", (req, res) => {
  // Criação de duas tarefas para testar o template
  const makeDinner = new Task(
    "dinner",
    "Make Dinner",
    "Make a dinner for my love"
  );
  const doLaundry = new Task(
    "laundry",
    "Do Laundry",
    "Do the laundry until 8pm"
  );
  const tasks = [makeDinner, doLaundry];
  res.render("index", { tasks });
});

// Rota para adicionar uma nova tarefa
router.post("/add", (req, res) => {
  const { title, description } = req.body;
  createTask(title, description); // Cria uma nova tarefa no Model
  res.redirect("/");
});

module.exports = router;
