const express = require('express');
const booksRoute = require('./routes/books_routes.js');

const app = express();

// Método para o Express utilizar/ler JSON
app.use(express.json());

app.use('/books', booksRoute);

// Método listen vai "lançar" o servidor . Porta 3000
app.listen(3000, function(){
    console.log('Servidor iniciando...')
});

//const data = require('./data.json');

// alguma coisa