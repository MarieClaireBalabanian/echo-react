const { Category, sequelize } = require("../models/Category");
const { GearItem } = require('../models/GearItem')


const createCategory = async (req, res) => {
    try {
        const existingCategory = await Category.findOne({
            where: { name: req.body.name }
        });
        if (existingCategory) return res.status(409).json({ error: 'Category already exists' });

        await Category.create({ name: req.body.name })
        res.status(201).json({ message: "Category created" });
    }
    catch {
        res.status(500).json({ message: "Error creating category" });
    }
};

const getCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) return res.status(404).json({ message: "Category doesn't exist" });
        res.status(200).json({ category: category, message: "Category retrieved" });
    }
    catch(err) {
        
        res.status(400).json({ message: err });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    }
    catch {
        res.status(500).json({ message: "Error fetching all categories" });
    }
};

const editCategory = async (req, res) => {

};

const deleteCategory = async (req, res) => {
    try {
        const category =  await Category.findByPk(req.params.id,{
            include: GearItem
        });

        if (!category) return res.status(404).json({ message: "Category doesn't exist" });

        if (category.GearItems && category.GearItems.length > 0) {
            await Promise.all(category.GearItems.map(async (gearItem) => {
                await gearItem.removeCategory(category);
            }));
        }
        await category.destroy();
        res.status(200).json({ message: `Deleted category with id: ${req.params.id}` })
    }
    catch(err) {
        res.status(400).json({ message: `${req.params.id}: ${err}` });
    }
};

module.exports = { createCategory, getAllCategories, getCategory, editCategory, deleteCategory };