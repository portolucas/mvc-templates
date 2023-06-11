# MVC com Templates

Olá! Meu nome é Lucas, sou professor da pós-graduação da **PUC Minas**. Este é um projeto para os alunos da pós-graduação.

# Start

Crie um projeto NodeJS com o seguinte comando:
```
node init -y
```
Instale as dependências:
```
npm install express ejs
```

## Create files and folders

Crie as seguintes pastas: **models**, **views** e **controllers**.

Dentro da pasta models, crie um arquivo chamado **task.js**
```
class Task {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

module.exports = Task;
```
Dentro da pasta views, crie o arquivo **index.ejs**
```
<!DOCTYPE html>
<html>
<head>
  <title>Lista de Tarefas</title>
</head>
<body>
  <h1>Minhas Tarefas</h1>
  <ul>
    <% tasks.forEach((task) => { %>
    <li><%= task.title %></li>
    <% }); %>
  </ul>
</body>
</html>
```
Dentro da pasta controllers, crie o arquivo **taskController.js**
```
const  express  =  require("express");

const  router  =  express.Router();

const  Task  =  require("../models/task");

// Rota para exibir a lista de tarefas

router.get("/",  (req,  res)  =>  {

// Criação de duas tarefas para testar o template

const  makeDinner  =  new  Task(

"dinner",

"Make Dinner",

"Make a dinner for my love"

);

const  doLaundry  =  new  Task(

"laundry",

"Do Laundry",

"Do the laundry until 8pm"

);

const  tasks  = [makeDinner,  doLaundry];

res.render("index",  {  tasks  });

});

// Rota para adicionar uma nova tarefa

router.post("/add",  (req,  res)  =>  {

const  {  title,  description  }  =  req.body;

createTask(title,  description);  // Cria uma nova tarefa no Model

res.redirect("/");

});

module.exports  =  router;
```
Finalmente, crie o arquivo **app.js** na raiz do projeto
```
const  express  =  require('express');

const  app  =  express();

const  taskController  =  require('./controllers/taskController');

// Configuração do template engine EJS

app.set('view engine',  'ejs');

// Middleware para processar o corpo das requisições

app.use(express.urlencoded({  extended:  true  }));

// Rota principal

app.use('/',  taskController);

// Iniciar o servidor

app.listen(3000,  ()  =>  {

console.log('Servidor iniciado na porta 3000');

});
```
No terminal, execute o seguinte comando para iniciar o servidor:
```
node app.js
```
