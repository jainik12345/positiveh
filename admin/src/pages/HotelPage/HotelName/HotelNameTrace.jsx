import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { FaRecycle } from "react-icons/fa";
import Back from "../../../components/Buttons/Back";
import RestoreData from "../../../components/Popup/RestoreData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BE_URL from "../../../config";

const HotelNameTrace = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [data, setData] = useState([]);
  const [showRestorePopup, setShowRestorePopup] = useState(false);
  const navigate = useNavigate();

  const fetchTrashedData = async () => {
    try {
      const res = await axios.get(`${BE_URL}/hotelName/trashed`);
      const formatted = res.data.data.map((item) => ({
        ...item,
        imageUrl: `${BE_URL}/Images/HotelImages/HotelName/${item.image}`,
      }));
      setData(formatted);
    } catch (err) {
      console.error("Error fetching trashed hotel names:", err);
    }
  };

  const handleRestore = async (id) => {
    try {
      await axios.patch(`${BE_URL}/hotelName/restore/${id}`);
      setShowRestorePopup(true);
      setTimeout(() => {
        setShowRestorePopup(false);
        fetchTrashedData();
      }, 2500);
    } catch (err) {
      console.error("Error restoring hotel name:", err);
    }
  };

  const displayedRows = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleBackClick = () => {
    navigate("/hotel-name");
  };

  useEffect(() => {
    fetchTrashedData();
  }, []);

  return (
    <div
      className="w-full px-2 py-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
      }}
    >
      {showRestorePopup && (
        <RestoreData onClose={() => setShowRestorePopup(false)} />
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
          <h2
            className="text-left font-semibold text-xl"
            style={{ color: "#5186c9" }}
          >
            Hotel Name Trace
          </h2>
          <Back onClick={handleBackClick} />
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
                  Image
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
                  Address
                </TableCell>
                <TableCell
                  className="!font-bold text-base"
                  style={{
                    color: "#5186c9",
                    borderRight: "1.5px solid #192e4d",
                    background: "rgba(16, 26, 45, 0.30)",
                  }}
                >
                  Status
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
                    style={{
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    <img
                      src={row.imageUrl}
                      alt="Hotel"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </TableCell>

                  <TableCell
                    style={{
                      color: "#e3eafc",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {row.name}
                  </TableCell>

                  <TableCell
                    style={{
                      color: "#e3eafc",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {row.address}
                  </TableCell>

                  <TableCell
                    style={{
                      color: row.status === "Running" ? "#4caf50" : "#f44336", 
                      fontWeight: "bold",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {row.status}
                  </TableCell>

                  <TableCell>
                    <button
                      className="text-blue-600 cursor-pointer hover:text-blue-800"
                      onClick={() => handleRestore(row.id)}
                      title="Restore"
                    >
                      <FaRecycle size={22} />
                    </button>
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
    </div>
  );
};

export default HotelNameTrace;
