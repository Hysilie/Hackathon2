const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: process.env.UPLOAD_DIR });

const itemControllers = require("./controllers/itemControllers");
const fileControllers = require("./controllers/fileControllers");
const carControllers = require("./controllers/carControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const authControllers = require("./controllers/authController");
const userControllers = require("./controllers/userControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/auth");
const { verifyEmail } = require("./middlewares/verifyEmail");

router.get("/user", userControllers.browse);
router.get("/user/bytoken", verifyToken, userControllers.findByToken);
router.get("/user/:id", verifyToken, userControllers.read);
router.post("/user", verifyEmail, hashPassword, userControllers.add);
router.delete("/user/:id", userControllers.destroy);
router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.post(
  "/carPhoto",
  verifyToken,
  upload.single("carPhoto"),
  fileControllers.renameCarphoto,
  carControllers.updateCarphoto
);
router.get("/car-photo/:fileName", fileControllers.sendCarPhoto);

module.exports = router;
