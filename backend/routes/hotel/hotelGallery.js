const express = require("express");
const router = express.Router();
const controller = require("../../controller/hotel/hotelGallery.controller");

router.get("/", controller.getAllGalleryItems);
router.post("/", controller.insertGalleryItem);
router.put("/:id", controller.updateGalleryItem);
router.delete("/:id", controller.deleteGalleryItem);
router.patch("/restore/:id", controller.restoreGalleryItem);
router.get("/hotel/:hotelId", controller.getByHotelId);
router.get("/trashed/hotel/:hotelId", controller.getTrashedByHotelId);
router.get("/data/:id", controller.getGalleryItemById);

module.exports = router;
