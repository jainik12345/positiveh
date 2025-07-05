const db = require("../../config/db");

// GET: Only fetch non-deleted records
module.exports.getHomeOurTeam = (req, res) => {
  db.query(
    "SELECT * FROM home_our_team WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      return res.status(200).json({
        status: "success",
        data: results,
      });
    }
  );
};

// INSERT: Add new team section title
module.exports.insertHomeOurTeam = (req, res) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({
      error: "Description  are required",
    });
  }

  const query = `INSERT INTO home_our_team (description ) VALUES (?)`;

  db.query(query, [description], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(201).json({
      status: "success",
      message: "Team section title inserted",
      data: results,
    });
  });
};

// UPDATE: Update team section title by ID
module.exports.updateHomeOurTeam = (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  if (!description  ) {
    return res.status(400).json({
      error: "Description are required",
    });
  }

  const query = `UPDATE home_our_team SET description = ?  WHERE id = ?`;

  db.query(query, [description, id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Team section Description updated",
      data: results,
    });
  });
};

// DELETE: Soft delete by setting deleted_at = 1
module.exports.deleteHomeOurTeam = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE home_our_team SET deleted_at = 1 WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Home Our Team Description is  deleted (soft)",
      data: results,
    });
  });
};

// GET: Fetch only soft-deleted records
module.exports.getTrashedHomeOurTeam = (req, res) => {
  db.query(
    "SELECT * FROM home_our_team WHERE deleted_at = 1",
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
module.exports.restoreHomeOurTeam = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE home_our_team SET deleted_at = 0 WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Home Our Team Description Restored",
      data: results,
    });
  });
};
