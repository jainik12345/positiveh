import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Update from "../../../components/Buttons/Update";
import Cancel from "../../../components/Buttons/Cancel";
import UpdateData from "../../../components/Popup/UpdateData";
import axios from "axios";
import BE_URL from "../../../config";

const HomeImageSliderUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rowData = location.state?.rowData || {};

  const [preview, setPreview] = useState(
    rowData.image
      ? `${BE_URL}/Images/HomeImages/HomeImageSlider/${rowData.image}`
      : null
  );
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(file ? URL.createObjectURL(file) : preview);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (image) {
      formData.append("image", image);
    } else if (rowData.image) {
      formData.append("existingImage", rowData.image);
    }

    try {
      await axios.put(`${BE_URL}/homeImageSlider/${rowData.id}`, formData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/home-image-slider");
      }, 2500);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleCancel = () => {
    navigate("/home-image-slider");
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
          Update Home Image Slider
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Image Upload */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Slider Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="rounded-md p-2 w-full cursor-pointer"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
              }}
            />
            {preview && (
              <div className="mt-2">
                <span className="text-sm text-gray-500">Image preview:</span>
                <img
                  src={preview}
                  alt="Slider"
                  className="w-24 h-24 object-cover rounded mt-1"
                />
              </div>
            )}
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

export default HomeImageSliderUpdate;
