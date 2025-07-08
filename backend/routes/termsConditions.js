const router = require("express").Router();
const termsController = require("../controller/termsConditions.controller");

router.get("/", termsController.getTermsCondition);
router.post("/", termsController.insertTermsCondition);
router.put("/:id", termsController.updateTermsCondition);
router.delete("/:id", termsController.deleteTermsCondition);
router.get("/trashed", termsController.getTrashedTermsCondition);
router.patch("/restore/:id", termsController.restoreTermsCondition);

module.exports = router;
