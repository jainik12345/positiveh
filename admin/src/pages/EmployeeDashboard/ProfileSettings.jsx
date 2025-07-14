import React, { useState } from "react";
import axios from "axios";
import BE_URL from "../../config";
import UpdateData from "../../components/Popup/UpdateData";

const ProfileSettings = ({ employee, hotelName }) => {
  const [form, setForm] = useState({
    name: employee.name,
    email_id: employee.email_id,
    address: employee.address,
    image: null,
    existingImage: employee.image,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email_id", form.email_id);
    formData.append("address", form.address);
    formData.append("hotel_id", employee.hotel_id);
    formData.append("designation", employee.designation);
    formData.append("status", employee.status);
    formData.append("existingImage", form.existingImage);
    if (form.image) formData.append("image", form.image);

    try {
      await axios.put(`${BE_URL}/employeeDataName/${employee.id}`, formData);
      setShowPopup(true);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const handleCancel = () => {
    setForm({
      name: employee.name,
      email_id: employee.email_id,
      address: employee.address,
      image: null,
      existingImage: employee.image,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-[#1d1f23] text-white p-6 rounded-xl shadow-lg relative">
      {/* Top Info */}
      <div className="flex justify-between items-start flex-col md:flex-row md:items-center md:gap-6 mb-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{employee.name}</h2>
          <p className="text-gray-400">{employee.designation}</p>
          <p className="text-sm text-gray-500">{hotelName}</p>
        </div>

        <div className="relative mt-4 md:mt-0">
          <img
            src={
              form.image
                ? URL.createObjectURL(form.image)
                : `${BE_URL}/Images/EmployeeDataImages/EmployeeDataName/${form.existingImage}`
            }
            alt="profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-[#1746ff]"
          />
          {isEditing && (
            <>
              <input
                type="file"
                onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                className="absolute bottom-0 right-0 w-8 h-8 opacity-0 cursor-pointer"
              />
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-[#1746ff] rounded-full flex items-center justify-center text-black text-sm pointer-events-none">
                📷
              </span>
            </>
          )}
        </div>
      </div>

      {/* Form Data View/Edit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field
          label="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          readOnly={!isEditing}
        />
        <Field
          label="Email"
          value={form.email_id}
          onChange={(e) => setForm({ ...form, email_id: e.target.value })}
          readOnly={!isEditing}
        />
        <div className="md:col-span-2">
          <Field
            label="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            textarea
            readOnly={!isEditing}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-4">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-[#1746ff] cursor-pointer text-white px-5 py-3 rounded-full  shadow"
          >
            ✏️ Edit Profile
          </button>
        ) : (
          <>
            <button
              onClick={handleCancel}
              className="border border-[#1746ff] cursor-pointer text-[#1746ff] px-6 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-white text-[#1746ff] cursor-pointer px-6 py-2 rounded shadow"
            >
              💾 Update Change
            </button>
          </>
        )}
      </div>

      {/* Popup */}
      {showPopup && <UpdateData />}
    </div>
  );
};

// Reusable Field Component
const Field = ({
  label,
  value,
  onChange,
  textarea = false,
  readOnly = false,
}) => (
  <div>
    <label className="text-sm text-gray-400 mb-1 block">{label}</label>
    {textarea ? (
      <textarea
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        rows={3}
        className={`bg-[#2a2e35] text-white border border-[#444] rounded w-full px-3 py-2 ${
          readOnly ? "opacity-60 cursor-not-allowed" : ""
        }`}
      />
    ) : (
      <input
        type="text"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`bg-[#2a2e35] text-white border border-[#444] rounded w-full px-3 py-2 ${
          readOnly ? "opacity-60 cursor-not-allowed" : ""
        }`}
      />
    )}
  </div>
);

export default ProfileSettings;
