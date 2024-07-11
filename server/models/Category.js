const sequelize = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const { GearItem } = require("./GearItem");

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Category, sequelize };
