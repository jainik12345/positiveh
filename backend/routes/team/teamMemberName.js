const router = require("express").Router();
const controller = require("../../controller/team/teamMemberName.controller");

router.get("/", controller.getTeamMemberName);
router.get("/trashed", controller.getTrashedTeamMemberName);
router.get("/:id", controller.getTeamMemberNameById);
router.post("/", controller.insertTeamMemberName);
router.put("/:id", controller.updateTeamMemberName);
router.delete("/:id", controller.deleteTeamMemberName);
router.patch("/restore/:id", controller.restoreTeamMemberName);

module.exports = router;