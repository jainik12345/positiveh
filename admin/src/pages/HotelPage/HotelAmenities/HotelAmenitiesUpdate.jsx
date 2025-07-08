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

const HotelAmenitiesUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rowData = location.state?.amenityData;

  const [formData, setFormData] = useState({
    hotel_id: "",
    title: "",
    description: "",
    id: "",
  });
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const [hotelOptions, setHotelOptions] = useState([]);
  const [errors, setErrors] = useState({
    hotel_id: false,
    title: false,
    description: false,
    image: false,
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`${BE_URL}/hotelName`)
      .then((res) => setHotelOptions(res.data.data))
      .catch((err) => console.error("Hotel fetch failed:", err));

    if (rowData) {
      setFormData({
        hotel_id: rowData.hotel_id || "",
        title: rowData.title || "",
        description: rowData.description || "",
        id: rowData.id,
      });

      if (rowData.image) {
        setExistingImage(rowData.image);
        setPreviewImage({
          url: rowData.image.startsWith("http")
            ? rowData.image
            : `${BE_URL}/Images/HotelImages/HotelAmenities/${rowData.image}`,
          name: rowData.image,
          isNew: false,
        });
      }
    } else {
      navigate("/hotel-amenities");
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
      const preview = {
        url: URL.createObjectURL(file),
        file,
        isNew: true,
      };
      setImage(file);
      setPreviewImage(preview);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    setImage(null);
    setExistingImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      hotel_id: formData.hotel_id === "",
      title: formData.title.trim() === "",
      description: formData.description.trim() === "",
      image: !previewImage,
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((v) => v)) return;

    const data = new FormData();
    data.append("hotel_id", formData.hotel_id);
    data.append("title", formData.title);
    data.append("description", formData.description);

    if (existingImage) {
      data.append("existingImage", existingImage);
    }
    if (image) {
      data.append("image", image);
    }

    try {
      const res = await axios.put(
        `${BE_URL}/hotelAmenities/${formData.id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.status === "success") {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/hotel-amenities");
        }, 2500);
      } else {
        console.error("Update failed");
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const handleCancel = () => {
    navigate("/hotel-amenities");
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
          Update Hotel Amenity
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Hotel Selector */}
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

          {/* Title */}
          <BlueTextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            fullWidth
            required
            error={errors.title}
            helperText={errors.title ? "Please enter title" : ""}
          />

          {/* Description */}
          <BlueTextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            multiline
            rows={4}
            fullWidth
            required
            error={errors.description}
            helperText={errors.description ? "Please enter description" : ""}
          />

          {/* Image Upload */}
          <div>
            <label className="block font-medium mb-2 text-white">
              Upload Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-2"
            />
            {previewImage && (
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="relative group">
                  <img
                    src={previewImage.url}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded border"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-[-6px] right-[-6px] bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow group-hover:scale-110 transition"
                    title="Remove"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
            {errors.image && (
              <p className="text-red-600 text-xs mt-1">
                Please upload an image
              </p>
            )}
          </div>

          {/* Buttons */}
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

export default HotelAmenitiesUpdate;
