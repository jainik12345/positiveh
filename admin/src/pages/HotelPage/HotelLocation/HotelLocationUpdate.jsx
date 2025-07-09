import React, { useEffect, useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import Update from "../../../components/Buttons/Update";
import Cancel from "../../../components/Buttons/Cancel";
import UpdateData from "../../../components/Popup/UpdateData";
import axios from "axios";
import BE_URL from "../../../config";

const BlueTextField = styled(TextField)({
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

const HotelLocationUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rowData = location.state?.locationData;

  const [formData, setFormData] = useState({
    hotel_id: "",
    map_link: "",
    address: "",
    email: "",
    number: "",
    id: "",
  });

  const [hotelOptions, setHotelOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`${BE_URL}/hotelName`)
      .then((res) => setHotelOptions(res.data.data))
      .catch((err) => console.error("Hotel fetch failed:", err));

    if (rowData) {
      setFormData({
        hotel_id: rowData.hotel_id || "",
        map_link: rowData.map_link || "",
        address: rowData.address || "",
        email: rowData.email || "",
        number: rowData.number || "",
        id: rowData.id,
      });
    } else {
      navigate("/hotel-location");
    }
  }, [rowData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      hotel_id: formData.hotel_id === "",
      map_link: formData.map_link.trim() === "",
      address: formData.address.trim() === "",
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    try {
      const res = await axios.put(
        `${BE_URL}/hotelLocation/${formData.id}`,
        formData
      );

      if (res.data.status === "success") {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/hotel-location");
        }, 2500);
      } else {
        console.error("Update failed");
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const handleCancel = () => {
    navigate("/hotel-location");
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
          Update Hotel Location
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <BlueTextField
            select
            label="Select Hotel"
            name="hotel_id"
            value={formData.hotel_id}
            onChange={handleChange}
            fullWidth
            required
            error={errors.hotel_id}
            helperText={errors.hotel_id ? "Please select a hotel" : ""}
          >
            {hotelOptions.map((hotel) => (
              <MenuItem key={hotel.id} value={hotel.id}>
                {hotel.name}
              </MenuItem>
            ))}
          </BlueTextField>

          <BlueTextField
            label="Map Link"
            name="map_link"
            value={formData.map_link}
            onChange={handleChange}
            fullWidth
            required
            error={errors.map_link}
            helperText={errors.map_link ? "Please enter map link" : ""}
          />

          <BlueTextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={3}
            error={errors.address}
            helperText={errors.address ? "Please enter address" : ""}
          />

          <BlueTextField
            label="Email (optional)"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />

          <BlueTextField
            label="Phone (optional)"
            name="number"
            value={formData.number}
            onChange={handleChange}
            fullWidth
          />

          <div className="flex justify-end gap-4">
            <Update type="submit" />
            <Cancel onClick={handleCancel} />
          </div>
        </form>
      </div>

      {success && <UpdateData />}
    </div>
  );
};

export default HotelLocationUpdate;
