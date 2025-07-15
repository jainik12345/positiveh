const db = require("../../config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create upload directory if not exists
const uploadDir = path.join(
  __dirname,
  "../../Images/EmployeeDataImages/EmployeeDesignation"
);
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });
module.exports.uploadTaskPDF = upload.single("task_pdf");

// GET: All designations
module.exports.getAllDesignations = (req, res) => {
  db.query(
    "SELECT * FROM employee_designation WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.status(200).json({ status: "success", data: results });
    }
  );
};

// POST: Insert new designation
module.exports.insertDesignation = (req, res) => {
  const { name } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "Task PDF is required" });
  }

  const task_pdf = req.file.filename;

  const insertQuery = `
    INSERT INTO employee_designation (name, task_pdf)
    VALUES (?, ?)
  `;

  db.query(insertQuery, [name, task_pdf], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(201).json({
      status: "success",
      message: "Designation added",
      id: result.insertId,
    });
  });
};

// PUT: Update designation
module.exports.updateDesignation = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const task_pdf = req.file ? req.file.filename : null;

  const updateQuery = `
    UPDATE employee_designation
    SET name = ?, ${
      task_pdf ? "task_pdf = ?, " : ""
    } updated_at = CURRENT_TIMESTAMP
    WHERE id = ? AND deleted_at = 0
  `;

  const values = task_pdf ? [name, task_pdf, id] : [name, id];

  db.query(updateQuery, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res
      .status(200)
      .json({ status: "success", message: "Designation updated" });
  });
};

// DELETE: Soft delete
module.exports.deleteDesignation = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE employee_designation SET deleted_at = 1 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      return res
        .status(200)
        .json({ status: "success", message: "Soft deleted" });
    }
  );
};

// PATCH: Restore
module.exports.restoreDesignation = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE employee_designation SET deleted_at = 0 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      return res
        .status(200)
        .json({ status: "success", message: "Restored successfully" });
    }
  );
};

// GET: Trashed records
module.exports.getTrashedDesignations = (req, res) => {
  db.query(
    "SELECT * FROM employee_designation WHERE deleted_at = 1",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.status(200).json({ status: "success", data: results });
    }
  );
};
