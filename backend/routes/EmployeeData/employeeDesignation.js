const router = require("express").Router();
const controller = require("../../controller/EmployeeData/employeeDesignation.controller");

router.get("/", controller.getAllDesignations);
router.get("/trashed", controller.getTrashedDesignations);
router.post("/", controller.uploadTaskPDF, controller.insertDesignation);
router.put("/:id", controller.uploadTaskPDF, controller.updateDesignation);
router.delete("/:id", controller.deleteDesignation);
router.patch("/restore/:id", controller.restoreDesignation);

module.exports = router;
