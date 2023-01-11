const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authController");
const userControllers = require("./controllers/userControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/auth");
const { verifyEmail } = require("./middlewares/verifyEmail");

// USER ROUTES
router.get("/user", userControllers.browse);
router.get("/user/:id", verifyToken, userControllers.read);
router.post("/user", verifyEmail, hashPassword, userControllers.add);
router.delete("/user/:id", userControllers.destroy);
router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

const carControllers = require("./controllers/carControllers");

// CAR ROUTES
router.get("/carByAgency/:id", carControllers.browseAllCarsByAgency);
router.get("/totalCars", carControllers.browseAllCars);
router.get(
  "/totalCarsRentedByAgency/:id",
  carControllers.browseCarRentedByAgency
);
router.get(
  "/nonAvailableCarByAgency/:id",
  carControllers.findNonAvailableCarByAgency
);
router.post("/newCar", carControllers.addNewCar);

// RENTAL ROUTES
const rentalControllers = require("./controllers/rentalControllers");

router.get("/rental", rentalControllers.browse);

module.exports = router;
