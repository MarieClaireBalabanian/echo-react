const express = require("express");
const apiRouter = express.Router();

const { userRouter } = require('./user');
const { categoryRouter } = require('./category');
const { gearRouter } = require('./gear');

apiRouter
    .use('/users', userRouter)
    .use('/categories', categoryRouter) 
    .use('/gear', gearRouter) 


module.exports = { apiRouter };