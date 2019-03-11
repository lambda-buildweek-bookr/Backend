const express = require('express');
const logger = require("morgan");
const helmet = require("helmet");

const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');
const reviewsRouter = require('./routes/reviews');


const server = express();

server.use(logger('dev'), helmet(), express.json());

server.use('/api/users', usersRouter);
server.use('/api/books', booksRouter);
server.use('/api/reviews', reviewsRouter);

module.exports = server;