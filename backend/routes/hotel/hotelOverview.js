const express = require("express");
const router = express.Router();
const controller = require("../../controller/hotel/hotelOverview.controller");

router.get("/", controller.getAllOverviews);
router.post("/", controller.insertOverview);
router.put("/:id", controller.updateOverview);
router.delete("/:id", controller.deleteOverview);
router.patch("/restore/:id", controller.restoreOverview);
router.get("/hotel/:hotelId", controller.getByHotelId);
router.get("/trashed/hotel/:hotelId", controller.getTrashedByHotelId);
router.get("/data/:id", controller.getOverviewById);

module.exports = router;
