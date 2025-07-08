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

const HotelOverviewUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rowData = location.state?.overviewData;

  const [formData, setFormData] = useState({
    hotel_id: "",
    description: "",
    id: "",
  });
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [hotelOptions, setHotelOptions] = useState([]);
  const [errors, setErrors] = useState({
    hotel_id: false,
    description: false,
    images: false,
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
        description: rowData.description || "",
        id: rowData.id,
      });

      const existing = rowData.images || [];
      setExistingImages(existing);
      setPreviewImages(
        existing.map((img) => ({
          url: img.startsWith("http")
            ? img
            : `${BE_URL}/Images/HotelImages/HotelOverview/${img}`,
          name: img,
          isNew: false,
        }))
      );
    } else {
      navigate("/hotel-overview");
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
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
      isNew: true,
    }));
    setImages((prev) => [...prev, ...files]);
    setPreviewImages((prev) => [...prev, ...newPreviews]);
  };

  const handleRemoveImage = (index) => {
    setPreviewImages((prev) => {
      const removed = prev[index];
      if (removed.isNew) {
        setImages((imgs) =>
          imgs.filter((file) => file.name !== removed.file.name)
        );
      } else {
        setExistingImages((imgs) => imgs.filter((img) => img !== removed.name));
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newErrors = {
  //     hotel_id: formData.hotel_id === "",
  //     description: formData.description.trim() === "",
  //     images: !images.length && !previewImages.length,
  //   };
  //   setErrors(newErrors);
  //   if (Object.values(newErrors).some((v) => v)) return;

  //   const data = new FormData();
  //   data.append("hotel_id", formData.hotel_id);
  //   data.append("description", formData.description);
  //   if (images.length > 0) {
  //     images.forEach((img) => data.append("images", img));
  //   } else if (rowData.images) {
  //     data.append("existingImages", JSON.stringify(rowData.images));
  //   }

  //   try {
  //     const res = await axios.put(
  //       `${BE_URL}/hotelOverview/${formData.id}`,
  //       data,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );

  //     if (res.data.status === "success") {
  //       setSuccess(true);
  //       setTimeout(() => {
  //         setSuccess(false);
  //         navigate("/hotel-overview");
  //       }, 2500);
  //     } else {
  //       console.error("Update failed");
  //     }
  //   } catch (err) {
  //     console.error("Update error:", err);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      hotel_id: formData.hotel_id === "",
      description: formData.description.trim() === "",
      images: previewImages.length === 0,
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((v) => v)) return;

    const data = new FormData();
    data.append("hotel_id", formData.hotel_id);
    data.append("description", formData.description);

    if (existingImages.length > 0) {
      data.append("existingImages", JSON.stringify(existingImages));
    }
    images.forEach((file) => {
      data.append("images", file);
    });

    try {
      const res = await axios.put(
        `${BE_URL}/hotelOverview/${formData.id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.status === "success") {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/hotel-overview");
        }, 2500);
      } else {
        console.error("Update failed");
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const handleCancel = () => {
    navigate("/hotel-overview");
  };

  return (
    <div
      lassName="w-full flex items-center justify-center px-2 py-8"
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
          Update Hotel Overview
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
              Upload Images <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="mb-2"
            />
            {previewImages.length > 0 && (
              // <div className="mt-4 flex flex-wrap gap-3">
              //   {previewImages.map((src, idx) => (
              //     <img
              //       key={idx}
              //       src={src}
              //       alt={`Preview ${idx}`}
              //       className="w-20 h-20 object-cover rounded border"
              //     />
              //   ))}
              // </div>

              <div className="mt-4 flex flex-wrap gap-4">
                {previewImages.map((img, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={img.url}
                      alt={`Preview ${idx}`}
                      className="w-20 h-20 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(idx)}
                      className="absolute top-[-6px] right-[-6px] bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow group-hover:scale-110 transition"
                      title="Remove"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            {errors.images && (
              <p className="text-red-600 text-xs mt-1">
                Please upload at least one image
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

export default HotelOverviewUpdate;
