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
import * as XLSX from "xlsx";
import BE_URL from "../../../config";

const fieldLabels = [
  { key: "name", label: "Name" },
  { key: "email_id", label: "Email" },
  { key: "number", label: "Phone Number" },
  { key: "hotel_name", label: "Hotel Name" },
  { key: "message", label: "Message" },
  { key: "created_at", label: "Created At" },
];

function formatDate(dateString) {
  if (!dateString) return "-";
  const d = new Date(dateString);
  if (isNaN(d)) return dateString;
  return d.toLocaleDateString("en-GB");
}

const HotelInquirys = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [showReplyDialog, setShowReplyDialog] = useState(false);
  const [showReplySuccess, setShowReplySuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [showViewPopup, setShowViewPopup] = useState(false);
  const [viewRow, setViewRow] = useState(null);
  const [downloadError, setDownloadError] = useState("");
  const navigate = useNavigate();
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BE_URL}/hotelInquiry`);
        if (res.data.status === "success") {
          setData(res.data.data);
        }
      } catch (err) {
        console.error("Error loading inquiries:", err);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter((row) => {
    const search = searchTerm.toLowerCase();
    return (
      row.name?.toLowerCase().includes(search) ||
      row.email_id?.toLowerCase().includes(search) ||
      row.hotel_name?.toLowerCase().includes(search)
    );
  });

  const displayedRows = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleDownloadExcel = () => {
    if (!selectedDate) {
      setDownloadError("Please select a date to download.");
      setTimeout(() => setDownloadError(""), 5000);
      return;
    }

    const matched = data.filter(
      (row) => formatDate(row.created_at) === formatDate(selectedDate)
    );

    if (!matched.length) {
      setDownloadError("No data found for selected date.");
      setTimeout(() => setDownloadError(""), 5000);
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(matched);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inquiries");
    XLSX.writeFile(
      workbook,
      `Hotel_Inquiries_${formatDate(selectedDate)}.xlsx`
    );
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
    if (!replyMessage.trim() || !selectedRow?.email_id) {
      alert("Reply message and email are required.");
      return;
    }
    setSending(true);
    try {
      const res = await axios.post(`${BE_URL}/hotelInquiry/reply`, {
        toEmail: selectedRow.email_id,
        replyMessage,
      });

      if (res.data.status === "success") {
        setShowReplySuccess(true);
        setShowReplyDialog(false);
        setReplyMessage("");
      } else {
        alert(`Failed to send reply: ${res.data.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Reply error:", err);
      alert("Failed to send reply.");
    } finally {
      setSending(false);
      setTimeout(() => setShowReplySuccess(false), 2000);
    }
  };

  const handleDeleteRow = async (id) => {
    try {
      const res = await axios.delete(`${BE_URL}/hotelInquiry/${id}`);
      if (res.data.status === "success") {
        setData((prev) => prev.filter((r) => r.id !== id));
        setShowDeleteSuccess(true);
        setTimeout(() => setShowDeleteSuccess(false), 2000);
      } else {
        alert("Delete failed.");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
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
      {downloadError && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {downloadError}
        </div>
      )}
      <div
        className="w-full max-w-screen-xl rounded-2xl p-7"
        style={{
          background: "rgba(12, 14, 22, 0.98)",
          boxShadow: "0 4px 32px #0a183d44, 0 0 0 2px #1565c033",
          border: "1.5px solid #101a2d",
        }}
      >
        <div className="flex justify-between items-center mb-7">
          <Trace onClick={() => navigate("/hotel-inquirys/trace")} />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <TextField
              variant="outlined"
              placeholder="Name, Email or Hotel Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
              fullWidth
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: "#ffffff",
                  opacity: 0.8,
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffffff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ffffff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffffff",
                  },
                },
                input: {
                  color: "#ffffff",
                },
              }}
            />

            <div className="flex items-center gap-3">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="text-white bg-[#1f2937] border border-gray-600 rounded-md px-3 py-2"
              />
              <Button
                variant="contained"
                color="success"
                className="w-45"
                onClick={handleDownloadExcel}
              >
                Download Excel
              </Button>
            </div>
          </div>
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
              <TableRow style={{ background: "rgba(10, 20, 35, 0.89)" }}>
                {[
                  "ID",
                  "Name",
                  "Email",
                  "Number",
                  "Hotel",
                  "Message",
                  "Created",
                  "Action",
                ].map((h, i) => (
                  <TableCell
                    key={i}
                    className="!font-bold text-base"
                    style={{
                      color: "#5186c9",
                      background: "rgba(16, 26, 45, 0.30)",
                      borderRight: i < 6 ? "1.5px solid #192e4d" : "none",
                    }}
                  >
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedRows.map((row, index) => (
                <TableRow
                  key={row.id}
                  onClick={(e) => {
                    if (e.target.closest("button")) return;
                    handleRowClick(row);
                  }}
                  className="hover:bg-[#101a2d]/60 transition"
                  style={{
                    background:
                      "linear-gradient(90deg, #10131a 85%, #192e4d26 100%)",
                    borderBottom: "1.2px solid #101a2d",
                    cursor: "pointer",
                  }}
                >
                  <TableCell style={{ color: "#ffffff" }}>
                    {(page - 1) * rowsPerPage + index + 1}
                  </TableCell>
                  <TableCell style={{ color: "#ffffff" }}>{row.name}</TableCell>
                  <TableCell style={{ color: "#ffffff" }}>
                    {row.email_id}
                  </TableCell>
                  <TableCell style={{ color: "#ffffff" }}>
                    {row.number}
                  </TableCell>
                  <TableCell style={{ color: "#ffffff" }}>
                    {row.hotel_name}
                  </TableCell>
                  <TableCell
                    style={{
                      whiteSpace: "pre-wrap",
                      color: "#ffffff",
                      maxWidth: 200,
                    }}
                  >
                    {row.message}
                  </TableCell>
                  <TableCell style={{ color: "#ffffff" }}>
                    {formatDate(row.created_at)}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReplyClick(row);
                        }}
                      >
                        <FaReply size={20} color="#3c82e6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteRow(row.id);
                        }}
                      >
                        <FaTrash size={20} color="#e53935" />
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
              onChange={(e, value) => setPage(value)}
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#5186c9",
                  backgroundColor: "#10131a",
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
      >
        <DialogTitle>Hotel Inquiry Details</DialogTitle>
        <DialogContent>
          {viewRow &&
            fieldLabels.map((field) => (
              <Box key={field.key} sx={{ mb: 1.5 }}>
                <strong>{field.label}:</strong>{" "}
                {field.key === "created_at"
                  ? formatDate(viewRow[field.key])
                  : viewRow[field.key] || "-"}
              </Box>
            ))}
        </DialogContent>
        <IconButton
          onClick={handleCloseViewPopup}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <FaTimes />
        </IconButton>
      </Dialog>

      {/* Reply Dialog */}
      <Dialog
        open={showReplyDialog}
        onClose={handleReplyClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Reply to Inquiry</DialogTitle>
        <DialogContent>
          <p>
            <strong>To:</strong> {selectedRow?.email_id}
          </p>
          <TextField
            multiline
            rows={4}
            fullWidth
            label="Your Reply"
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReplyClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleReplySubmit}
            variant="contained"
            color="primary"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Reply"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notifications */}
      {showReplySuccess && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Reply Sent Successfully
        </div>
      )}
      {showDeleteSuccess && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Deleted Successfully
        </div>
      )}
    </div>
  );
};

export default HotelInquirys;
