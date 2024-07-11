const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const db = require("./config/database");
const UserModel = require("./models/User");
const CategoryModel = require("./models/Category");
const GearItemModel = require("./models/GearItem");

const port = 8080;
const { apiRouter } = require("./routes");

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false })).use(express.json());

// Middleware for JWT validation
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = decoded;
    next();
  });
};

const initApp = async () => {
  console.log("Testing the database connection..");

  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");

    await db.sync({ alter: true });

    app.use("/api", apiRouter);

    app.listen(port, () => {
      console.log(`Server is running at: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initApp();
