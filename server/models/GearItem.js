const sequelize = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const { Category } = require("./Category");

const GearItem = sequelize.define("GearItem", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  makeModel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coords: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.belongsToMany(GearItem, { through: "CategoryGearItem" });
GearItem.belongsToMany(Category, { through: "CategoryGearItem" });
module.exports = { GearItem, sequelize };
