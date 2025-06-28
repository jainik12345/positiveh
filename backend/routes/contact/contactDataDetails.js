const router = require("express").Router();
const contactDataDetailsController = require("../../controller/contact/contactDataDetails.controller");

router.get("/", contactDataDetailsController.getContactDataDetails);
router.post("/", contactDataDetailsController.insertContactDataDetails);
router.put("/:id", contactDataDetailsController.updateContactDataDetails);
router.delete("/:id", contactDataDetailsController.deleteContactDataDetails);
router.get("/trashed", contactDataDetailsController.getTrashedContactDataDetails);
router.patch("/restore/:id", contactDataDetailsController.restoreContactDataDetails);

module.exports = router;