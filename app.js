const express = require('express');
const app = express();
const taskController = require('./controllers/taskController');

// Configuração do template engine EJS
app.set('view engine', 'ejs');

// Middleware para processar o corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Rota principal
app.use('/', taskController);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
