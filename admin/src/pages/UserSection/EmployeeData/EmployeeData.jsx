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
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import DeleteData from "./../../../components/Popup/DeleteData";
import Trace from "../../../components/Buttons/Trace";
import Add from "../../../components/Buttons/Add";

const WhiteTextField = styled(TextField)({
  "& label": { color: "#ffffff" },
  "& label.Mui-focused": { color: "#ffffff" },
  "& .MuiInputBase-root": { color: "#ffffff" },
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

const EmployeeData = () => {
  const [records, setRecords] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const navigate = useNavigate();
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  useEffect(() => {
    axios
      .get(`${BE_URL}/hotelName`)
      .then((res) => setHotels(res.data.data))
      .catch((err) => console.error("Hotel fetch failed", err));
  }, []);

  useEffect(() => {
    if (selectedHotelId) {
      axios
        .get(`${BE_URL}/employeeDataName/hotel/${selectedHotelId}`)
        .then((res) => {
          const formatted = res.data.data.map((item) => ({
            ...item,
            image: item.image.startsWith("http")
              ? item.image
              : `${BE_URL}/Images/EmployeeDataImages/EmployeeDataName/${item.image}`,
          }));
          setRecords(formatted);
        })
        .catch((err) => console.error("Employee fetch failed", err));
    } else {
      setRecords([]);
    }
  }, [selectedHotelId]);

  const displayedRows = records.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleEdit = (row) => {
    navigate("/employee-data/update", { state: { employee: row } });
  };

  const HandleAddBtn = () => {
    navigate("/employee-data/insert");
  };

  // ✅ DELETE HANDLER
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BE_URL}/employeeDataName/${id}`);
      setRecords((prev) => prev.filter((item) => item.id !== id));
      setShowDeletePopup(true);
      setTimeout(() => {
        setShowDeletePopup(false);
      }, 2500);
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <>
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
          className="w-full max-w-screen-xl rounded-2xl p-7 overflow-x-auto"
          style={{
            background: "rgba(12, 14, 22, 0.98)",
            boxShadow: "0 4px 32px #0a183d44, 0 0 0 2px #1565c033",
            border: "1.5px solid #101a2d",
          }}
        >
          <div className="flex justify-between items-center mb-7">
            <Trace onClick={() => navigate("/employee-data/trace")} />
            <Add
              text="Add Employee Data"
              onClick={HandleAddBtn}
              width="w-[230px]"
            />
          </div>
          <div className="mb-7">
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

          <div style={{ overflowX: "auto" }}>
            <TableContainer
              component={Paper}
              elevation={0}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(13, 15, 25, 0.99)",
                minWidth: "1300px",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow style={{ background: "rgba(10, 20, 35, 0.89)" }}>
                    {[
                      "ID",
                      "Name",
                      "Email ID",
                      "Image",
                      "Address",
                      "Designation",
                      "Status",
                      "Action",
                    ].map((head) => (
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
                        height: "200px",
                      }}
                      className="hover:bg-[#101a2d]/60 transition"
                    >
                      <TableCell style={cellStyle}>
                        {(page - 1) * rowsPerPage + index + 1}
                      </TableCell>
                      <TableCell style={scrollCellStyle}>{row.name}</TableCell>
                      <TableCell style={scrollCellStyle}>
                        {row.email_id}
                      </TableCell>
                      <TableCell style={{ ...cellStyle, width: "140px" }}>
                        <img
                          src={row.image}
                          alt={`Employee ${row.id}`}
                          className="w-28 h-28 object-cover rounded"
                        />
                      </TableCell>
                      <TableCell style={{ ...scrollCellStyle, width: "250px" }}>
                        {row.address}
                      </TableCell>
                      <TableCell style={scrollCellStyle}>
                        {row.designation}
                      </TableCell>
                      <TableCell
                        style={{
                          ...cellStyle,
                          color:
                            row.status === "Active" ? "#00e676" : "#ff1744",
                        }}
                      >
                        {row.status}
                      </TableCell>
                      <TableCell style={cellStyle}>
                        <div className="flex space-x-4">
                          <button
                            className="text-green-500 hover:text-green-700"
                            onClick={() => handleEdit(row)}
                          >
                            <FaEdit size={20} />
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDelete(row.id)}
                          >
                            <FaTrash size={20} />
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
      </div>
    </>
  );
};

const cellStyle = {
  color: "#e3eafc",
  borderRight: "1.2px solid #192e4d",
  verticalAlign: "top",
  height: "200px",
};

const scrollCellStyle = {
  ...cellStyle,
  overflow: "auto",
  maxHeight: "200px",
  paddingRight: "10px",
};

export default EmployeeData;
