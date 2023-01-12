const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: process.env.UPLOAD_DIR });

// REQUIRE FILES
const fileControllers = require("./controllers/fileControllers");
const carControllers = require("./controllers/carControllers");
const authControllers = require("./controllers/authController");
const userControllers = require("./controllers/userControllers");
const agencyControllers = require("./controllers/agencyControllers");
const rentalControllers = require("./controllers/rentalControllers");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/auth");
const { verifyEmail } = require("./middlewares/verifyEmail");

// AGENCY ROUTES
router.get("/agencies", agencyControllers.browse);

// USER ROUTES
router.get("/user", userControllers.browse);
router.get("/user/bytoken", verifyToken, userControllers.findByToken);
router.get("/user/:id", verifyToken, userControllers.read);
router.post("/register", verifyEmail, hashPassword, userControllers.add);
router.delete("/user/:id", userControllers.destroy);
router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

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

router.post(
  "/carPhoto",
  verifyToken,
  upload.single("carPhoto"),
  fileControllers.renameCarPhoto,
  carControllers.updateCarPhoto
);
router.get("/car-photo/:fileName", fileControllers.sendCarPhoto);

// RENTAL ROUTES
router.get("/rental", rentalControllers.browse);

module.exports = router;
