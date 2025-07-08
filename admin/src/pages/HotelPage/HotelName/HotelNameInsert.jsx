import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Submit from "../../../components/Buttons/Submit";
import Cancel from "../../../components/Buttons/Cancel";
import SubmitData from "../../../components/Popup/SubmitData";
import BE_URL from "../../../config";
import axios from "axios";

const HotelNameInsert = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("UpComing");
  const [image, setImage] = useState(null);
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

  const handleImageChange = (e) => {
    setError(null);
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !address.trim() || !image) {
      setError("All fields including image are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("status", status);
    formData.append("image", image);

    try {
      const response = await axios.post(`${BE_URL}/hotelName`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.status === "success") {
        setSuccess(true);
        setError(null);
        setName("");
        setAddress("");
        setStatus("UpComing");
        setImage(null);
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
      } else {
        setError("Failed to add hotel");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  const handleCancel = () => {
    navigate("/hotel-name");
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
          Add Hotel Name
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Hotel Name */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Hotel Name
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
              }}
              placeholder="Enter hotel name"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Address
            </label>
            <textarea
              rows={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
              }}
              placeholder="Enter hotel address"
              required
            />
          </div>

          {/* Status */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
              }}
            >
              <option value="UpComing">UpComing</option>
              <option value="Running">Running</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
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

export default HotelNameInsert;
