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
  "& .MuiInputBase-root": { color: "#ffffff" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#ffffff" },
    "&:hover fieldset": { borderColor: "#cccccc" },
    "&.Mui-focused fieldset": { borderColor: "#00D2FF" },
  },
});

const HotelGalleryUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rowData = location.state?.galleryData;

  const [formData, setFormData] = useState({
    hotel_id: "",
    id: "",
  });
  const [selectedImage, setSelectedImage] = useState(null); // new uploaded file
  const [previewImage, setPreviewImage] = useState(null); // preview url
  const [existingImage, setExistingImage] = useState(""); // image name from DB
  const [hotelOptions, setHotelOptions] = useState([]);
  const [errors, setErrors] = useState({ hotel_id: false, image: false });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`${BE_URL}/hotelName`)
      .then((res) => setHotelOptions(res.data.data))
      .catch((err) => console.error("Hotel fetch failed:", err));

    if (rowData) {
      setFormData({
        hotel_id: rowData.hotel_id || "",
        id: rowData.id,
      });

      if (rowData.image) {
        const imageUrl = rowData.image.startsWith("http")
          ? rowData.image
          : `${BE_URL}/Images/HotelImages/HotelGallery/${rowData.image}`;
        setExistingImage(rowData.image);
        setPreviewImage(imageUrl);
      }
    } else {
      navigate("/hotel-gallery");
    }
  }, [rowData, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
      setExistingImage(""); // remove existing image
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      hotel_id: formData.hotel_id === "",
      image: !selectedImage && !existingImage,
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    const data = new FormData();
    data.append("hotel_id", formData.hotel_id);

    if (selectedImage) {
      data.append("images", selectedImage);
    } else if (existingImage) {
      data.append("existingImage", existingImage);
    }

    try {
      const res = await axios.put(
        `${BE_URL}/hotelGallery/${formData.id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.status === "success") {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/hotel-gallery");
        }, 2500);
      } else {
        console.error("Update failed");
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const handleCancel = () => {
    navigate("/hotel-gallery");
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
          className="text-xl font-bold mb-10 text-left"
          style={{
            color: "#5186c9",
            borderBottom: "1.5px solid #192e4d",
            paddingBottom: "0.75rem",
            marginBottom: "2.5rem",
            letterSpacing: "0.04em",
          }}
        >
          Update Hotel Gallery
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <BlueTextField
            select
            label="Select Hotel"
            name="hotel_id"
            value={formData.hotel_id}
            onChange={handleInputChange}
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

          <div>
            <label className="block font-medium mb-2 text-white">
              Upload New Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-2"
            />
            {previewImage && (
              <div className="mt-4">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded border"
                />
              </div>
            )}
            {errors.image && (
              <p className="text-red-600 text-xs mt-1">
                Please upload an image
              </p>
            )}
          </div>

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

export default HotelGalleryUpdate;
