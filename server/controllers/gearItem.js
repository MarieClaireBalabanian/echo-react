const { GearItem, sequelize } = require("../models/GearItem");
const { User } = require('../models/User')
const { Category } = require('../models/Category')

const createUserGearItem = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const gearItem = await GearItem.create({
            title: req.body.title,
            makeModel: req.body.makeModel,
            description: req.body.description,
            location: req.body.location,
            UserId: user.id
        });
        if (req.body.categories && req.body.categories.length > 0) {
            const categories = await Category.findAll({
              where: { id: req.body.categories }
            });
            await gearItem.addCategories(categories);
        }
        res.status(201).json(gearItem);
    }
    catch {
        res.status(500).json({message:"Error creating gear item"});
    }
};

const getUserGearItems = async (req, res) => {
    try {
        const gearItems = await GearItem.findAll({
            where: { UserId: req.params.userId },
            include: { 
                model: Category, 
                attributes:['name', 'id'] ,
                through: {attributes: []}
            },
        });
        res.status(200).json(gearItems);
    }
    catch {
        res.status(500).json({message:"Error fetching user gear"});
    }
};

const deleteUserGearItem = async (req, res) => {
    try {
        const gearItem = await GearItem.findByPk(req.params.gearId);
        if (!gearItem) return res.status(200).json({message: "item doesn't exist"}) 
        await gearItem.setCategories([]); 
        await gearItem.destroy();
        res.status(200).json({message: 'Item deleted!'}) 
    }
    catch(error) {
        res.status(500).json({message:"Internal Error", error: error});
    }
 };

const getAllGearItems = async (req, res) => {
    try {
        const gearItem = await GearItem.findAll();
        res.status(200).json({ gearItem: gearItem, message:"All gear retrieved"});
    }
    catch {
        res.status(500).json({message:"Error fetching all gear"});
    }
};

const deleteAllGearItems = async (req, res) => {
    try {
        const gearItems = await GearItem.findAll();
        if (!gearItems.length) return;
        await Promise.all(gearItems.map(async (gearItem) => {
            await gearItem.setCategories([]); 
            await gearItem.destroy();
        }));
        res.status(200).json({ message:"All gear items deleted"});
    }
    catch(error) {
        res.status(500).json({message:"Internal Error", error: error});
    }
};

module.exports = { createUserGearItem, deleteUserGearItem, getAllGearItems, getUserGearItems, deleteAllGearItems };