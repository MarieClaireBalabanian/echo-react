const express = require("express");
const userRouter = express.Router();
const { createUser, getAllUsers, getUser, loginUser , editUser, deleteUser, deleteAllUsers } = require("../controllers/user");

// Users
userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);
userRouter.delete("/", deleteAllUsers);

userRouter.post("/login", loginUser);
userRouter.get("/:username", getUser);
userRouter.patch("/:id", editUser);
userRouter.delete("/:id", deleteUser);

module.exports = { userRouter };