const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register",
    [
        body("email").isEmail().withMessage("Please enter a valid email"),
        body("fullname.firstname")
            .isLength({ min: 3 })
            .withMessage("First name must be at least 3 characters long"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long"),
        body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
        body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
        body('vehicle.capacity').isInt({ min: 1 }).withMessage('capacity must be at least 1'),
        body('vehicle.vehicleType').isIn(['car', 'motorcycle','auto']).withMessage('vehicleType must be car, motorcycle or auto'),
    ],
    captainController.registerCaptain
)

module.exports = router;
