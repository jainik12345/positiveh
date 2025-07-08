const db = require("../../config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer config for hotel amenities images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../../Images/HotelImages/HotelAmenities");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
}).single("image");

// Get all amenities
exports.getAllAmenities = (req, res) => {
  db.query(
    "SELECT * FROM hotel_amenities WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Insert amenity
exports.insertAmenity = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { hotel_id, title, description } = req.body;
    const image = req.file?.filename || null;

    if (!hotel_id || !title || !description || !image) {
      return res.status(400).json({
        error: "Hotel ID, Title, Description, and Image are required"
      });
    }

    db.query(
      "INSERT INTO hotel_amenities (hotel_id, image, title, description) VALUES (?, ?, ?, ?)",
      [hotel_id, image, title, description],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({
          status: "success",
          message: "Amenity inserted",
          insertId: result.insertId,
        });
      }
    );
  });
};

// Update amenity
exports.updateAmenity = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { id } = req.params;
    const { hotel_id, title, description, existingImage } = req.body;
    const newImage = req.file?.filename || existingImage || null;

    if (!hotel_id || !title || !description || !newImage) {
      return res.status(400).json({
        error: "Hotel ID, Title, Description, and Image are required"
      });
    }

    db.query(
      "UPDATE hotel_amenities SET hotel_id = ?, image = ?, title = ?, description = ? WHERE id = ? AND deleted_at = 0",
      [hotel_id, newImage, title, description, id],
      (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ status: "success", message: "Amenity updated" });
      }
    );
  });
};

// Soft delete amenity
exports.deleteAmenity = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE hotel_amenities SET deleted_at = 1 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Amenity soft deleted" });
    }
  );
};

// Restore deleted amenity
exports.restoreAmenity = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE hotel_amenities SET deleted_at = 0 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Amenity restored" });
    }
  );
};

// Get amenities by hotel_id
exports.getByHotelId = (req, res) => {
  const { hotelId } = req.params;
  db.query(
    "SELECT * FROM hotel_amenities WHERE hotel_id = ? AND deleted_at = 0",
    [hotelId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Get trashed amenities by hotel_id
exports.getTrashedByHotelId = (req, res) => {
  const { hotelId } = req.params;
  db.query(
    "SELECT * FROM hotel_amenities WHERE hotel_id = ? AND deleted_at = 1",
    [hotelId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Get amenity by ID
exports.getAmenityById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM hotel_amenities WHERE id = ? AND deleted_at = 0",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};