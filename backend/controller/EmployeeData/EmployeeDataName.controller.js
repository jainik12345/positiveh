// controller/employee.controller.js
const db = require("../../config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

// Multer config for employee image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(
      __dirname,
      "../../Images/EmployeeDataImages/EmployeeDataName"
    );
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
}).single("image");

// Get all employees
exports.getAllEmployees = (req, res) => {
  db.query(
    "SELECT id, hotel_id, name, email_id, image, address, designation, status, created_at, updated_at FROM employee_data WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Get employees by hotel_id
exports.getByHotelId = (req, res) => {
  const { hotelId } = req.params;
  db.query(
    "SELECT id, hotel_id, name, email_id, image, address, designation, status, created_at, updated_at FROM employee_data WHERE hotel_id = ? AND deleted_at = 0",
    [hotelId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Insert employee
exports.insertEmployee = (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { hotel_id, name, email_id, password, address, designation, status } =
      req.body;
    const image = req.file?.filename || null;

    if (
      !hotel_id ||
      !name ||
      !email_id ||
      !password ||
      !designation ||
      !image
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO employee_data (hotel_id, name, email_id, password, image, address, designation, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        hotel_id,
        name,
        email_id,
        hashedPassword,
        image,
        address,
        designation,
        status,
      ],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({
          status: "success",
          message: "Employee inserted",
          insertId: result.insertId,
        });
      }
    );
  });
};

// Update employee
exports.updateEmployee = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { id } = req.params;
    const {
      hotel_id,
      name,
      email_id,
      address,
      designation,
      status,
      existingImage,
    } = req.body;
    const newImage = req.file?.filename || existingImage || null;

    if (!hotel_id || !name || !email_id || !designation || !newImage) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
      "UPDATE employee_data SET hotel_id = ?, name = ?, email_id = ?, image = ?, address = ?, designation = ?, status = ? WHERE id = ? AND deleted_at = 0",
      [hotel_id, name, email_id, newImage, address, designation, status, id],
      (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res
          .status(200)
          .json({ status: "success", message: "Employee updated" });
      }
    );
  });
};

// Soft delete employee
exports.deleteEmployee = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE employee_data SET deleted_at = 1 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res
        .status(200)
        .json({ status: "success", message: "Employee soft deleted" });
    }
  );
};

// Restore employee
exports.restoreEmployee = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE employee_data SET deleted_at = 0 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Employee restored" });
    }
  );
};

// Get trashed (soft-deleted) employees by hotel_id
exports.getTrashedByHotelId = (req, res) => {
  const { hotelId } = req.params;
  db.query(
    "SELECT id, hotel_id, name, email_id, image, address, designation, status, created_at, updated_at FROM employee_data WHERE hotel_id = ? AND deleted_at = 1",
    [hotelId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Get employee by ID
// exports.getEmployeeById = (req, res) => {
//   const { hotelId } = req.params;
//   db.query(
//     "SELECT * FROM employee_data WHERE hotel_id = ? AND deleted_at = 0",
//     [hotelId],
//     (err, results) => {
//       if (err) return res.status(500).json({ error: err.message });
//       res.status(200).json({ status: "success", data: results });
//     }
//   );
// };

exports.getEmployeeById = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM employee_data WHERE id = ? AND deleted_at = 0",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Send OTP
// exports.sendEmployeeOtp = (req, res) => {
//   const { email } = req.body;
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();
//   const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

//   db.query(
//     "UPDATE employee_data SET otp = ?, otp_expires = ? WHERE email_id = ?",
//     [otp, expiresAt, email],
//     (err, result) => {
//       if (err) return res.status(500).json({ message: "Database error" });

//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS,
//         },
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: "OTP Employee Data Name for Password Reset",
//         html: `<h3>Your OTP is: <b>${otp}</b></h3>`,
//       };

//       transporter.sendMail(mailOptions, (err, info) => {
//         if (err)
//           return res
//             .status(500)
//             .json({ message: "Email send error", error: err });
//         return res.status(200).json({ message: "OTP sent successfully" });
//       });
//     }
//   );
// };

exports.sendEmployeeOtp = (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  const trimmedEmail = email.trim().toLowerCase();
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  const checkSql =
    "SELECT * FROM employee_data WHERE email_id = ? AND deleted_at = 0";
  db.query(checkSql, [trimmedEmail], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (results.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // ✅ If exists, update OTP
    const updateSql =
      "UPDATE employee_data SET otp = ?, otp_expires = ? WHERE email_id = ?";
    db.query(updateSql, [otp, expiresAt, trimmedEmail], (err, result) => {
      if (err) return res.status(500).json({ message: "Failed to update OTP" });

      // ✅ Send OTP Email
      const transporter = require("nodemailer").createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `" Employee Data Name Positive H. Team" <${process.env.EMAIL_USER}>`,
        to: trimmedEmail,
        subject: "Employee Data Name OTP for Password Reset - Employee Panel",
        html: `
          <div style="max-width:600px;margin:0 auto;font-family:'Segoe UI',Roboto,sans-serif;color:#333;background-color:#f4f6f8;padding:20px;border-radius:10px;">
            <div style="text-align:center;margin-bottom:30px;">
              <h3 style="color:#333;">Password Reset OTP</h3>
            </div>
            <p>Hello,</p>
            <p>You requested to reset your password for the <b>Employee Portal</b>. Use the OTP below:</p>
            <div style="background-color:#e3f2fd;padding:15px;text-align:center;border-radius:8px;margin:20px 0;">
              <span style="font-size:28px;font-weight:bold;color:#0d47a1;">${otp}</span>
            </div>
            <p>This OTP is valid for <b>10 minutes</b>. If you didn’t request it, please ignore this email.</p>
            <br/>
            <p>Regards,</p>
            <p><b>Positive H. Team</b></p>
            <hr style="border:none;border-top:1px solid #ccc;margin-top:30px;">
            <p style="font-size:12px;color:#888;text-align:center;">This is an automated message. Do not reply.</p>
          </div>
        `,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Failed to send email", error: err });
        }

        return res.status(200).json({ message: "OTP sent successfully" });
      });
    });
  });
};

// Verify OTP
exports.verifyEmployeeOtp = (req, res) => {
  const { email, otp } = req.body;

  db.query(
    "SELECT otp, otp_expires FROM employee_data WHERE email_id = ?",
    [email],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res.status(404).json({ message: "Employee not found" });

      const employee = results[0];
      if (employee.otp !== otp)
        return res.status(400).json({ message: "Invalid OTP" });

      if (new Date() > new Date(employee.otp_expires)) {
        return res.status(400).json({ message: "OTP expired" });
      }

      return res.status(200).json({ message: "OTP verified successfully" });
    }
  );
};

// Reset Password
exports.resetEmployeePassword = async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ message: "Missing email or new password" });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  db.query(
    "UPDATE employee_data SET password = ?, otp = NULL, otp_expires = NULL WHERE email_id = ?",
    [hashedPassword, email],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Employee not found" });
      return res.status(200).json({ message: "Password reset successfully" });
    }
  );
};

// Employee Login
exports.loginEmployee = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM employee_data WHERE email_id = ? AND deleted_at = 0",
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ message: "Database error" });

      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const isMatch = await bcrypt.compare(password, results[0].password);

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      return res.status(200).json({
        message: "Login successful",
        employee: {
          id: results[0].id,
          email: results[0].email_id,
          name: results[0].name,
          designation: results[0].designation,
        },
      });
    }
  );
};
