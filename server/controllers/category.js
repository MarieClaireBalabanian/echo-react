const { Category, sequelize } = require("../models/Category");

const createCategory = async (req, res) => {
    try {
        const existingCategory = await Category.findOne({
            where: { name: req.body.name }
        });
        if (existingCategory) return res.status(400).json({ error: 'Category already exists' });

        await Category.create({ name: req.body.name })
        res.status(201).json({message:"Category created"});
    }
    catch {
        res.status(400).json({message:"Error creating category"});
    }
};

const getCategory = async (req, res) => {
    try {
        const category = await Category.findOne({
            where: { id: req.params.id }
        });
        res.status(201).json({ category: category, message:"Category retrieved"});
    }
    catch {
        res.status(400).json({message:"Error fetching category"});
    }
};

const editCategory = async (req, res) => {

};

const deleteCategory = async (req, res) => {
    try {
        await Category.destroy({ where: { id: req.params.id } });
        res.status(200).json({message: 'All Categories deleted'})
    }
    catch {
        res.status(400).json({message: `Error deleting Category with id: ${req.body.id}`});
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(201).json({categories: categories, message: 'Success fetching all categories'});
    }
    catch {
        res.status(400).json({message:"Error fetching all categories"});
    }
 };

module.exports = { createCategory, getAllCategories, getCategory, editCategory, deleteCategory };