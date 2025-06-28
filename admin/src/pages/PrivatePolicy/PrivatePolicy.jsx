import React, { useState } from "react";
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
import Add from "../../components/Buttons/Add";
import Trace from "../../components/Buttons/Trace";
import DeleteData from "../../components/Popup/DeleteData";
import { useNavigate } from "react-router-dom";

// Static data for demonstration
const STATIC_DATA = [
  {
    id: 1,
    private_policy_title: "Data Collection",
    private_policy_description:
      "We collect data to provide better services to all our users. The data collected includes personal information, usage statistics, and cookies.",
  },
  {
    id: 2,
    private_policy_title: "Data Usage",
    private_policy_description:
      "Collected data is used to personalize user experience and improve our platform features.",
  },
  {
    id: 3,
    private_policy_title: "Data Sharing",
    private_policy_description:
      "We do not share personal data with third parties except as required by law.",
  },
];

const PrivatePolicy = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const data = STATIC_DATA;
  const navigate = useNavigate();

  const displayedRows = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const HandleAddBtn = () => {
    navigate("/private-policy/insert");
  };

  const HandleEditBtn = () => {
    navigate("/private-policy/update");
  };

  // Very dark theme with subtle blue highlights
  return (
    <div
      className="min-h-screen w-full px-2 py-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
      }}
    >
      {showDeletePopup && (
        <DeleteData onClose={() => setShowDeletePopup(false)} />
      )}

      <div
        className="w-full max-w-5xl rounded-2xl p-7"
        style={{
          background: "rgba(12, 14, 22, 0.98)",
          boxShadow: "0 4px 32px #0a183d44, 0 0 0 2px #1565c033",
          border: "1.5px solid #101a2d",
        }}
      >
        <div className="flex justify-between items-center mb-7">
          <Trace onClick={() => alert("Trace clicked!")} />
          <Add
            text="Add Private Policy"
            width="w-[200px]"
            onClick={HandleAddBtn}
          />
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
                  Title
                </TableCell>
                <TableCell
                  className="!font-bold text-base"
                  style={{
                    color: "#5186c9",
                    borderRight: "1.5px solid #192e4d",
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
                    className="font-medium text-left"
                    style={{
                      color: "#b2c7e5",
                      borderRight: "1.2px solid #192e4d",
                    }}
                  >
                    {row.private_policy_title}
                  </TableCell>
                  <TableCell
                    className="text-left"
                    style={{
                      color: "#e3eafc",
                      borderRight: "1.2px solid #192e4d",
                      maxWidth: 300,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {row.private_policy_description}
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
                        onClick={HandleEditBtn}
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
                        onClick={() => setShowDeletePopup(true)}
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

export default PrivatePolicy;
