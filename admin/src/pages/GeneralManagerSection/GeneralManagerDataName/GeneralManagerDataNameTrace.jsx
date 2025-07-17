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
  MenuItem,
  TextField,
  Tooltip,
} from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BE_URL from "../../../config";
import RestoreData from "../../../components/Popup/RestoreData";
import Back from "../../../components/Buttons/Back";
import { FaRecycle } from "react-icons/fa";

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

const GeneralManagerDataNameTrace = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [hotelOptions, setHotelOptions] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState("");
  const [trashedManagers, setTrashedManagers] = useState([]);
  const [restoreSuccess, setRestoreSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BE_URL}/hotelName`)
      .then((res) => setHotelOptions(res.data.data))
      .catch((err) => console.error("Hotel fetch failed:", err));
  }, []);

  useEffect(() => {
    if (selectedHotelId) {
      axios
        .get(
          `${BE_URL}/generalManagerDataName/trashed/hotel/${selectedHotelId}`
        )
        .then((res) => {
          const formatted = res.data.data.map((gm) => ({
            ...gm,
            image: gm.image?.startsWith("http")
              ? gm.image
              : `${BE_URL}/Images/GeneralManagerDataImages/GeneralManagerDataName/${gm.image}`,
          }));
          setTrashedManagers(formatted);
        })
        .catch((err) => console.error("Trash fetch failed:", err));
    } else {
      setTrashedManagers([]);
    }
  }, [selectedHotelId]);

  const handleRestore = (id) => {
    axios
      .patch(`${BE_URL}/generalManagerDataName/restore/${id}`)
      .then((res) => {
        if (res.data.status === "success") {
          setTrashedManagers((prev) => prev.filter((gm) => gm.id !== id));
          setRestoreSuccess(true);
          setTimeout(() => setRestoreSuccess(false), 2500);
        }
      })
      .catch((err) => console.error("Restore failed:", err));
  };

  const displayedRows = trashedManagers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div
      className="w-full px-2 py-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
      }}
    >
      {restoreSuccess && <RestoreData />}
      <div
        className="w-full max-w-screen-xl rounded-2xl p-7"
        style={{
          background: "rgba(12, 14, 22, 0.98)",
          boxShadow: "0 4px 32px #0a183d44, 0 0 0 2px #1565c033",
          border: "1.5px solid #101a2d",
        }}
      >
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-xl font-bold text-[#5186c9]">
            Trashed General Manager Data
          </h2>
          <Back onClick={() => navigate("/general-manager-data-name")} />
        </div>

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
          {hotelOptions.map((hotel) => (
            <MenuItem key={hotel.id} value={hotel.id}>
              {hotel.name}
            </MenuItem>
          ))}
        </WhiteTextField>

        <div className="h-[2px] mb-8 mt-6 w-full rounded bg-gradient-to-r from-[#263859]/70 via-[#101a2d]/90 to-[#263859]/70" />

        <TableContainer
          component={Paper}
          elevation={0}
          className="rounded-2xl overflow-hidden"
          style={{ background: "rgba(13, 15, 25, 0.99)" }}
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

                  "Status",
                  "Restore",
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
              {displayedRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    <div className="text-white">
                      First select hotel name, then trashed data will appear
                      here.
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                displayedRows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    style={{
                      background:
                        "linear-gradient(90deg, #10131a 85%, #192e4d26 100%)",
                      borderBottom: "1.2px solid #101a2d",
                    }}
                    className="hover:bg-[#101a2d]/60 transition"
                  >
                    <TableCell style={cellStyle}>
                      {(page - 1) * rowsPerPage + index + 1}
                    </TableCell>
                    <TableCell style={cellStyle}>{row.name}</TableCell>
                    <TableCell style={cellStyle}>{row.email_id}</TableCell>
                    <TableCell style={cellStyle}>
                      {row.image ? (
                        <img
                          src={row.image}
                          alt="Manager"
                          className="w-16 h-16 object-cover rounded"
                        />
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell style={cellStyle}>{row.address}</TableCell>

                    <TableCell
                      style={{
                        ...cellStyle,
                        color: row.status === "Active" ? "#00e676" : "#ff1744",
                      }}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell className="text-center">
                      <Tooltip title="Restore General Manager" arrow>
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          onClick={() => handleRestore(row.id)}
                        >
                          <FaRecycle size={22} />
                        </button>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              )}
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
              count={Math.ceil(trashedManagers.length / rowsPerPage)}
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

const cellStyle = {
  color: "#e3eafc",
  borderRight: "1.2px solid #192e4d",
  verticalAlign: "top",
};

export default GeneralManagerDataNameTrace;
