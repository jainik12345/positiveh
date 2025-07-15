import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Submit from "../../../components/Buttons/Submit";
import Cancel from "../../../components/Buttons/Cancel";
import SubmitData from "../../../components/Popup/SubmitData";
import BE_URL from "../../../config";
import axios from "axios";

const EmployeeDesignationInsert = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [taskPDF, setTaskPDF] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleFileChange = (e) => {
    setError(null);
    setTaskPDF(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskPDF) {
      setError("Task PDF is required");
      return;
    }
    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    const formData = new FormData();
    formData.append("task_pdf", taskPDF);
    formData.append("name", name);

    try {
      const response = await axios.post(
        `${BE_URL}/employeeDesignation`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.status === "success") {
        setSuccess(true);
        setError(null);
        setName("");
        setTaskPDF(null);
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
      } else {
        setError("Failed to add designation");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
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
          Add Employee Designation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Designation Name
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
              onChange={handleFileChange}
              accept="application/pdf"
              className="rounded-md p-2 w-full cursor-pointer"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
              }}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 font-semibold">{error}</p>}

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-2">
            <Submit type="submit" />
            <Cancel onClick={handleCancel} />
          </div>
        </form>
      </div>

      {/* Success Popup */}
      {success && <SubmitData />}
    </div>
  );
};

export default EmployeeDesignationInsert;
