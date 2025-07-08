import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MenuItem, TextField } from "@mui/material";
import styled from "@emotion/styled";
import Submit from "../../../components/Buttons/Submit";
import Cancel from "../../../components/Buttons/Cancel";
import SubmitData from "../../../components/Popup/SubmitData";
import BE_URL from "../../../config";

const BlueTextField = styled(TextField)({
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

const HotelOverviewInsert = () => {
  const navigate = useNavigate();

  const [hotelOptions, setHotelOptions] = useState([]);
  const [hotelId, setHotelId] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${BE_URL}/hotelName`)
      .then((res) => {
        if (res.data.status === "success") setHotelOptions(res.data.data);
      })
      .catch((err) => console.error("Failed to fetch hotels", err));
  }, []);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleImageChange = (e) => {
    setError(null);
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hotelId || !description || images.length === 0) {
      setError("All fields including images are required.");
      return;
    }

    const formData = new FormData();
    formData.append("hotel_id", hotelId);
    formData.append("description", description);
    images.forEach((img) => formData.append("images", img));

    try {
      const res = await axios.post(`${BE_URL}/hotelOverview`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.status === "success") {
        setSuccess(true);
        setError(null);
        setHotelId("");
        setDescription("");
        setImages([]);
        document.getElementById("image-input").value = "";
      } else {
        setError("Failed to add hotel overview");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  const handleCancel = () => {
    navigate("/hotel-overview");
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
          Add Hotel Overview
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Hotel Selector */}
          <div>
            <BlueTextField
              select
              label="Select Hotel"
              name="hotel_id"
              value={hotelId}
              onChange={(e) => setHotelId(e.target.value)}
              fullWidth
              required
            >
              {hotelOptions.map((hotel) => (
                <MenuItem key={hotel.id} value={hotel.id}>
                  {hotel.name}
                </MenuItem>
              ))}
            </BlueTextField>
          </div>

          {/* Description */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Description
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#ffffff",
              }}
              placeholder="Enter overview description"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Images (you can select multiple)
            </label>
            <input
              type="file"
              id="image-input"
              onChange={handleImageChange}
              multiple
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

          {/* Error */}
          {error && <p className="text-red-600 font-semibold">{error}</p>}

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-2">
            <Submit type="submit" />
            <Cancel onClick={handleCancel} />
          </div>
        </form>
      </div>

      {success && <SubmitData />}
    </div>
  );
};

export default HotelOverviewInsert;
