const { Client } = require('pg')

const connection = ({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'books_crud',
})

async function listedBooks() {
    // Instanciar o Client
    const book = new Client(connection)
    const sql = "SELECT * FROM books"
    // Fazer a conexão
    book.connect()
    // Realizar a query
    try {
        const result = await book.query(sql)
        // Fechar a conexão 
        book.end()
        // Trabalhar com o resultado
        return result.rows
    } catch(err) {
        throw err
    }
}

async function insertNewBook(book) {
    const bookConnection = new Client(connection)
    const sql = "INSERT INTO books(id, name, isbn, author, year) VALUES($1,$2,$3,$4,$5) RETURNING *"
    const values = [book.id, book.name, book.isbn, book.author, book.year]
    bookConnection.connect()
    try {
        const result = await bookConnection.query(sql, values)
        bookConnection.end()
        return result.rows[0]
    } catch(err) {
        throw err
    }
}

async function searchById(id) {
    const book = new Client(connection)
    const sql = "SELECT * FROM books WHERE id=$1"
    const values = [id]
    book.connect()
    try {
        const result = await book.query(sql, values)
        book.end()
        return result.rows[0]
    }
    catch(err){
        throw err
    }
}

async function updateBook(id, book) {
    const bookConnection = new Client(connection)
    const sql = "UPDATE books SET name=$1, isbn=$2, author=$3, year=$4 WHERE id=$5  RETURNING *"
    const values = [book.name, book.isbn, book.author, book.year, id]
    bookConnection.connect()
    try {
        const result = await bookConnection.query(sql,values)
        bookConnection.end()
        return result.rows[0]
    } catch(err) {
        throw err
    }
}

async function deleteBook(id) {
    const book = new Client(connection)
    const sql = "DELETE FROM books WHERE id=$1 RETURNING *"
    const values = [id]
    book.connect()
    try {
        const result = await book.query(sql, values)
        book.end()
        return result.rows[0]
    } catch(err) {
        throw err
    }
}

module.exports = { 
    listedBooks,
    insertNewBook,
    searchById,
    updateBook,
    deleteBook
}