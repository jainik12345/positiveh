const router = require("express").Router();
const controller = require("../../controller/career/careerMoreInfo.controller");

router.get("/", controller.getCareerMoreInfo);
router.get("/trashed", controller.getTrashedCareerMoreInfo);
router.get("/:id", controller.getCareerMoreInfoById);
router.post("/", controller.insertCareerMoreInfo);
router.put("/:id", controller.updateCareerMoreInfo);
router.delete("/:id", controller.deleteCareerMoreInfo);
router.patch("/restore/:id", controller.restoreCareerMoreInfo);

module.exports = router;
