const booksPersistency = require("../persistency/books_persistency");

// http://localhost:3000/books

let bookList = [];
let idAutoIncrement = 1;

// Retornando a lista de books (READ)
async function listedBooks() {
    try{
        const bookList = await booksPersistency.listedBooks();
        return bookList;
    }
    catch(err) { throw err; }
}

// Adicionando um book novo na lista de books (CREATE)
async function insertNewBook(book) {
    if (book && book.id && book.name && book.isbn && book.author && book.year) {
        try {
            const insertedBook = await booksPersistency.insertNewBook(book);
            return insertedBook
        } catch(err) { throw err; }
    } else {
        const error = new Error();
        error.message = "ERRO: Parâmetros inválidos!";
        error.status = 400;
        throw error;
    }
}

// Buscando o livro pelo ID 
async function searchById(id) {
    try { 
        const book = await booksPersistency.searchById(id)
        if(!book) {
            let error = new Error()
            error.message = "ERRO: Livro não encontrado!"
            error.status = 404
            throw error
        }
        return book
    } catch(err) { throw err; }
}

// Atualizando dados de algum book na lista de books
async function updateBook(id, alterInfo) {
    if(alterInfo && alterInfo.id && alterInfo.name && alterInfo.isbn && alterInfo.author && alterInfo.year) {
        try {
            const updatedBook = await booksPersistency.updateBook(id, alterInfo)
            if(!updatedBook) {
                let error = new Error()
                error.message = "ERRO: Livro não encontrado!"
                error.status = 404
                throw error
            }
            return updatedBook;
        } 
        catch(err) { throw err }
    } 
    else {
        const error = new Error()
        error.message = "ERRO: Parâmetros inválidos!"
        error.status = 400
        throw error
    }
}

// Deletando algum livro da lista, utilizando como parâmetro o Id
async function deleteBook(id) {
    try { 
        const book = await booksPersistency.deleteBook(id)
        if(!book) {
            let error = new Error()
            error.message = "ERRO: Livro não encontrado!"
            error.status = 404
            throw error
        }
        return book
    } 
    catch(err) { throw err }
}

// "Exportando" as funções
module.exports = { 
    listedBooks,
    insertNewBook,
    searchById,
    updateBook,
    deleteBook
}