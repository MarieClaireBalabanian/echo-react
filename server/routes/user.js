const { createUser, getAllUsers, getUserData, verifyUser , editUser, deleteAllUsers } = require("../controllers/users");

const express = require("express");
const userRouter = express.Router();

// Users
userRouter.post("/signup", createUser);
userRouter.post("/login", verifyUser);
userRouter.get("/get-user-data", getUserData);
userRouter.get("/get-all-users", getAllUsers);
userRouter.put("/", editUser);
userRouter.delete("/delete-all-users", deleteAllUsers);

module.exports = { userRouter };