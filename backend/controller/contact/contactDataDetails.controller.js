const db = require("../../config/db");

// GET: Only fetch non-deleted records
module.exports.getContactDataDetails = (req, res) => {
  db.query(
    "SELECT * FROM contact_data_details WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      return res.status(200).json({
        status: "success",
        data: results,
      });
    }
  );
};

// INSERT: Add new contact data details
module.exports.insertContactDataDetails = (req, res) => {
  const { address, email, number, Link } = req.body;

  if (!address || !email || !number || !Link) {
    return res.status(400).json({
      error: "Address, Email, Number, and Link are required",
    });
  }

  const query = `INSERT INTO contact_data_details (address, email, number, Link) VALUES (?, ?, ?, ?)`;

  db.query(query, [address, email, number, Link], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(201).json({
      status: "success",
      message: "Contact data details inserted",
      data: results,
    });
  });
};

// UPDATE: Update contact data details by ID
module.exports.updateContactDataDetails = (req, res) => {
  const { id } = req.params;
  const { address, email, number, Link } = req.body;

  if (!address || !email || !number || !Link) {
    return res.status(400).json({
      error: "Address, Email, Number, and Link are required",
    });
  }

  const query = `UPDATE contact_data_details SET address = ?, email = ?, number = ?, Link = ? WHERE id = ?`;

  db.query(query, [address, email, number, Link, id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Contact data details updated",
      data: results,
    });
  });
};

// DELETE: Soft delete by setting deleted_at = 1
module.exports.deleteContactDataDetails = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE contact_data_details SET deleted_at = 1 WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Contact data details deleted (soft)",
      data: results,
    });
  });
};

// GET: Fetch only soft-deleted records
module.exports.getTrashedContactDataDetails = (req, res) => {
  db.query(
    "SELECT * FROM contact_data_details WHERE deleted_at = 1",
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
module.exports.restoreContactDataDetails = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE contact_data_details SET deleted_at = 0 WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    return res.status(200).json({
      status: "success",
      message: "Contact data details restored",
      data: results,
    });
  });
};
