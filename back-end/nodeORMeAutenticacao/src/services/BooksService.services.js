const { Book } = require('../models');

const getAllBooks = async () => {
  const result = await Book.findAll();

  return result;
};

const getBookById = async (id) => {
  const result = await Book.findByPk(id);

  return result;
}

const serviceCreate = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
};

module.exports = {
  getAllBooks,
  getBookById,
  serviceCreate,
};