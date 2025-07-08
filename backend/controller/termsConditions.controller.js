const db = require("../config/db");

// GET: Fetch non-deleted Terms & Conditions
module.exports.getTermsCondition = (req, res) => {
  db.query("SELECT * FROM terms_condition WHERE deleted_at = 0", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      data: results,
    });
  });
};

// INSERT: Add new Terms & Conditions
module.exports.insertTermsCondition = (req, res) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({
      error: "Description is required",
    });
  }

  const query = `INSERT INTO terms_condition (description) VALUES (?)`;

  db.query(query, [description], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(201).json({
      status: "success",
      message: "Terms & Conditions inserted",
      data: results,
    });
  });
};

// UPDATE: Update Terms & Conditions by ID
module.exports.updateTermsCondition = (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({
      error: "Description is required",
    });
  }

  const query = `UPDATE terms_condition SET description = ? WHERE id = ?`;

  db.query(query, [description, id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Terms & Conditions updated",
      data: results,
    });
  });
};

// DELETE: Soft delete by setting deleted_at = 1
module.exports.deleteTermsCondition = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE terms_condition SET deleted_at = 1 WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Terms & Conditions deleted (soft)",
      data: results,
    });
  });
};

// GET: Fetch soft-deleted records
module.exports.getTrashedTermsCondition = (req, res) => {
  db.query("SELECT * FROM terms_condition WHERE deleted_at = 1", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      data: results,
    });
  });
};

// PATCH: Restore soft-deleted Terms & Conditions
module.exports.restoreTermsCondition = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE terms_condition SET deleted_at = 0 WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Terms & Conditions restored",
      data: results,
    });
  });
};
