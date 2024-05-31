const { createCategory, getAllCategories, getCategory, editCategory, deleteCategory } = require("../controllers/category");

const express = require("express");
const categoryRouter = express.Router();


// Users
categoryRouter.post("/create", createCategory);
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.put("/update/:id", editCategory);
categoryRouter.delete("/delete/:id", deleteCategory);

module.exports = { categoryRouter };