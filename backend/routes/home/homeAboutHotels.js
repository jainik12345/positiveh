const router = require("express").Router();
const controller = require("../../controller/home/homeAboutHotels.controller");

router.get("/", controller.getHomeAboutHotels);
router.get("/trashed", controller.getTrashedHomeAboutHotels);
router.get("/:id", controller.getHomeAboutHotelsId);
router.post("/", controller.insertHomeAboutHotels);
router.put("/:id", controller.updateHomeAboutHotels);
router.delete("/:id", controller.deleteHomeAboutHotels);
router.patch("/restore/:id", controller.restoreHomeAboutHotels);

module.exports = router;
