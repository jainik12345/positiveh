const db = require("../../config/db");
const nodemailer = require("nodemailer");

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Get all active hotel inquiries
exports.getHotelInquirys = (req, res) => {
  db.query(
    "SELECT * FROM hotel_inquirys WHERE deleted_at = 0",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.status(200).json({ status: "success", data: results });
    }
  );
};

// Insert new hotel inquiry
exports.insertHotelInquiry = (req, res) => {
  const { name, email_id, number, hotel_name, message } = req.body;

  if (!name || !email_id || !number || !hotel_name || !message) {
    return res.status(400).json({
      error: "All fields are required: name, email_id, number, hotel_name, message",
    });
  }

  const insertQuery = `
    INSERT INTO hotel_inquirys 
      (name, email_id, number, hotel_name, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    insertQuery,
    [name, email_id, number, hotel_name, message],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      // Send email
      const mailOptions = {
        from: `"Hotel Inquiry" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "New Hotel Inquiry Received",
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email_id}</p>
          <p><strong>Number:</strong> ${number}</p>
          <p><strong>Hotel Name:</strong> ${hotel_name}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      transporter.sendMail(mailOptions, (emailErr, info) => {
        if (emailErr) {
          console.error("Email error:", emailErr.message);
          return res.status(201).json({
            status: "warning",
            message: "Inquiry submitted but email failed",
            id: result.insertId,
          });
        }

        return res.status(201).json({
          status: "success",
          message: "Inquiry submitted and email sent",
          id: result.insertId,
        });
      });
    }
  );
};

// Reply to hotel inquiry
exports.replyToHotelInquiry = async (req, res) => {
  const { toEmail, replyMessage } = req.body;

  if (!toEmail || !replyMessage) {
    return res
      .status(400)
      .json({ error: "toEmail and replyMessage are required" });
  }

  const mailOptions = {
    from: `"Hotel Inquiry" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "Reply to Your Hotel Inquiry",
    html: `<p>${replyMessage}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ status: "success", message: "Reply sent successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Soft delete hotel inquiry
exports.deleteHotelInquiry = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE hotel_inquirys SET deleted_at = 1 WHERE id = ?`;
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    return res
      .status(200)
      .json({ status: "success", message: "Inquiry soft-deleted" });
  });
};

// Restore soft-deleted hotel inquiry
exports.restoreHotelInquiry = (req, res) => {
  const { id } = req.params;

  const query = `UPDATE hotel_inquirys SET deleted_at = 0 WHERE id = ?`;
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    return res
      .status(200)
      .json({ status: "success", message: "Inquiry restored" });
  });
};

// Get all soft-deleted hotel inquiries
exports.getTrashedHotelInquirys = (req, res) => {
  db.query(
    "SELECT * FROM hotel_inquirys WHERE deleted_at = 1",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.status(200).json({ status: "success", data: results });
    }
  );
};
