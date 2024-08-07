const express = require("express");
const apiRouter = express.Router();

const { userRouter } = require("./user");
const { categoryRouter } = require("./category");
const { gearRouter } = require("./gear");


const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['../routes/routes*.js'],
};

apiRouter.use('/api-docs', swaggerUi.serve);
apiRouter.get('/api-docs', swaggerUi.setup(swaggerJsdoc));

apiRouter.use("/users", userRouter).use("/categories", categoryRouter).use("/gear", gearRouter);

module.exports = { apiRouter };







const openapiSpecification = swaggerJsdoc(options);