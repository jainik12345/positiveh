import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Update from "../../components/Buttons/Update";
import Cancel from "../../components/Buttons/Cancel";
import UpdateData from "../../components/Popup/UpdateData";
import axios from "axios";
import BE_URL from "../../config";

const TermsConditionsUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rowData = location.state?.rowData || {};

  const [description, setDescription] = useState(rowData.description || "");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      console.log("Validation failed: Description is required");
      return;
    }

    try {
      await axios.put(`${BE_URL}/termsConditions/${rowData.id}`, {
        description,
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/terms-conditions");
      }, 2500);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleCancel = () => {
    navigate("/terms-conditions");
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
          Update Terms & Conditions
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Description */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#e3eafc",
                outline: "none",
                boxShadow: "0 1px 3px #101a2d22",
                resize: "vertical",
              }}
              placeholder="Enter terms and conditions description"
              required
            />
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

export default TermsConditionsUpdate;
