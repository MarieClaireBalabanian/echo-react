const { createCategory, getAllCategories, getCategory, editCategory, deleteCategory } = require("../controllers/category");

const express = require("express");
const categoryRouter = express.Router();


// Users
categoryRouter.post("/create-category", createCategory);
categoryRouter.get("/get-category/:id", getCategory);
categoryRouter.delete("/delete-category/:id", deleteCategory);
categoryRouter.put("/edit-category/:id", editCategory);
categoryRouter.get("/get-all-categories", getAllCategories);

module.exports = { categoryRouter };