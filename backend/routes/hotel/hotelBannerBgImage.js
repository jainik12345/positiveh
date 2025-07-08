const express = require("express");
const router = express.Router();
const controller = require("../../controller/hotel/hotelBannerBgImage.controller");

// Routes
router.get("/", controller.getAllBanners);
router.post("/", controller.insertBanner);
router.put("/:id", controller.updateBanner);
router.delete("/:id", controller.deleteBanner);
router.patch("/restore/:id", controller.restoreBanner);
router.get("/hotel/:hotelId", controller.getByHotelId);
router.get("/trashed/hotel/:hotelId", controller.getTrashedByHotelId);
router.get("/data/:id", controller.getBannerById);

module.exports = router;
