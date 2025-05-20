const express = require("express");
const gearRouter = express.Router();
const {
  createUserGearItem,
  getAllGearItems,
  getGearItemsByCategory,
  getUserGearItems,
  deleteUserGearItem,
  deleteAllGearItems,
  searchGearItems,
} = require("../controllers/gearItem");

// Put search route before any routes with parameters
gearRouter.get("/search", searchGearItems);

// Then the rest of the routes
gearRouter.get("/", getAllGearItems);
gearRouter.get("/categories/:categorySlug", getGearItemsByCategory);
gearRouter.delete("/", deleteAllGearItems);
gearRouter.post("/:userId", createUserGearItem);
gearRouter.get("/:userId", getUserGearItems);
gearRouter.delete("/:userId/:gearId", deleteUserGearItem);

module.exports = { gearRouter };
