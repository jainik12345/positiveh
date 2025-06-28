const db = require("../../config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../../Images/TeamImages/TeamMemberName");
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
exports.getTeamMemberName = (req, res) => {
  db.query(
    "SELECT * FROM team_member_name WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// GET by ID
exports.getTeamMemberNameById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM team_member_name WHERE id = ? AND deleted_at = 0",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!results.length) return res.status(404).json({ error: "Not found" });
      res.status(200).json({ status: "success", data: results[0] });
    }
  );
};

// POST insert
exports.insertTeamMemberName = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: "No image uploaded" });

    const { name, position, description, heading, title } = req.body;
    const image = req.file.filename;

    db.query(
      "INSERT INTO team_member_name (image, name, position, description, heading, title) VALUES (?, ?, ?, ?, ?, ?)",
      [
        image,
        name || null,
        position || null,
        description || null,
        heading || null,
        title || null,
      ],
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
exports.updateTeamMemberName = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { id } = req.params;
    const { name, position, description, heading, title, existingImage } = req.body;
    const newImage = req.file?.filename || existingImage;

    db.query(
      "UPDATE team_member_name SET image = ?, name = ?, position = ?, description = ?, heading = ?, title = ? WHERE id = ? AND deleted_at = 0",
      [
        newImage,
        name || null,
        position || null,
        description || null,
        heading || null,
        title || null,
        id,
      ],
      (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ status: "success", message: "Updated" });
      }
    );
  });
};

// DELETE soft
exports.deleteTeamMemberName = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE team_member_name SET deleted_at = 1 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Soft deleted" });
    }
  );
};

// GET trashed
exports.getTrashedTeamMemberName = (req, res) => {
  db.query(
    "SELECT * FROM team_member_name WHERE deleted_at = 1",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// PATCH restore
exports.restoreTeamMemberName = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE team_member_name SET deleted_at = 0 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Restored" });
    }
  );
};