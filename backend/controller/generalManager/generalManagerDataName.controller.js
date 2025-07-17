const db = require("../../config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

// Multer config for general manager image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(
      __dirname,
      "../../Images/GeneralManagerDataImages/GeneralManagerDataName"
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

// Get all general managers
exports.getAll = (req, res) => {
  db.query(
    "SELECT id, hotel_id, name, email_id, image, address, status, created_at, updated_at FROM general_manager_data WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Get by hotel_id
exports.getByHotelId = (req, res) => {
  const { hotelId } = req.params;
  db.query(
    "SELECT id, hotel_id, name, email_id, image, address, status, created_at, updated_at FROM general_manager_data WHERE hotel_id = ? AND deleted_at = 0",
    [hotelId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Get by ID
exports.getById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM general_manager_data WHERE id = ? AND deleted_at = 0",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Insert
exports.insert = (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { hotel_id, name, email_id, password, address, status } = req.body;
    const image = req.file?.filename || null;

    if (!hotel_id || !name || !email_id || !password || !image) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO general_manager_data (hotel_id, name, email_id, password, image, address, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [hotel_id, name, email_id, hashedPassword, image, address, status],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({
          status: "success",
          message: "General Manager inserted",
          insertId: result.insertId,
        });
      }
    );
  });
};

// Update
exports.update = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { id } = req.params;
    const { hotel_id, name, email_id, address, status, existingImage } =
      req.body;
    const newImage = req.file?.filename || existingImage || null;

    if (!hotel_id || !name || !email_id || !newImage) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    db.query(
      "UPDATE general_manager_data SET hotel_id = ?, name = ?, email_id = ?, image = ?, address = ?, status = ? WHERE id = ? AND deleted_at = 0",
      [hotel_id, name, email_id, newImage, address, status, id],
      (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res
          .status(200)
          .json({ status: "success", message: "General Manager updated" });
      }
    );
  });
};

// Soft delete
exports.softDelete = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE general_manager_data SET deleted_at = 1 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res
        .status(200)
        .json({ status: "success", message: "General Manager deleted" });
    }
  );
};

// Restore
exports.restore = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE general_manager_data SET deleted_at = 0 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res
        .status(200)
        .json({ status: "success", message: "General Manager restored" });
    }
  );
};

// Get trashed
exports.getTrashedByHotelId = (req, res) => {
  const { hotelId } = req.params;
  db.query(
    "SELECT id, hotel_id, name, email_id, image, address, status, created_at, updated_at FROM general_manager_data WHERE hotel_id = ? AND deleted_at = 1",
    [hotelId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Send OTP
exports.sendOtp = (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  db.query(
    "SELECT * FROM general_manager_data WHERE email_id = ? AND deleted_at = 0",
    [email],
    (err, results) => {
      if (err) return res.status(500).json({ message: "Database error" });
      if (results.length === 0)
        return res.status(404).json({ message: "GM not found" });

      db.query(
        "UPDATE general_manager_data SET otp = ?, otp_expires = ? WHERE email_id = ?",
        [otp, expiresAt, email],
        (err) => {
          if (err)
            return res.status(500).json({ message: "Failed to update OTP" });

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });

          const mailOptions = {
            from: `"GM Portal" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "OTP for General Manager Password Reset",
            html: `<p>Your OTP is <b>${otp}</b>. It is valid for 10 minutes.</p>`,
          };

          transporter.sendMail(mailOptions, (err) => {
            if (err)
              return res
                .status(500)
                .json({ message: "Email sending failed", error: err });
            res.status(200).json({ message: "OTP sent successfully" });
          });
        }
      );
    }
  );
};

// Verify OTP
exports.verifyOtp = (req, res) => {
  const { email, otp } = req.body;

  db.query(
    "SELECT otp, otp_expires FROM general_manager_data WHERE email_id = ?",
    [email],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res.status(404).json({ message: "Not found" });

      const gm = results[0];
      if (gm.otp !== otp)
        return res.status(400).json({ message: "Invalid OTP" });
      if (new Date() > new Date(gm.otp_expires))
        return res.status(400).json({ message: "OTP expired" });

      res.status(200).json({ message: "OTP verified successfully" });
    }
  );
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  const hashed = await bcrypt.hash(newPassword, 10);
  db.query(
    "UPDATE general_manager_data SET password = ?, otp = NULL, otp_expires = NULL WHERE email_id = ?",
    [hashed, email],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "GM not found" });
      res.status(200).json({ message: "Password reset successfully" });
    }
  );
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM general_manager_data WHERE email_id = ? AND deleted_at = 0",
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ message: "Database error" });
      if (results.length === 0)
        return res.status(401).json({ message: "Invalid email or password" });

      const isMatch = await bcrypt.compare(password, results[0].password);
      if (!isMatch)
        return res.status(401).json({ message: "Invalid email or password" });

      res.status(200).json({
        message: "Login successful",
        gm: {
          id: results[0].id,
          email: results[0].email_id,
          name: results[0].name,
        },
      });
    }
  );
};
