const { Category, sequelize } = require("../models/Category");

const createCategory = async (req, res) => {
    try {
        const existingCategory = await Category.findOne({
            where: { name: req.body.name }
        });
        if (existingCategory) return res.status(409).json({ error: 'Category already exists' });

        await Category.create({ name: req.body.name })
        res.status(201).json({message:"Category created"});
    }
    catch {
        res.status(500).json({message:"Error creating category"});
    }
};

const getCategory = async (req, res) => {
    try {
        const category = await Category.findOne({
            where: { id: req.params.id }
        });
        if (!category) return res.status(404).json({ message:"Category doesn't exist"});
        res.status(200).json({ category: category, message:"Category retrieved"});
    }
    catch {
        res.status(400).json({message:"Error fetching category"});
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json({categories: categories, message: 'Success fetching all categories'});
    }
    catch {
        res.status(500).json({message:"Error fetching all categories"});
    }
 };

 const editCategory = async (req, res) => {

 };
 
 const deleteCategory = async (req, res) => {
     try {
         const category = await Category.destroy({ where: { id: req.params.id } });
         if (!category) return res.status(404).json({ message:"Category doesn't exist"});
         res.status(200).json({message: `Deleted category with id: ${req.body.id}`})
     }
     catch {
         res.status(400).json({message: `Error deleting Category with id: ${req.body.id}`});
     }
 };

module.exports = { createCategory, getAllCategories, getCategory, editCategory, deleteCategory };