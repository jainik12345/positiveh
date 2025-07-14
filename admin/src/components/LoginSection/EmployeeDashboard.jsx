import React, { useEffect, useState } from "react";
import axios from "axios";
import BE_URL from "./../../config";

const EmployeeDashboard = () => {
  const [employee, setEmployee] = useState(null);
  const [hotelName, setHotelName] = useState("");
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email_id: "",
    address: "",
    image: null,
    existingImage: "",
  });

  const employeeId = localStorage.getItem("employeeId");

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(
          `${BE_URL}/employeeDataName/data/${employeeId}`
        );
        const emp = res.data?.data?.[0];
        if (!emp) throw new Error("Not found");
        setEmployee(emp);
        setForm({
          name: emp.name,
          email_id: emp.email_id,
          address: emp.address,
          existingImage: emp.image,
          image: null,
        });

        const hotelRes = await axios.get(`${BE_URL}/hotelName/${emp.hotel_id}`);
        setHotelName(hotelRes.data?.data?.name || "Unknown Hotel");
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (employeeId) fetchEmployee();
  }, [employeeId]);

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
      window.location.reload(); // reload for fresh fetch
    } catch (err) {
      console.error("Error updating:", err);
    }
  };

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center text-black">
        Loading...
      </div>
    );

  return (
    <>
      <div className="w-full">
        <div className="min-h-screen   bg-gray-50">
          {/* Header */}

          <div className="w-full bg-black">
            <header className="bg-black max-w-screen-xl mx-auto my-0  text-blue-300 px-6 py-4 flex justify-between items-center shadow">
              <h1 className="text-2xl font-bold">Employee Portal</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img
                    src={
                      employee.image?.startsWith("http")
                        ? employee.image
                        : `${BE_URL}/Images/EmployeeDataImages/EmployeeDataName/${employee.image}`
                    }
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover border-2 border-blue-300"
                  />
                  <span className="font-medium text-blue-300">
                    {employee.name}
                  </span>
                </div>
              </div>
            </header>
          </div>

          {/* Main Section */}
          <div className="flex max-w-6xl mx-auto mt-8 px-4 gap-8">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-black mb-4">
                Account Settings
              </h2>
              <ul className="space-y-3">
                <li className="text-black font-medium border-l-4 border-blue-300 pl-2">
                  ➤ Profile Settings
                </li>
              </ul>
            </aside>

            {/* Profile View */}
            <section className="flex-1 bg-white shadow rounded-lg p-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="relative">
                  <img
                    src={
                      form.image
                        ? URL.createObjectURL(form.image)
                        : `${BE_URL}/Images/EmployeeDataImages/EmployeeDataName/${form.existingImage}`
                    }
                    alt="profile"
                    className="w-28 h-28 rounded-full object-cover border-4 border-blue-300"
                  />
                  <input
                    type="file"
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.files[0] })
                    }
                    className="absolute bottom-0 right-0 w-8 h-8 bg-blue-300 text-white text-xs rounded-full cursor-pointer opacity-0"
                    title="Upload"
                  />
                  <span className="absolute bottom-0 right-0 w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center text-white pointer-events-none">
                    📷
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black">
                    {employee.name}
                  </h2>
                  <p className="text-yellow-700">{employee.designation}</p>
                  <p className="text-sm text-gray-500">{hotelName}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  icon="👤"
                />
                <Field
                  label="Email"
                  value={form.email_id}
                  onChange={(e) =>
                    setForm({ ...form, email_id: e.target.value })
                  }
                  icon="✉️"
                />
                <div className="md:col-span-2">
                  <Field
                    label="Address"
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    icon="📍"
                    textarea
                  />
                </div>
              </div>

              <div className="mt-6 text-right">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-2 bg-blue-300 cursor-pointer text-black font-medium rounded hover:bg-blue-300"
                  >
                    ✏️ Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-5 py-2 border border-blue-300 text-yellow-700 rounded mr-3"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-6 py-2 bg-black text-blue-300 font-medium rounded hover:bg-gray-800"
                    >
                      💾 Save Changes
                    </button>
                  </>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

const Field = ({ label, value, onChange, icon, textarea = false }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <span className="absolute left-3 top-3 text-gray-400">{icon}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
          rows={3}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
        />
      )}
    </div>
  </div>
);

export default EmployeeDashboard;
