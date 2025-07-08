// hotelBannerBgImage.controller.js
const db = require("../../config/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer config for hotel banner bg image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../../Images/HotelImages/HotelBannerBg");
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
}).single("image");

// Get all
exports.getAllBanners = (req, res) => {
  db.query(
    "SELECT * FROM hotel_banner_bg_image WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Insert
exports.insertBanner = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { hotel_id } = req.body;
    const image = req.file?.filename;

    if (!hotel_id || !image) {
      return res.status(400).json({
        error: "Hotel ID and Image are required",
      });
    }

    db.query(
      "INSERT INTO hotel_banner_bg_image (hotel_id, image) VALUES (?, ?)",
      [hotel_id, image],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({
          status: "success",
          message: "Banner image inserted",
          insertId: result.insertId,
        });
      }
    );
  });
};

// Update
exports.updateBanner = (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    const { id } = req.params;
    const { hotel_id, existingImage } = req.body;
    const newImage = req.file?.filename;

    const finalImage = newImage || existingImage;

    if (!hotel_id || !finalImage) {
      return res.status(400).json({ error: "Hotel ID and image are required" });
    }

    db.query(
      "UPDATE hotel_banner_bg_image SET hotel_id = ?, image = ? WHERE id = ? AND deleted_at = 0",
      [hotel_id, finalImage, id],
      (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ status: "success", message: "Updated" });
      }
    );
  });
};

// Soft delete
exports.deleteBanner = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE hotel_banner_bg_image SET deleted_at = 1 WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", message: "Soft deleted" });
    }
  );
};

// Restore
exports.restoreBanner = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE hotel_banner_bg_image SET deleted_at = 0 WHERE id = ?",
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
    "SELECT * FROM hotel_banner_bg_image WHERE hotel_id = ? AND deleted_at = 0",
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
    "SELECT * FROM hotel_banner_bg_image WHERE hotel_id = ? AND deleted_at = 1",
    [hotelId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};

// Get by ID
exports.getBannerById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM hotel_banner_bg_image WHERE id = ? AND deleted_at = 0",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ status: "success", data: results });
    }
  );
};
