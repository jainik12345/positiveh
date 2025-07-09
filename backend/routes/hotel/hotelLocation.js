const router = require("express").Router();
const controller = require("../../controller/hotel/hotelLocation.controller");

router.get("/", controller.getHotelLocations);
router.get("/trashed", controller.getTrashedHotelLocations);
router.get("/:id", controller.getHotelLocationById);
router.post("/", controller.insertHotelLocation);
router.put("/:id", controller.updateHotelLocation);
router.delete("/:id", controller.deleteHotelLocation);
router.patch("/restore/:id", controller.restoreHotelLocation);

router.get("/trashed/hotel/:hotel_id", controller.getTrashedHotelLocationsByHotel);


module.exports = router;
