const { GearItem, sequelize } = require("../models/GearItem");
const { Op } = require("sequelize");
const { User } = require("../models/User");
const { Category } = require("../models/Category");

const createUserGearItem = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const gearItem = await GearItem.create({
      title: req.body.title,
      makeModel: req.body.makeModel,
      description: req.body.description,
      location: req.body.location,
      coords: req.body.coords,
      UserId: user.id,
    });
    if (req.body.categories && req.body.categories.length > 0) {
      const categories = await Category.findAll({
        where: { id: req.body.categories },
      });
      await gearItem.addCategories(categories);
    }
    res.status(201).json(gearItem);
  } catch {
    res.status(500).json({ message: "Error creating gear item" });
  }
};

const getUserGearItems = async (req, res) => {
  try {
    const gearItems = await GearItem.findAll({
      where: { UserId: req.params.userId },
      include: {
        model: Category,
        attributes: ["name", "id"],
        through: { attributes: [] },
      },
    });
    res.status(200).json(gearItems);
  } catch {
    res.status(500).json({ message: "Error fetching user gear" });
  }
};

const editUserGearItem = async (req, res) => {
  try {
    const gearItem = await GearItem.findByPk(req.params.gearId);
    if (!gearItem) return res.status(404).json({ message: "item doesn't exist" });
    await gearItem.setCategories([]);
    await gearItem.destroy();
    res.status(200).json({ message: "Item deleted!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error });
  }
};


const deleteUserGearItem = async (req, res) => {
  try {
    const gearItem = await GearItem.findByPk(req.params.gearId);
    if (!gearItem) return res.status(404).json({ message: "item not found" });
    await gearItem.setCategories([]);
    await gearItem.destroy();
    const updatedGearItems = await GearItem.findAll({
      where: {
        userId: req.params.userId
      } 
    });
    res.status(200).json({ gear: updatedGearItems, message: `${gearItem.title} has been deleted.`});
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error });
  }
};

const getAllGearItems = async (req, res) => {
  try {
    const whereStatement = {};
    if (req.query.exclude) {
      whereStatement.UserId = { [Op.ne]: req.query.exclude }
    }
    const gear = await GearItem.findAll({
      where: whereStatement,
      attributes: ["title", "id", "location", "coords"],
      include: [{
        model: Category,
        attributes: ["name", "id"],
        through: { attributes: [] },
      }],
    });
    res.status(200).json({
      gear: gear,
      message: "All gear retrieved",
    });
  } catch {
    res.status(500).json({ message: "Error fetching all gear" });
  }
};

const deleteAllGearItems = async (req, res) => {
  try {
    const gearItems = await GearItem.findAll();
    if (!gearItems.length) return;
    await Promise.all(
      gearItems.map(async (gearItem) => {
        await gearItem.setCategories([]);
        await gearItem.destroy();
      })
    );
    res.status(200).json({ message: "All gear items deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error });
  }
};

const searchGearItems = async (req, res) => {
  try {
    const limit = 12;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    
    const searchQuery = req.query.keyword || '';
    const categories = req.query.categories ? req.query.categories.split(',') : [];
    const excludeUserId = req.query.excludeUserId;

    let whereClause = {};
    
    // Handle logged in user's gear exclusion
    if (excludeUserId) {
      whereClause.UserId = { [Op.ne]: excludeUserId };
    }

    // Handle keyword search
    if (searchQuery) {
      const searchCondition = {
        [Op.or]: [
          { title: { [Op.like]: `%${searchQuery}%` } },
          { description: { [Op.like]: `%${searchQuery}%` } },
          { makeModel: { [Op.like]: `%${searchQuery}%` } }
        ]
      };
      whereClause = {
        ...whereClause,
        ...searchCondition
      };
    }

    const gearItems = await GearItem.findAndCountAll({
      where: whereClause,
      limit: limit,
      offset: offset,
      include: [
        {
          model: Category,
          // Filter gear items by category
          where: categories.length > 0 ? { id: { [Op.in]: categories } } : undefined,
          through: { attributes: [] },
        }
      ],
      distinct: true,
    });

    res.status(200).json({
      items: gearItems.rows,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(gearItems.count / limit),
        totalItems: gearItems.count,
        itemsPerPage: limit
      }
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: "Internal Error", error: error });
  }
};

const getGearItemsByCategory = async (req, res) => {
  try {
    const limit = 12;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    
    const gearItems = await GearItem.findAndCountAll({
      limit: limit,
      offset: offset,
      distinct: true,
      include: [
        {
          model: Category,
          where: { slug: req.params.categorySlug },
          through: { attributes: [] },
        }
      ],
    });

    res.status(200).json({
      items: gearItems.rows,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(gearItems.count / limit),
        totalItems: gearItems.count,
        itemsPerPage: limit
      }
    });
    
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error });
  }
};

module.exports = {
  createUserGearItem,
  deleteUserGearItem,
  getAllGearItems,
  getGearItemsByCategory,
  getUserGearItems,
  deleteAllGearItems,
  searchGearItems,
};
