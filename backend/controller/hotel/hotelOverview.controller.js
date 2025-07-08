const db = require("../../config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer config for hotel overview images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../../Images/HotelImages/HotelOverview");
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
}).array("images", 10);

// Get all overviews
exports.getAllOverviews = (req, res) => {
  db.query(
    "SELECT * FROM hotel_overview WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Insert overview
exports.insertOverview = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { hotel_id, description } = req.body;
    const images = req.files?.map((file) => file.filename) || [];

    if (!hotel_id || !description || images.length === 0) {
      return res
        .status(400)
        .json({ error: "Hotel ID, Description, and Images are required" });
    }

    db.query(
      "INSERT INTO hotel_overview (hotel_id, images, description) VALUES (?, ?, ?)",
      [hotel_id, JSON.stringify(images), description],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({
          status: "success",
          message: "Inserted",
          insertId: result.insertId,
        });
      }
    );
  });
};

exports.updateOverview = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { id } = req.params;
    const { hotel_id, description, existingImages } = req.body;

    // New images from form upload
    const newImages = req.files?.map((file) => file.filename) || [];

    // Parse existing images sent from frontend
    let oldImages = [];
    try {
      oldImages = JSON.parse(existingImages || "[]");
    } catch (e) {
      return res.status(400).json({ error: "Invalid existing images format" });
    }

    // ✅ Merge both old and new images
    const allImages = [...oldImages, ...newImages];

    if (!hotel_id || !description || allImages.length === 0) {
      return res.status(400).json({
        error: "Hotel ID, Description, and at least one image are required",
      });
    }

    db.query(
      "UPDATE hotel_overview SET hotel_id = ?, images = ?, description = ? WHERE id = ? AND deleted_at = 0",
      [hotel_id, JSON.stringify(allImages), description, id],
      (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ status: "success", message: "Updated" });
      }
    );
  });
};

// Soft delete
exports.deleteOverview = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE hotel_overview SET deleted_at = 1 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Soft deleted" });
    }
  );
};

// Restore deleted
exports.restoreOverview = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE hotel_overview SET deleted_at = 0 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Restored" });
    }
  );
};

// Get by hotel_id
exports.getByHotelId = (req, res) => {
  const { hotelId } = req.params;
  db.query(
    "SELECT * FROM hotel_overview WHERE hotel_id = ? AND deleted_at = 0",
    [hotelId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Get trashed by hotel_id
exports.getTrashedByHotelId = (req, res) => {
  const { hotelId } = req.params;
  db.query(
    "SELECT * FROM hotel_overview WHERE hotel_id = ? AND deleted_at = 1",
    [hotelId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Get overview by ID
exports.getOverviewById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM hotel_overview WHERE id = ? AND deleted_at = 0",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};
