const express = require("express");
const categoryRouter = express.Router();
const { createCategory, getAllCategories, getCategory, editCategory, deleteCategory } = require("../controllers/category");

// Users
categoryRouter.post("/create", createCategory);
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.put("/update/:id", editCategory);
categoryRouter.delete("/:id", deleteCategory);

module.exports = { categoryRouter };