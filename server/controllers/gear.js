const { User, sequelize } = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const createUser = async (req, res) => {
    try {
        // Check for existing Email
        const existingEmail = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        // Check for taken username
        const existingUsername = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        if (existingEmail) {
            return res.status(400).json({ error: 'An account with this email already exists' });
        }
        if (existingUsername) {
            return res.status(400).json({ error: 'This username is already taken' });
        }

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
    catch {
        res.status(400).json({message:"Error"});
    }
    
 };

 const verifyUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            res.status(401).json({ error: 'No account is registered to this email address' });
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ email: user.email }, 'secret');
        if (token) {
            res.status(200).json({ username: user.username});
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    catch(error) {
        console.log(error)
    }
};

const getUserData = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.query.username
            },
            attributes: ['address', 'username' ]
        });
        res.status(200).json({ userData: user });  
    }
    catch(error) {
        console.log(error)
    }
};

const getAllUsers = async (req, res) => {
    User.findAll()
    .then((data) => {
        return res.status(200).json(data);
    })

 };

 const deleteAllUsers = async (req, res) => {
    await User.truncate();
    return res.status(200).json({message: 'Alll users deleted'})
 };
 
const editUser = (req, res) => {};
const deleteUser = (req, res) => {};

module.exports = { createUser, getAllUsers, getUserData, verifyUser, editUser, deleteAllUsers };