const { createGearItem, getAllGearItems, getUserGearItems, deleteAllGearItems } = require("../controllers/gearItem");

const express = require("express");
const gearRouter = express.Router();

// Gears
gearRouter.post("/", createGearItem);
gearRouter.get("/", getAllGearItems);
gearRouter.get("/:userId", getUserGearItems);
gearRouter.delete("/delete-all-gear", deleteAllGearItems);

module.exports = { gearRouter };