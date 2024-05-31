const { User, sequelize } = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { GearItem } = require('../models/GearItem')


const createUser = async (req, res) => {
    try {
        // Check for existing Email
        const existingEmail = await User.findOne({
            where: { email: req.body.email }
        });
        // Check for taken username
        const existingUsername = await User.findOne({
            where: {  username: req.body.username }
        });
        if (existingEmail) return res.status(409).json({ error: 'Email already exists' });
        if (existingUsername) return res.status(409).json({ error: 'This username is already taken' });
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create record with hashed password
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
            address: req.body.address,
        })
        res.status(201).json({username: user.username, message:"Successfully Registered"});
    }
    catch(error) {
        res.status(500).json({message:"Internal Error", error: error});
    } 
 };

 const verifyUser = async (req, res) => {
    try {
        // does account with email exist
        const user = await User.findOne({
            where: { email: req.body.email },
        });
        if (!user) return res.status(404).json({ error: 'No account with this email address' });
        // check passwword
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) return res.status(401).json({ error: 'Invalid password' });
        // create jwt token
        const token = jwt.sign({ email: user.email }, 'secret');
        if (token) res.status(200).json({ username: user.username});
        else res.status(500).json({ error: 'Error setting jwtoken' });
    }
    catch(error) {
        res.status(500).json({message:"Internal Error", error: error});
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { username: req.params.username},
            include: { model: GearItem }
        });

        if (!user) return res.status(404).json({ message: 'User not found' });  
        res.status(200).json(user);  
    }
    catch(error) {
        res.status(500).json({message:"Internal Error", error: error});
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json({ users: users, message: 'Success, all users retrieved' });  
    }
    catch(error) {
        res.status(500).json({message:"Internal Error", error: error});
    }
 };

 const deleteAllUsers = async (req, res) => {
    try {
        await User.truncate();
        res.status(200).json({message: 'All users deleted'}) 
    }
    catch(error) {
        res.status(500).json({message:"Internal Error", error: error});
    }
 };
 
const editUser = (req, res) => {};
const deleteUser = (req, res) => {};

module.exports = { createUser, getAllUsers, getUser, verifyUser, editUser, deleteUser, deleteAllUsers };