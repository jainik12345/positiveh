import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MenuItem, TextField, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import { FaRandom } from "react-icons/fa";
import Submit from "../../../components/Buttons/Submit";
import Cancel from "../../../components/Buttons/Cancel";
import SubmitData from "../../../components/Popup/SubmitData";
import BE_URL from "../../../config";

const BlueTextField = styled(TextField)({
  marginTop: "1rem",
  marginBottom: "1rem",
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

const GeneralManagerDataNameInsert = () => {
  const navigate = useNavigate();
  const [hotelOptions, setHotelOptions] = useState([]);
  const [hotelId, setHotelId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BE_URL}/hotelName`).then((res) => {
      if (res.data.status === "success") {
        setHotelOptions(res.data.data);
      }
    });
  }, []);

  const handleImageChange = (e) => {
    setError(null);
    setImage(e.target.files[0]);
  };

  const generatePassword = () => {
    const chars = "0123456789abcdefABCDEF";
    let newPass = "";
    for (let i = 0; i < 8; i++) {
      newPass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hotelId || !name || !email || !password || !image) {
      setError("All required fields must be filled.");
      return;
    }

    const formData = new FormData();
    formData.append("hotel_id", hotelId);
    formData.append("name", name);
    formData.append("email_id", email);
    formData.append("password", password);
    formData.append("image", image);
    formData.append("address", address);
    formData.append("status", status);

    try {
      const res = await axios.post(`${BE_URL}/generalManagerDataName`, formData);
      if (res.data.status === "success") {
        setSuccess(true);
        setError(null);
        setHotelId("");
        setName("");
        setEmail("");
        setPassword("");
        setImage(null);
        setAddress("");
        setStatus("");
        document.getElementById("image-input").value = "";
      } else {
        setError("Failed to insert General Manager");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  const handleCancel = () => navigate("/general-manager-data-name");

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
          Add General Manager Data
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <BlueTextField
            select
            label="Select Hotel"
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

          <BlueTextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />

          <BlueTextField
            label="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />

          <div className="flex items-center gap-4">
            <BlueTextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
            <IconButton
              onClick={generatePassword}
              sx={{ color: "#00D2FF" }}
              title="Generate Password"
            >
              <FaRandom />
            </IconButton>
          </div>

          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Image
            </label>
            <input
              type="file"
              id="image-input"
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

          <BlueTextField
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
          />

          <BlueTextField
            select
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            required
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </BlueTextField>

          {error && <p className="text-red-600 font-semibold">{error}</p>}

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

export default GeneralManagerDataNameInsert;
