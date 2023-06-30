const booksRegister = require('../business/books_register')
const booksRepository = require('../persistency/books_persistency')

async function listedBooks(req, res) {
    const booksList = await booksRepository.listedBooks();
    res.json(booksList);
}

function searchById(req,res) {
    const id = req.params.id;
    try{
        const book = booksRegister.searchById(id);
        res.json(book);
    } catch (err) {
        res.status(err.number).json(err);
    }
}

function insertNewBook(req, res) {
    const book = req.body;

    try{
        const insertedBook = booksRegister.insertNewBook(book);
        res.status(201).json(insertedBook);
    }
    catch (err) {
        res.status(err.number).json(err);
    }
}

function updateBook(req,res) {
    const id = req.params.id;
    const book = req.body;
    try{
        const bookAtualizado = booksRegister.updateBook(id,xbook);
        res.json(bookAtualizado);
    }
    catch (err) {
        res.status(err.number).json(err);
    }

}

function deleteBook(req,res) {
    const id = req.params.id;
    try{
        const deletedBook = booksRegister.deleteBook(id);
        res.json(deletedBook);
    }
    catch (err) {
        res.status(err.number).json(err);
    }
}

module.exports = {
    listedBooks,
    searchById,
    insertNewBook, 
    updateBook,
    deleteBook
}