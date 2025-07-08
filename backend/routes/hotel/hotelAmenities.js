const express = require("express");
const router = express.Router();
const controller = require("../../controller/hotel/hotelAmenities.controller");

router.get("/", controller.getAllAmenities);
router.post("/", controller.insertAmenity);
router.put("/:id", controller.updateAmenity);
router.delete("/:id", controller.deleteAmenity);
router.patch("/restore/:id", controller.restoreAmenity);
router.get("/hotel/:hotelId", controller.getByHotelId);
router.get("/trashed/hotel/:hotelId", controller.getTrashedByHotelId);
router.get("/data/:id", controller.getAmenityById);

module.exports = router;