const router = require("express").Router();
const controller = require("../../controller/career/careerOpportunities.controller");

router.get("/", controller.getCareerOpportunities);
router.get("/trashed", controller.getTrashedCareerOpportunities);
router.get("/:id", controller.getCareerOpportunitiesById);
router.post("/", controller.insertCareerOpportunities);
router.put("/:id", controller.updateCareerOpportunities);
router.delete("/:id", controller.deleteCareerOpportunities);
router.patch("/restore/:id", controller.restoreCareerOpportunities);

module.exports = router;
