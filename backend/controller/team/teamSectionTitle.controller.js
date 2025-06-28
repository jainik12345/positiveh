const db = require("../../config/db");

// GET: Only fetch non-deleted records
module.exports.getTeamSectionTitles = (req, res) => {
  db.query(
    "SELECT * FROM team_section_title WHERE deleted_at = 0",
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
module.exports.insertTeamSectionTitle = (req, res) => {
  const { description, heading, title } = req.body;

  if (!description || !heading || !title) {
    return res.status(400).json({
      error: "Description, Heading, and Title are required",
    });
  }

  const query = `INSERT INTO team_section_title (description, heading, title) VALUES (?, ?, ?)`;

  db.query(query, [description, heading, title], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res
      .status(201)
      .json({
        status: "success",
        message: "Team section title inserted",
        data: results,
      });
  });
};

// UPDATE: Update team section title by ID
module.exports.updateTeamSectionTitle = (req, res) => {
  const { id } = req.params;
  const { description, heading, title } = req.body;

  if (!description || !heading || !title) {
    return res.status(400).json({
      error: "Description, Heading, and Title are required",
    });
  }

  const query = `UPDATE team_section_title SET description = ?, heading = ?, title = ? WHERE id = ?`;

  db.query(query, [description, heading, title, id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res
      .status(200)
      .json({
        status: "success",
        message: "Team section title updated",
        data: results,
      });
  });
};

// DELETE: Soft delete by setting deleted_at = 1
module.exports.deleteTeamSectionTitle = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE team_section_title SET deleted_at = 1 WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Team section title deleted (soft)",
      data: results,
    });
  });
};

// GET: Fetch only soft-deleted records
module.exports.getTrashedTeamSectionTitles = (req, res) => {
  db.query(
    "SELECT * FROM team_section_title WHERE deleted_at = 1",
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
module.exports.restoreTeamSectionTitle = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE team_section_title SET deleted_at = 0 WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Team section title restored",
      data: results,
    });
  });
};
