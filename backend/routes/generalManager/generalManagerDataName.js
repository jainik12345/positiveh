const express = require("express");
const router = express.Router();
const controller = require("../../controller/generalManager/generalManagerDataName.controller");

router.get("/", controller.getAll);
router.get("/hotel/:hotelId", controller.getByHotelId);
router.get("/data/:id", controller.getById);
router.post("/", controller.insert);
router.put("/:id", controller.update);
router.delete("/:id", controller.softDelete);
router.patch("/restore/:id", controller.restore);
router.get("/trashed/hotel/:hotelId", controller.getTrashedByHotelId);

// OTP & Auth
router.post("/send-otp", controller.sendOtp);
router.post("/verify-otp", controller.verifyOtp);
router.post("/reset-password", controller.resetPassword);
router.post("/login", controller.login);

module.exports = router;
