import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Update from "../../../components/Buttons/Update";
import Cancel from "../../../components/Buttons/Cancel";
import UpdateData from "../../../components/Popup/UpdateData";
import axios from "axios";
import BE_URL from "../../../config";

const TeamMemberUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rowData = location.state?.rowData || {};

  const [name, setName] = useState(rowData.name || "");
  const [position, setPosition] = useState(rowData.position || "");
  const [title, setTitle] = useState(rowData.title || "");
  const [heading, setHeading] = useState(rowData.heading || "");
  const [description, setDescription] = useState(rowData.description || "");
  const [preview, setPreview] = useState(
    rowData.image
      ? `${BE_URL}/Images/TeamImages/TeamMemberName/${rowData.image}`
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

    if (
      !name.trim() ||
      !position.trim() ||
      !title.trim() ||
      !heading.trim() ||
      !description.trim()
    ) {
      console.log("Validation failed: All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("title", title);
    formData.append("heading", heading);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    } else if (rowData.image) {
      formData.append("existingImage", rowData.image);
    }

    try {
      await axios.put(
        `${BE_URL}/team-member-name/${rowData.id}`,
        formData
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/team-member");
      }, 2500);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleCancel = () => {
    navigate("/team-member");
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
          Update Team Member
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold" style={{ color: "#5186c9" }}>
              Name
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
                outline: "none",
                boxShadow: "0 1px 3px #101a2d22",
              }}
              placeholder="Enter team member's name"
              required
            />
          </div>
          {/* Position */}
          <div>
            <label className="block mb-2 font-semibold" style={{ color: "#5186c9" }}>
              Position
            </label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
                outline: "none",
                boxShadow: "0 1px 3px #101a2d22",
              }}
              placeholder="Enter team member's position"
              required
            />
          </div>
          {/* Title */}
          <div>
            <label className="block mb-2 font-semibold" style={{ color: "#5186c9" }}>
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
                outline: "none",
                boxShadow: "0 1px 3px #101a2d22",
              }}
              placeholder="Enter section title"
              required
            />
          </div>
          {/* Heading */}
          <div>
            <label className="block mb-2 font-semibold" style={{ color: "#5186c9" }}>
              Heading
            </label>
            <input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
                outline: "none",
                boxShadow: "0 1px 3px #101a2d22",
              }}
              placeholder="Enter section heading"
              required
            />
          </div>
          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold" style={{ color: "#5186c9" }}>
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
              placeholder="Enter team member's description"
              required
            />
          </div>
          {/* Image Upload */}
          <div>
            <label className="block mb-2 font-semibold" style={{ color: "#5186c9" }}>
              Profile Image
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
                  alt="Team Member"
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

export default TeamMemberUpdate;