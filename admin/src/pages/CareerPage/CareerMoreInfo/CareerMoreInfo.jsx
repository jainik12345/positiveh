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
} from "@mui/material";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Add from "../../../components/Buttons/Add";
import Trace from "../../../components/Buttons/Trace";
import DeleteData from "../../../components/Popup/DeleteData";

const CareerMoreInfo = () => {
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const rowsPerPage = 10;
  const navigate = useNavigate();

  const fetchRecords = async () => {
    try {
      const res = await axios.get(`${BE_URL}/careerMoreInfo`);
      const formatted = res.data.data.map((item) => ({
        ...item,
        imageUrl: `${BE_URL}/Images/CareerImages/MoreInfo/${item.image}`,
      }));
      setRecords(formatted);
    } catch (err) {
      console.error("Error fetching career more info:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BE_URL}/careerMoreInfo/${id}`);
      setShowDeletePopup(true);
      setTimeout(() => {
        setShowDeletePopup(false);
        fetchRecords();
      }, 2500);
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const displayedRows = records.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleAdd = () => {
    navigate("/career-more-info/insert");
  };

  const handleEdit = (row) => {
    navigate("/career-more-info/update", {
      state: { rowData: row },
    });
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
          <Trace onClick={() => navigate("/career-more-info/trace")} />
          <Add text="Add Career Info" width="w-[230px]" onClick={handleAdd} />
        </div>

        <div className="h-[2px] mb-8 w-full rounded bg-gradient-to-r from-[#263859]/70 via-[#101a2d]/90 to-[#263859]/70" />
        <div style={{ overflowX: "auto", width: "100%" }}>
          <TableContainer
            component={Paper}
            elevation={0}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(13, 15, 25, 0.99)",
              boxShadow: "0 0 16px #101a2d44",
              minWidth: "1500px",
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
                    Heading
                  </TableCell>
                  <TableCell
                    className="!font-bold text-base"
                    style={{
                      color: "#5186c9",
                      background: "rgba(16, 26, 45, 0.30)",
                    }}
                  >
                    Description
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
                        alt="Career Info"
                        className="w-16 h-16 object-cover rounded"
                      />
                    </TableCell>

                    <TableCell
                      style={{
                        color: "#e3eafc",
                        borderRight: "1.2px solid #192e4d",
                      }}
                    >
                      {row.heading}
                    </TableCell>

                    <TableCell
                      style={{
                        color: "#e3eafc",
                        borderRight: "1.2px solid #192e4d",
                        minWidth: 700,
                        maxWidth: 700,
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      <div
                        style={{
                          maxHeight: "200px",
                          overflowY: "auto",
                          paddingRight: "6px",
                        }}
                      >
                        {row.description.length > 80
                          ? row.description.slice(0, 80) + "..."
                          : row.description}
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex space-x-6">
                        <button
                          style={{
                            color: "#3c82e6",
                            border: "none",
                            background: "none",
                            filter: "drop-shadow(0 0 4px #5186c955)",
                          }}
                          onClick={() => handleEdit(row)}
                          title="Edit"
                        >
                          <FaEdit size={22} />
                        </button>
                        <button
                          className="hover:scale-110 transition"
                          style={{
                            color: "#e53935",
                            border: "none",
                            background: "none",
                            filter: "drop-shadow(0 0 4px #e5393544)",
                          }}
                          onClick={() => handleDelete(row.id)}
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
  );
};

export default CareerMoreInfo;
