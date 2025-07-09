const router = require("express").Router();
const Controller = require("../../controller/hotel/hotelInquiry.controller");

router.get("/", Controller.getHotelInquirys);
router.post("/", Controller.insertHotelInquiry);
router.post("/reply", Controller.replyToHotelInquiry);
router.get("/trashed", Controller.getTrashedHotelInquirys);
router.delete("/:id", Controller.deleteHotelInquiry);
router.patch("/restore/:id", Controller.restoreHotelInquiry);

module.exports = router;
