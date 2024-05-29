const express = require("express");
const apiRouter = express.Router();

const { userRouter } = require('./user');
const { categoryRouter } = require('./category');

apiRouter
    .use('/user', userRouter)
    .use('/category', categoryRouter) 

module.exports = { apiRouter };