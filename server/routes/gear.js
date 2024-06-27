const express = require("express");
const gearRouter = express.Router();
const { createUserGearItem, getAllGearItems, getUserGearItems, deleteUserGearItem, deleteAllGearItems } = require("../controllers/gearItem");

// Gear
gearRouter.get("/", getAllGearItems);
gearRouter.delete("/", deleteAllGearItems);
gearRouter.post("/:userId", createUserGearItem);
gearRouter.get("/:userId", getUserGearItems);
gearRouter.delete("/:userId/:gearId", deleteUserGearItem);

module.exports = { gearRouter };