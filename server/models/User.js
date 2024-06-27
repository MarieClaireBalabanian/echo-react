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
    coords: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
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

User.hasMany(GearItem);
GearItem.belongsTo(User, { onDelete: 'CASCADE' });

module.exports = { User, sequelize }