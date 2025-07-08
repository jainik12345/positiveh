import React, { useEffect, useState } from "react";
import axios from "axios";
import BE_URL from "../../../config";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  MenuItem,
  TextField,
} from "@mui/material";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Add from "../../../components/Buttons/Add";
import Trace from "../../../components/Buttons/Trace";
import DeleteData from "../../../components/Popup/DeleteData";
import styled from "@emotion/styled";

const WhiteTextField = styled(TextField)({
  "& label": { color: "#ffffff" },
  "& label.Mui-focused": { color: "#ffffff" },
  "& .MuiInputBase-root": {
    color: "#ffffff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#ffffff" },
    "&:hover fieldset": { borderColor: "#cccccc" },
    "&.Mui-focused fieldset": { borderColor: "#00D2FF" },
  },
  "& .MuiSelect-select": {
    backgroundColor: "#121926",
    color: "#ffffff",
  },
  "& .MuiMenu-paper": {
    backgroundColor: "#121926",
    color: "#ffffff",
  },
});

const HotelAmenities = () => {
  const [records, setRecords] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState("");
  const [page, setPage] = useState(1);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const rowsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BE_URL}/hotelName`)
      .then((res) => setHotels(res.data.data))
      .catch((err) => console.error("Hotel fetch failed", err));
  }, []);

  useEffect(() => {
    if (selectedHotelId) {
      axios
        .get(`${BE_URL}/hotelAmenities/hotel/${selectedHotelId}`)
        .then((res) => {
          const formatted = res.data.data.map((item) => ({
            ...item,
            image: item.image.startsWith("http")
              ? item.image
              : `${BE_URL}/Images/HotelImages/HotelAmenities/${item.image}`
          }));
          setRecords(formatted);
        })
        .catch((err) => console.error("Amenities fetch failed", err));
    } else {
      setRecords([]);
    }
  }, [selectedHotelId]);

  const displayedRows = records.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleAdd = () => navigate("/hotel-amenities/insert");
  const handleTrace = () => navigate("/hotel-amenities/trace");
  const handleUpdate = (item) => {
    navigate("/hotel-amenities/update", {
      state: { amenityData: item },
    });
  };
  const handleDelete = (id) => {
    axios
      .delete(`${BE_URL}/hotelAmenities/${id}`)
      .then((res) => {
        if (res.data.status === "success") {
          // Remove from UI
          setRecords((prev) => prev.filter((item) => item.id !== id));
          setShowDeletePopup(true);
          setTimeout(() => {
            setShowDeletePopup(false);
          }, 2000);
        } else {
          console.error("Deletion failed");
        }
      })
      .catch((err) => console.error("Delete error:", err));
  };

  return (
    <div
      className="w-full px-2 py-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
      }}
    >
      {showDeletePopup && (
        <DeleteData onClose={() => setShowDeletePopup(false)} />
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
          <Trace onClick={handleTrace} />
          <Add
            text="Add Hotel Amenity"
            width="w-[200px]"
            onClick={handleAdd}
          />
        </div>

        <div>
          <WhiteTextField
            select
            label="Select Hotel"
            name="hotel_id"
            value={selectedHotelId}
            onChange={(e) => {
              setSelectedHotelId(e.target.value);
              setPage(1);
            }}
            fullWidth
            required
          >
            {hotels.map((hotel) => (
              <MenuItem key={hotel.id} value={hotel.id}>
                {hotel.name}
              </MenuItem>
            ))}
          </WhiteTextField>
        </div>

        <div className="h-[2px] mb-8 w-full rounded bg-gradient-to-r from-[#263859]/70 via-[#101a2d]/90 to-[#263859]/70" />

        <TableContainer
          component={Paper}
          elevation={0}
          className="rounded-2xl overflow-hidden"
          style={{ background: "rgba(13, 15, 25, 0.99)" }}
        >
          <Table>
            <TableHead>
              <TableRow style={{ background: "rgba(10, 20, 35, 0.89)" }}>
                {["ID", "Title", "Description", "Image", "Action"].map((head) => (
                  <TableCell
                    key={head}
                    className="!font-bold text-base"
                    style={{
                      color: "#5186c9",
                      borderRight: "1.5px solid #192e4d",
                      background: "rgba(16, 26, 45, 0.30)",
                    }}
                  >
                    {head}
                  </TableCell>
                ))}
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
                    style={{
                      color: "#86a7cf",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {(page - 1) * rowsPerPage + index + 1}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#e3eafc",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {row.title}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#e3eafc",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {row.description}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#ffffff",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    <div className="flex flex-wrap gap-3">
                      <img
                        src={row.image}
                        alt={`Amenity ${row.id}`}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-4">
                      <button
                        className="text-green-500 hover:text-green-700"
                        onClick={() => handleUpdate(row)}
                      >
                        <FaEdit size={22} />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(row.id)}
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
              count={Math.ceil(records.length / rowsPerPage)}
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

export default HotelAmenities;