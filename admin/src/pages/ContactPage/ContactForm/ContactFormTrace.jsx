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
  IconButton,
  Box,
} from "@mui/material";
import { FaRecycle, FaTimes } from "react-icons/fa";
import Back from "../../../components/Buttons/Back";
import RestoreData from "../../../components/Popup/RestoreData";
import { useNavigate } from "react-router-dom";
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

const ContactFormTrace = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [data, setData] = useState([]);
  const [showRestorePopup, setShowRestorePopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showViewPopup, setShowViewPopup] = useState(false);
  const [viewRow, setViewRow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrashedData = async () => {
      try {
        const response = await axios.get(`${BE_URL}/contact-form/trashed`);
        if (response.data.status === "success") {
          setData(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch trashed data:", error);
      }
    };
    fetchTrashedData();
  }, []);

  const displayedRows = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleRestoreClick = async (id) => {
    try {
      const response = await axios.patch(
        `${BE_URL}/contact-form/restore/${id}`
      );
      if (response.data.status === "success") {
        setData((prev) => prev.filter((row) => row.id !== id));
        setSelectedId(id);
        setShowRestorePopup(true);
      } else {
        console.error("Failed to restore the record");
      }
    } catch (error) {
      console.error("Error restoring record:", error);
    }
  };

  const handleBackClick = () => {
    navigate("/contact-form");
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
      className="w-full px-2 py-8  flec-row items-center justify-center"
      style={{
        background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
        
      }}
    >
      {/* Restore Popup */}
      {showRestorePopup && (
        <RestoreData
          id={selectedId}
          onClose={() => {
            setShowRestorePopup(false);
            setSelectedId(null);
          }}
        />
      )}

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

      {/* Header and Back */}
      <div className="flex justify-between mb-4 w-full max-w-screen-xl">
        <h2
          className="text-left font-semibold text-xl"
          style={{ color: "#5186c9" }}
        >
          Contact Form Trace
        </h2>
        <Back onClick={handleBackClick} />
      </div>

      <div className="h-[2px] mb-8 w-full max-w-screen-xl rounded bg-gradient-to-r from-[#263859]/70 via-[#101a2d]/90 to-[#263859]/70" />

      {/* Table */}
      <TableContainer
        component={Paper}
        elevation={0}
        className="rounded-2xl overflow-hidden w-full max-w-screen-xl"
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
                Restore
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
                  <button
                    className="text-blue-600 cursor-pointer hover:text-blue-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRestoreClick(row.id);
                    }}
                    title="Restore"
                  >
                    <FaRecycle size={22} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div
          className="flex justify-end p-5"
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
  );
};

export default ContactFormTrace;
