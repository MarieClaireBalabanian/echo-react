const { createGearItem, getAllGearItems, deleteAllGearItems } = require("../controllers/gearItem");

const express = require("express");
const gearRouter = express.Router();

// Gears

gearRouter.post("/create", createGearItem);
gearRouter.get("/", getAllGearItems);
gearRouter.delete("/delete-all-gear", deleteAllGearItems);


module.exports = { gearRouter };