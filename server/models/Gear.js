const sequelize = require("../config/database")
const { Sequelize, DataTypes } = require('sequelize')

const Gear = sequelize.define(
   "Gear",
   {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    make_model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    make_model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   },
);

module.exports = { Gear, sequelize }