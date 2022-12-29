const BooksService = require('../services/BooksService.services');

const getAllBooks = async (_req, res) => {
  try {
    const books = await BooksService.getAllBooks();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Ocorreu um erro.' });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await BooksService.getBookById(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Ocorreu um erro.' });
  }
};

const controllerCreate = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BooksService.serviceCreate({ title, author, pageQuantity });

  res.status(201).json(book);
};

module.exports = {
  getAllBooks,
  getBookById,
  controllerCreate,
};
