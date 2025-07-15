import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Update from "../../../components/Buttons/Update";
import Cancel from "../../../components/Buttons/Cancel";
import UpdateData from "../../../components/Popup/UpdateData";
import axios from "axios";
import BE_URL from "../../../config";

const EmployeeDesignationUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rowData = location.state?.rowData || {};

  const [name, setName] = useState(rowData.name || "");
  const [pdf, setPdf] = useState(null);
  const [existingPdf, setExistingPdf] = useState(rowData.task_pdf || "");
  const [success, setSuccess] = useState(false);

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    setPdf(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      console.log("Validation failed: Name is required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    if (pdf) {
      formData.append("task_pdf", pdf);
    } else if (existingPdf) {
      formData.append("existing_pdf", existingPdf);
    }

    try {
      await axios.put(`${BE_URL}/employeeDesignation/${rowData.id}`, formData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/employee-designation");
      }, 2500);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleCancel = () => {
    navigate("/employee-designation");
  };

  return (
    <div
      className="w-full flex items-center justify-center px-2 py-8"
      style={{
        background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
      }}
    >
      <div
        className="w-full max-w-screen-xl mx-auto rounded-2xl p-8"
        style={{
          background: "rgba(12, 14, 22, 0.98)",
          boxShadow: "0 4px 32px #0a183d44, 0 0 0 2px #1565c033",
          border: "1.5px solid #101a2d",
        }}
      >
        <h2
          className="text-xl font-bold mb-10 px-0 py-2 w-full text-left"
          style={{
            color: "#5186c9",
            borderBottom: "1.5px solid #192e4d",
            paddingBottom: "0.75rem",
            marginBottom: "2.5rem",
            letterSpacing: "0.04em",
          }}
        >
          Update Employee Designation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
                outline: "none",
                boxShadow: "0 1px 3px #101a2d22",
              }}
              placeholder="Enter designation name"
              required
            />
          </div>

          {/* Task PDF Upload */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Upload Task PDF
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={handlePdfChange}
              className="rounded-md p-2 w-full cursor-pointer"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
              }}
            />
            {existingPdf && !pdf && (
              <div className="mt-2 text-sm text-gray-400">
                Current PDF:{" "}
                <a
                  href={`${BE_URL}/Images/EmployeeDataImages/EmployeeDesignation/${existingPdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400"
                >
                  {existingPdf}
                </a>
              </div>
            )}
            {pdf && (
              <div className="mt-2 text-sm text-green-400">
                New PDF selected: {pdf.name}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-2">
            <Update type="submit" />
            <Cancel onClick={handleCancel} />
          </div>
        </form>
      </div>

      {/* Success Popup */}
      {success && <UpdateData />}
    </div>
  );
};

export default EmployeeDesignationUpdate;
