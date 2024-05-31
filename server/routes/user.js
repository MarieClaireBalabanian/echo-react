const { createUser, getAllUsers, getUser, verifyUser , editUser, deleteUser, deleteAllUsers } = require("../controllers/user");

const express = require("express");
const userRouter = express.Router();

// Users
userRouter.post("/signup", createUser);
userRouter.post("/login", verifyUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:username", getUser);
userRouter.put("/update/:id", editUser);
userRouter.delete("/delete/:id", deleteUser);
userRouter.delete("/delete-all-users", deleteAllUsers);

module.exports = { userRouter };