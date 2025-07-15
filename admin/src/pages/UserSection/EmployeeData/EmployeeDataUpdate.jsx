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
  "& .MuiSelect-select": {
    backgroundColor: "#121926",
    color: "#ffffff",
  },
  "& .MuiMenu-paper": {
    backgroundColor: "#121926",
    color: "#ffffff",
  },
});

const EmployeeDataUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rowData = location.state?.employee;

  const [formData, setFormData] = useState({
    hotel_id: "",
    name: "",
    email_id: "",
    address: "",
    designation: "",
    status: "",
    id: "",
  });

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const [hotelOptions, setHotelOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [designationOptions, setDesignationOptions] = useState([]);

  useEffect(() => {
    axios.get(`${BE_URL}/hotelName`).then((res) => {
      setHotelOptions(res.data.data);
    });

    axios.get(`${BE_URL}/employeeDesignation`).then((res) => {
      if (res.data.status === "success") {
        const filtered = res.data.data.filter((d) => d.deleted_at === 0);
        setDesignationOptions(filtered);
      }
    });

    if (rowData) {
      setFormData({
        hotel_id: rowData.hotel_id || "",
        name: rowData.name || "",
        email_id: rowData.email_id || "",
        address: rowData.address || "",
        designation: rowData.designation || "",
        status:
          rowData.status?.toLowerCase() === "inactive" ? "Inactive" : "Active",
        id: rowData.id,
      });

      if (rowData.image) {
        const imageURL = rowData.image.startsWith("http")
          ? rowData.image
          : `${BE_URL}/Images/EmployeeDataImages/EmployeeDataName/${rowData.image}`;
        setExistingImage(rowData.image);
        setPreviewImage({ url: imageURL, name: rowData.image });
      }
    } else {
      navigate("/employee-data");
    }
  }, [rowData, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage({ url: URL.createObjectURL(file), file });
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
      name: formData.name.trim() === "",
      email_id: formData.email_id.trim() === "",
      address: formData.address.trim() === "",
      designation: !formData.designation,
      status: formData.status === "",
      image: !previewImage,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((v) => v)) return;

    const data = new FormData();
    data.append("hotel_id", formData.hotel_id);
    data.append("name", formData.name);
    data.append("email_id", formData.email_id);
    data.append("address", formData.address);
    data.append("designation", formData.designation);
    data.append("status", formData.status);

    if (existingImage) data.append("existingImage", existingImage);
    if (image) data.append("image", image);

    try {
      const res = await axios.put(
        `${BE_URL}/employeeDataName/${formData.id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (res.data.status === "success") {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/employee-data");
        }, 2500);
      }
    } catch (err) {
      console.error("Update error:", err);
    }
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
          className="text-xl font-bold mb-10"
          style={{
            color: "#5186c9",
            borderBottom: "1.5px solid #192e4d",
            paddingBottom: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          Update Employee Data
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Hotel Select */}
          <BlueTextField
            select
            label="Select Hotel"
            name="hotel_id"
            value={formData.hotel_id}
            onChange={handleInputChange}
            fullWidth
            error={errors.hotel_id}
            helperText={errors.hotel_id ? "Please select a hotel" : ""}
          >
            {hotelOptions.map((hotel) => (
              <MenuItem key={hotel.id} value={hotel.id}>
                {hotel.name}
              </MenuItem>
            ))}
          </BlueTextField>

          {/* Name */}
          <BlueTextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            error={errors.name}
            helperText={errors.name ? "Please enter a name" : ""}
          />

          {/* Email ID */}
          <BlueTextField
            label="Email ID"
            name="email_id"
            value={formData.email_id}
            onChange={handleInputChange}
            fullWidth
            error={errors.email_id}
            helperText={errors.email_id ? "Please enter email ID" : ""}
          />

          {/* Address */}
          <BlueTextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            fullWidth
            error={errors.address}
            helperText={errors.address ? "Please enter address" : ""}
          />

          {/* Designation */}

          <BlueTextField
            select
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            fullWidth
            error={errors.designation}
            helperText={errors.designation ? "Please select designation" : ""}
          >
            {designationOptions.map((d) => (
              <MenuItem key={d.id} value={d.id}>
                {d.name}
              </MenuItem>
            ))}
          </BlueTextField>

          {/* Status */}
          <BlueTextField
            select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            fullWidth
            error={errors.status}
            helperText={errors.status ? "Please select status" : ""}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </BlueTextField>

          {/* Image Upload */}
          <div>
            <label className="block font-medium mb-2 text-white">
              Upload Image <span className="text-red-500">*</span>
            </label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
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
                    className="absolute top-[-6px] right-[-6px] bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow"
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
            <Cancel onClick={() => navigate("/employee-data")} />
          </div>
        </form>
      </div>

      {success && <UpdateData />}
    </div>
  );
};

export default EmployeeDataUpdate;
