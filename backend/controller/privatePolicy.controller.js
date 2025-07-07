const db = require("../config/db");

// GET: Only fetch non-deleted records
module.exports.getPrivatePolicy = (req, res) => {
  db.query(
    "SELECT * FROM private_policy WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      return res.status(200).json({
        status: "success",
        data: results,
      });
    }
  );
};

// INSERT: Add new private policy
module.exports.insertPrivatePolicy = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      error: "Title and Description are required",
    });
  }

  const query = `INSERT INTO private_policy (title, description) VALUES (?, ?)`;

  db.query(query, [title, description], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(201).json({
      status: "success",
      message: "Private policy inserted",
      data: results,
    });
  });
};

// UPDATE: Update private policy by ID
module.exports.updatePrivatePolicy = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      error: "Title and Description are required",
    });
  }

  const query = `UPDATE private_policy SET title = ?, description = ? WHERE id = ?`;

  db.query(query, [title, description, id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Private policy updated",
      data: results,
    });
  });
};

// DELETE: Soft delete by setting deleted_at = 1
module.exports.deletePrivatePolicy = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE private_policy SET deleted_at = 1 WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Private policy deleted (soft)",
      data: results,
    });
  });
};

// GET: Fetch only soft-deleted records
module.exports.getTrashedPrivatePolicy = (req, res) => {
  db.query(
    "SELECT * FROM private_policy WHERE deleted_at = 1",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      return res.status(200).json({
        status: "success",
        data: results,
      });
    }
  );
};

// PATCH: Restore soft-deleted record
module.exports.restorePrivatePolicy = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE private_policy SET deleted_at = 0 WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Private policy restored",
      data: results,
    });
  });
};
