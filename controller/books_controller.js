const booksRegister = require('../business/books_register')
const booksRepository = require('../persistency/books_persistency')

async function listedBooks(req, res) {
    try {
        const booksList = await booksRepository.listedBooks();
        res.json(booksList);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function searchById(req,res) {
    const id = req.params.id;
    try{
        const book = await booksRegister.searchById(id);
        res.json(book);
    } catch (err) {
        if (err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro não identificado."})
        }
    }
}

async function insertNewBook(req, res) {
    const book = req.body;

    try{
        const insertedBook = await booksRegister.insertNewBook(book);
        res.status(201).json(insertedBook);
    }
    catch (err) {
        if (err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro não identificado."})
        }
    }
}

async function updateBook(req,res) {
    const id = req.params.id;
    const book = req.body;
    try{
        const bookAtualizado = await booksRegister.updateBook(id,book);
        res.json(bookAtualizado);
    }
    catch (err) {
        if (err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro nao identificado"})
        }
    }
}

async function deleteBook(req,res) {
    const id = req.params.id;
    try{
        const deletedBook = await booksRegister.deleteBook(id);
        res.json(deletedBook);
    }
    catch (err) {
        if(err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro nao identificado"})
        }
    }
}

module.exports = {
    listedBooks,
    searchById,
    insertNewBook, 
    updateBook,
    deleteBook
}