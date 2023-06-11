# MVC com Templates e com REST

Olá! Meu nome é Lucas, sou professor da pós-graduação da **PUC Minas**. Este é um projeto para os alunos da pós-graduação.

# Start

Vamos começar pela abordagem MVC com Templates
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
cconst express = require("express");
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

Acesse a rota ```/``` e você verá os seus dados sendo exibidos à partir de um Template Engine.

Agora, acrescente o seguinte código ao arquivo **taskController.js** antes de exporta-lo:

```
// Rota para exibir a lista de tarefas utilizando o JSON
router.get("/tasks", (req, res) => {
  res.json(tasks);
});
```

Reinicie o servidor apertando ```control+C``` no terminal e digitando novamente ```node app.js```.

Acesse a rota ```/tasks``` e você terá um JSON como resposta, assim como no padrão REST.
