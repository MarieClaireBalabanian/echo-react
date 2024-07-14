const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  getAllUsers,
  getUser,
  loginUser,
  editUser,
  deleteUser,
  deleteAllUsers,
  verifyUserToken
} = require("../controllers/user");

// Users
userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);
userRouter.delete("/", deleteAllUsers);

userRouter.post("/login", loginUser);
userRouter.post("/token", verifyUserToken)
userRouter.get("/:username/:token?", getUser);
userRouter.patch("/:id", editUser);
userRouter.delete("/:id", deleteUser);

module.exports = { userRouter };
