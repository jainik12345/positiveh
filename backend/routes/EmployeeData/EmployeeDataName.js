const express = require("express");
const router = express.Router();
const controller = require("../../controller/EmployeeData/EmployeeDataName.controller");

// Main CRUD Routes
router.get("/", controller.getAllEmployees); // GET all employees
router.get("/hotel/:hotelId", controller.getByHotelId); // GET employees by hotel_id
router.get("/data/:id", controller.getEmployeeById); // GET employee by ID
router.post("/", controller.insertEmployee); // POST insert employee
router.put("/:id", controller.updateEmployee); // PUT update employee
router.delete("/:id", controller.deleteEmployee); // DELETE soft delete
router.patch("/restore/:id", controller.restoreEmployee); // PATCH restore

// Auth / OTP Routes
router.post("/send-otp", controller.sendEmployeeOtp); // POST send OTP
router.post("/verify-otp", controller.verifyEmployeeOtp); // POST verify OTP
router.post("/reset-password", controller.resetEmployeePassword); // POST reset password
router.post("/login", controller.loginEmployee);


// Trashed employees by hotel_id
router.get("/trashed/hotel/:hotelId", controller.getTrashedByHotelId);

module.exports = router;
