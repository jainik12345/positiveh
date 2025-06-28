import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { FaReply, FaTrash, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Trace from "../../../components/Buttons/Trace";
import axios from "axios";
import BE_URL from "../../../config";

const fieldLabels = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "subject", label: "Subject" },
  { key: "message", label: "Message" },
  { key: "created_at", label: "Created At" },
];

function formatDate(dateString) {
  if (!dateString) return "-";
  const d = new Date(dateString);
  if (isNaN(d)) return dateString;
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

const ContactForm = () => {
  const [page, setPage] = useState(1);
  const [showReplyDialog, setShowReplyDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [showReplySuccess, setShowReplySuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  const [showViewPopup, setShowViewPopup] = useState(false);
  const [viewRow, setViewRow] = useState(null);

  const rowsPerPage = 10;
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BE_URL}/contact-form`);
        if (response.data.status === "success") {
          setData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching contact form data:", error);
      }
    };

    fetchData();
  }, []);

  const displayedRows = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleReplyClick = (row) => {
    setSelectedRow(row);
    setShowReplyDialog(true);
  };

  const handleReplyClose = () => {
    setShowReplyDialog(false);
    setSelectedRow(null);
  };

  const handleReplySubmit = async () => {
    if (!replyMessage.trim() || !selectedRow?.email) {
      alert("Reply message and recipient email are required.");
      return;
    }

    setSending(true);

    try {
      const response = await axios.post(`${BE_URL}/contact-form/reply`, {
        toEmail: selectedRow.email,
        replyMessage: replyMessage,
      });

      if (response.data.status === "success") {
        setShowReplySuccess(true);
        setShowReplyDialog(false);
        setReplyMessage("");
      } else {
        alert(
          `Failed to send reply: ${response.data.error || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error sending reply:", error);
      alert("An error occurred while sending the reply. Please try again.");
    } finally {
      setSending(false);
      setTimeout(() => setShowReplySuccess(false), 2000);
    }
  };

  const handleDeleteRow = async (id) => {
    try {
      const response = await axios.delete(`${BE_URL}/contact-form/${id}`);
      if (response.data.status === "success") {
        setData((prevData) => prevData.filter((row) => row.id !== id));
        setShowDeleteSuccess(true);
        setTimeout(() => {
          setShowDeleteSuccess(false);
        }, 2000);
      } else {
        alert("Failed to delete the contact form entry.");
      }
    } catch (error) {
      console.error("Error deleting contact form:", error);
      alert("An error occurred while deleting. Please try again.");
    }
  };

  const handleBackClick = () => {
    navigate("/contact-form/trace");
  };

  const handleRowClick = (row) => {
    setViewRow(row);
    setShowViewPopup(true);
  };

  const handleCloseViewPopup = () => {
    setShowViewPopup(false);
    setViewRow(null);
  };

  return (
    <div
      className="w-full px-2 py-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
      }}
    >
      <div
        className="w-full max-w-screen-xl rounded-2xl p-7"
        style={{
          background: "rgba(12, 14, 22, 0.98)",
          boxShadow: "0 4px 32px #0a183d44, 0 0 0 2px #1565c033",
          border: "1.5px solid #101a2d",
        }}
      >
        <div className="flex  justify-between items-center mb-7">
          <Trace onClick={handleBackClick} />
        </div>

        <div className="h-[2px] mb-8 w-full rounded bg-gradient-to-r from-[#263859]/70 via-[#101a2d]/90 to-[#263859]/70" />

        <TableContainer
          component={Paper}
          elevation={0}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(13, 15, 25, 0.99)",
            boxShadow: "0 0 16px #101a2d44",
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                style={{
                  background: "rgba(10, 20, 35, 0.89)",
                }}
              >
                <TableCell
                  className="!font-bold text-base"
                  style={{
                    color: "#5186c9",
                    borderRight: "1.5px solid #192e4d",
                    background: "rgba(16, 26, 45, 0.30)",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  className="!font-bold text-base"
                  style={{
                    color: "#5186c9",
                    borderRight: "1.5px solid #192e4d",
                    background: "rgba(16, 26, 45, 0.30)",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  className="!font-bold text-base"
                  style={{
                    color: "#5186c9",
                    borderRight: "1.5px solid #192e4d",
                    background: "rgba(16, 26, 45, 0.30)",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  className="!font-bold text-base"
                  style={{
                    color: "#5186c9",
                    borderRight: "1.5px solid #192e4d",
                    background: "rgba(16, 26, 45, 0.30)",
                  }}
                >
                  Subject
                </TableCell>
                <TableCell
                  className="!font-bold text-base"
                  style={{
                    color: "#5186c9",
                    borderRight: "1.5px solid #192e4d",
                    background: "rgba(16, 26, 45, 0.30)",
                  }}
                >
                  Message
                </TableCell>
                <TableCell
                  className="!font-bold text-base"
                  style={{
                    color: "#5186c9",
                    borderRight: "1.5px solid #192e4d",
                    background: "rgba(16, 26, 45, 0.30)",
                  }}
                >
                  Created At
                </TableCell>
                <TableCell
                  className="!font-bold text-base"
                  style={{
                    color: "#5186c9",
                    background: "rgba(16, 26, 45, 0.30)",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedRows.map((row, index) => (
                <TableRow
                  key={row.id}
                  style={{
                    background:
                      "linear-gradient(90deg, #10131a 85%, #192e4d26 100%)",
                    borderBottom: "1.2px solid #101a2d",
                  }}
                  className="hover:bg-[#101a2d]/60 transition"
                  hover
                  onClick={(e) => {
                    if (
                      e.target.closest("button") ||
                      e.target.closest("svg") ||
                      e.target.closest("path")
                    )
                      return;
                    handleRowClick(row);
                  }}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "rgba(16, 26, 45, 0.60)",
                    },
                  }}
                >
                  <TableCell
                    className="font-semibold"
                    style={{
                      color: "#86a7cf",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {(page - 1) * rowsPerPage + index + 1}
                  </TableCell>
                  <TableCell
                    className="font-medium text-left"
                    style={{
                      color: "#b2c7e5",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    className="font-medium text-left"
                    style={{
                      color: "#b2c7e5",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {row.email}
                  </TableCell>
                  <TableCell
                    className="font-medium text-left"
                    style={{
                      color: "#b2c7e5",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {row.subject}
                  </TableCell>
                  <TableCell
                    className="text-left"
                    style={{
                      color: "#e3eafc",
                      borderRight: "1.2px solid #192e4d",
                      maxWidth: 250,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {row.message}
                  </TableCell>
                  <TableCell
                    className="font-medium text-left"
                    style={{
                      color: "#b2c7e5",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {formatDate(row.created_at)}
                  </TableCell>
                  <TableCell className="text-left">
                    <div className="flex space-x-6">
                      <button
                        style={{
                          color: "#3c82e6",
                          border: "none",
                          background: "none",
                          filter: "drop-shadow(0 0 4px #5186c955)",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReplyClick(row);
                        }}
                        title="Reply"
                      >
                        <FaReply size={22} />
                      </button>
                      <button
                        className="hover:scale-110 transition"
                        style={{
                          color: "#e53935",
                          border: "none",
                          background: "none",
                          filter: "drop-shadow(0 0 4px #e5393544)",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteRow(row.id);
                        }}
                        title="Delete"
                      >
                        <FaTrash size={22} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div
            className="flex justify-end p-4"
            style={{
              background: "rgba(10, 20, 35, 0.95)",
              borderTop: "1.5px solid #192e4d",
            }}
          >
            <Pagination
              count={Math.ceil(data.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#5186c9",
                  backgroundColor: "#10131a",
                  borderRadius: "8px",
                  margin: "0 2px",
                  border: "1.2px solid #192e4d",
                },
                "& .Mui-selected": {
                  background: "#192e4d",
                  color: "#fff",
                },
              }}
            />
          </div>
        </TableContainer>
      </div>

      {/* View Popup */}
      <Dialog
        open={showViewPopup}
        onClose={handleCloseViewPopup}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { position: "relative" } }}
      >
        <IconButton
          aria-label="close"
          onClick={handleCloseViewPopup}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
            zIndex: 20,
          }}
        >
          <FaTimes />
        </IconButton>
        <DialogTitle sx={{ fontWeight: "bold", mb: 0.5 }}>
          Contact Details
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 1, pb: 2 }}>
          {viewRow &&
            fieldLabels.map((field) => (
              <Box key={field.key} sx={{ mb: 1.5 }}>
                <span className="font-semibold text-gray-700">
                  {field.label}:
                </span>
                <span
                  className="ml-2 break-all text-gray-800"
                  style={
                    field.key === "message" ? { whiteSpace: "pre-line" } : {}
                  }
                >
                  {field.key === "created_at"
                    ? formatDate(viewRow[field.key])
                    : viewRow[field.key] || "-"}
                </span>
              </Box>
            ))}
        </DialogContent>
      </Dialog>

      {/* Reply Dialog */}
      <Dialog
        open={showReplyDialog}
        onClose={handleReplyClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Reply to Contact</DialogTitle>
        <DialogContent>
          <p className="mb-2 text-sm text-gray-700">
            <strong>To:</strong> {selectedRow?.email}
          </p>

          <TextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            label="Your Reply"
            placeholder="Type Your Response Here..."
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleReplyClose}
            color="secondary"
            disabled={sending}
          >
            Cancel
          </Button>
          <Button
            onClick={handleReplySubmit}
            variant="contained"
            color="primary"
            disabled={sending}
          >
            {sending ? "Sending..." : "Submit Reply"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Notifications */}
      {showReplySuccess && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down">
          <p className="font-medium">Reply Sent Successfully</p>
        </div>
      )}
      {showDeleteSuccess && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down">
          <p className="font-medium">Deleted Successfully</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
