const express = require('express');
const Book = require('./controllers/BooksController.controllers');

const app = express();

app.use(express.json());

app.get('/books', Book.getAllBooks);
app.get('/books/:id', Book.getBookById);

app.post('/books', Book.controllerCreate);

module.exports = app;