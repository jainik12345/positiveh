const router = require("express").Router();
const teamSectionTitleController = require("../../controller/team/teamSectionTitle.controller");

router.get("/", teamSectionTitleController.getTeamSectionTitles);
router.post("/", teamSectionTitleController.insertTeamSectionTitle);
router.put("/:id", teamSectionTitleController.updateTeamSectionTitle);
router.delete("/:id", teamSectionTitleController.deleteTeamSectionTitle);
router.get("/trashed", teamSectionTitleController.getTrashedTeamSectionTitles);
router.patch("/restore/:id", teamSectionTitleController.restoreTeamSectionTitle);

module.exports = router;