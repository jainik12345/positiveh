// hotelLocation.controller.js

const db = require("../../config/db");

// GET all active hotel locations
exports.getHotelLocations = (req, res) => {
  db.query(
    "SELECT * FROM hotel_location WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// GET hotel location by ID
exports.getHotelLocationById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM hotel_location WHERE id = ? AND deleted_at = 0",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!results.length) return res.status(404).json({ error: "Not found" });
      res.status(200).json({ status: "success", data: results[0] });
    }
  );
};

// POST insert hotel location
exports.insertHotelLocation = (req, res) => {
  const { hotel_id, map_link, address, email, number } = req.body;

  if (!hotel_id) {
    return res.status(400).json({ error: "Hotel ID is required" });
  }

  db.query(
    "INSERT INTO hotel_location (hotel_id, map_link, address, email, number) VALUES (?, ?, ?, ?, ?)",
    [hotel_id, map_link, address, email, number],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({
        status: "success",
        message: "Hotel location inserted",
        insertedId: result.insertId,
      });
    }
  );
};

// PUT update hotel location
exports.updateHotelLocation = (req, res) => {
  const { id } = req.params;
  const { hotel_id, map_link, address, email, number } = req.body;

  db.query(
    "UPDATE hotel_location SET hotel_id = ?, map_link = ?, address = ?, email = ?, number = ? WHERE id = ? AND deleted_at = 0",
    [hotel_id, map_link, address, email, number, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res
        .status(200)
        .json({ status: "success", message: "Hotel location updated" });
    }
  );
};

// DELETE soft delete
exports.deleteHotelLocation = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE hotel_location SET deleted_at = 1 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Soft deleted" });
    }
  );
};

// GET trashed hotel locations
exports.getTrashedHotelLocations = (req, res) => {
  db.query(
    "SELECT * FROM hotel_location WHERE deleted_at = 1",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// PATCH restore soft deleted hotel location
exports.restoreHotelLocation = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE hotel_location SET deleted_at = 0 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Restored" });
    }
  );
};

// GET trashed hotel locations by hotel_id
exports.getTrashedHotelLocationsByHotel = (req, res) => {
  const { hotel_id } = req.params;

  db.query(
    "SELECT * FROM hotel_location WHERE deleted_at = 1 AND hotel_id = ?",
    [hotel_id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};
