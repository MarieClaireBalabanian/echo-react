const sequelize = require("../config/database")
const { Sequelize, DataTypes } = require('sequelize')
const { GearItem } = require('./GearItem')

const User = sequelize.define(
   "User",
   {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'user'
    },
   },
);

User.hasMany(GearItem, { onDelete: 'CASCADE' });
GearItem.belongsTo(User);

module.exports = { User, sequelize }