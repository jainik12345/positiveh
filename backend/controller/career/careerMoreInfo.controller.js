const db = require("../../config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../../Images/CareerImages/MoreInfo");
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

// GET all active
exports.getCareerMoreInfo = (req, res) => {
  db.query(
    "SELECT * FROM career_more_info WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// GET by ID
exports.getCareerMoreInfoById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM career_more_info WHERE id = ? AND deleted_at = 0",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!results.length) return res.status(404).json({ error: "Not found" });
      res.status(200).json({ status: "success", data: results[0] });
    }
  );
};

// POST insert
// exports.insertCareerMoreInfo = (req, res) => {
//   upload(req, res, (err) => {
//     if (err) return res.status(500).json({ error: err.message });
//     if (!req.file) return res.status(400).json({ error: "No image uploaded" });

//     const image = req.file.filename;
//     const { heading, description } = req.body;

//     db.query(
//       "INSERT INTO career_more_info (image, heading, description) VALUES (?, ?, ?)",
//       [image, heading, description],
//       (err, result) => {
//         if (err) return res.status(500).json({ error: err.message });
//         res.status(201).json({
//           status: "success",
//           message: "Inserted",
//           insertedId: result.insertId,
//         });
//       }
//     );
//   });
// };

exports.insertCareerMoreInfo = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: "No image uploaded" });

    const image = req.file.filename;
    const { heading, description, quote, name } = req.body;

    db.query(
      "INSERT INTO career_more_info (image, heading, description, quote, name) VALUES (?, ?, ?, ?, ?)",
      [image, heading, description, quote, name],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({
          status: "success",
          message: "Inserted",
          insertedId: result.insertId,
        });
      }
    );
  });
};

// PUT update
// exports.updateCareerMoreInfo = (req, res) => {
//   upload(req, res, (err) => {
//     if (err) return res.status(500).json({ error: err.message });

//     const { id } = req.params;
//     const { existingImage, heading, description } = req.body;
//     const newImage = req.file?.filename || existingImage;

//     db.query(
//       "UPDATE career_more_info SET image = ?, heading = ?, description = ? WHERE id = ? AND deleted_at = 0",
//       [newImage, heading, description, id],
//       (err) => {
//         if (err) return res.status(500).json({ error: err.message });
//         res.status(200).json({ status: "success", message: "Updated" });
//       }
//     );
//   });
// };

exports.updateCareerMoreInfo = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { id } = req.params;
    const { existingImage, heading, description, quote, name } = req.body;
    const newImage = req.file?.filename || existingImage;

    db.query(
      "UPDATE career_more_info SET image = ?, heading = ?, description = ?, quote = ?, name = ? WHERE id = ? AND deleted_at = 0",
      [newImage, heading, description, quote, name, id],
      (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ status: "success", message: "Updated" });
      }
    );
  });
};

// DELETE soft
exports.deleteCareerMoreInfo = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE career_more_info SET deleted_at = 1 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Soft deleted" });
    }
  );
};

// GET trashed
exports.getTrashedCareerMoreInfo = (req, res) => {
  db.query(
    "SELECT * FROM career_more_info WHERE deleted_at = 1",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// PATCH restore
exports.restoreCareerMoreInfo = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE career_more_info SET deleted_at = 0 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Restored" });
    }
  );
};
