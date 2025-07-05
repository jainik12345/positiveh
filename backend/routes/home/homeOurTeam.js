const router = require("express").Router();
const HoemOurTeamController = require("../../controller/home/homeOurTeam.controller");

router.get("/", HoemOurTeamController.getHomeOurTeam);
router.post("/", HoemOurTeamController.insertHomeOurTeam);
router.put("/:id", HoemOurTeamController.updateHomeOurTeam);
router.delete("/:id", HoemOurTeamController.deleteHomeOurTeam);
router.get("/trashed", HoemOurTeamController.getTrashedHomeOurTeam);
router.patch("/restore/:id", HoemOurTeamController.restoreHomeOurTeam);

module.exports = router;