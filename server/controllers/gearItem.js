const { GearItem, sequelize } = require("../models/GearItem");
const { User } = require('../models/User')
const { Category } = require('../models/Category')

const createGearItem = async (req, res) => {
    try {
        const user = await User.findByPk(req.body.userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const gearItem = await GearItem.create(
            {
                title: req.body.title,
                makeModel: req.body.makeModel,
                description: req.body.description,
                location: req.body.location,
                UserId: user.id
            },
        );
        if (req.body.categories && req.body.categories.length > 0) {
            const categories = await Category.findAll({
              where: { id: req.body.categories } // Assuming category IDs are passed in the request body
            });
            console.log(categories)
            await gearItem.addCategories(categories);
          }
        res.status(201).json({gearItem: gearItem, message:"GearItem Item added!"});
    }
    catch {
        res.status(500).json({message:"Error creating gear item"});
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
        await GearItem.truncate();
        res.status(200).json({message: 'All gear items deleted'}) 
    }
    catch(error) {
        res.status(500).json({message:"Internal Error", error: error});
    }
 };

module.exports = { createGearItem, getAllGearItems, deleteAllGearItems };