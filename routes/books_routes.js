const express = require('express');
const booksRegister = require('../business/books_register')
const booksController = require('../controller/books_controller')

const router = express.Router();

//Recurso: Livros - rota: /books
router.get('/', booksController.listedBooks);
router.get('/:id', booksController.searchById)
router.post('/', booksController.insertNewBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = router;