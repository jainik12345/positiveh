const router = require("express").Router();
const controller = require("../../controller/hotel/hotelName.controller");

router.get("/", controller.getHotels);
router.get("/trashed", controller.getTrashedHotels);
router.get("/:id", controller.getHotelById);
router.post("/", controller.insertHotel);
router.put("/:id", controller.updateHotel);
router.delete("/:id", controller.deleteHotel);
router.patch("/restore/:id", controller.restoreHotel);

module.exports = router;
