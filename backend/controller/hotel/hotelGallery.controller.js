const db = require("../../config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer config for hotel gallery images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../../Images/HotelImages/HotelGallery");
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
}).array("images", 10);

// Get all gallery items
exports.getAllGalleryItems = (req, res) => {
  db.query(
    "SELECT * FROM hotel_gallery WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Insert gallery item
exports.insertGalleryItem = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { hotel_id } = req.body;
    const images = req.files?.map((file) => file.filename) || [];

    if (!hotel_id || images.length === 0) {
      return res
        .status(400)
        .json({ error: "Hotel ID and Images are required" });
    }

    // Insert each image as a separate record
    const values = images.map(image => [hotel_id, image]);
    
    db.query(
      "INSERT INTO hotel_gallery (hotel_id, image) VALUES ?",
      [values],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({
          status: "success",
          message: "Gallery items inserted",
          insertId: result.insertId,
        });
      }
    );
  });
};

// Update gallery item (single image update)
exports.updateGalleryItem = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { id } = req.params;
    const { hotel_id, existingImage } = req.body;
    const newImage = req.files?.[0]?.filename;

    if (!hotel_id || (!newImage && !existingImage)) {
      return res.status(400).json({
        error: "Hotel ID and Image are required",
      });
    }

    const imageToUse = newImage || existingImage;

    db.query(
      "UPDATE hotel_gallery SET hotel_id = ?, image = ? WHERE id = ? AND deleted_at = 0",
      [hotel_id, imageToUse, id],
      (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ status: "success", message: "Gallery item updated" });
      }
    );
  });
};

// Soft delete
exports.deleteGalleryItem = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE hotel_gallery SET deleted_at = 1 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Gallery item soft deleted" });
    }
  );
};

// Restore deleted
exports.restoreGalleryItem = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE hotel_gallery SET deleted_at = 0 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Gallery item restored" });
    }
  );
};

// Get by hotel_id
exports.getByHotelId = (req, res) => {
  const { hotelId } = req.params;
  db.query(
    "SELECT * FROM hotel_gallery WHERE hotel_id = ? AND deleted_at = 0",
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
    "SELECT * FROM hotel_gallery WHERE hotel_id = ? AND deleted_at = 1",
    [hotelId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Get gallery item by ID
exports.getGalleryItemById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM hotel_gallery WHERE id = ? AND deleted_at = 0",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};