import React, { useState, useEffect } from "react";
import Submit from "../../../components/Buttons/Submit";
import Update from "../../../components/Buttons/Update";
import SubmitData from "../../../components/Popup/SubmitData";
import UpdateData from "../../../components/Popup/UpdateData";
import axios from "axios";
import BE_URL from "../../../config";

const ContactDataDetails = () => {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [Link, setLink] = useState("");
  const [id, setId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch existing data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BE_URL}/contact-data-details`);
        if (res.data.status === "success" && res.data.data.length > 0) {
          const data = res.data.data[0];
          setAddress(data.address || "");
          setEmail(data.email || "");
          setNumber(data.number || "");
          setLink(data.Link || "");
          setId(data.id);
        }
      } catch (err) {
        console.error("Error fetching contact data details:", err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address.trim() || !email.trim() || !number.trim() || !Link.trim()) {
      console.log("Validation failed: All fields are required");
      return;
    }

    try {
      if (id) {
        // Update existing
        const res = await axios.put(`${BE_URL}/contact-data-details/${id}`, {
          address,
          email,
          number,
          Link,
        });
        if (res.data.status === "success") {
          setUpdate(true);
        } else {
          alert("Something went wrong while updating.");
        }
      } else {
        // Insert new
        const res = await axios.post(`${BE_URL}/contact-data-details`, {
          address,
          email,
          number,
          Link,
        });
        if (res.data.status === "success") {
          setSuccess(true);
          setId(res.data.data.insertId);
        } else {
          alert("Something went wrong while saving.");
        }
      }
    } catch (err) {
      console.error("Error saving/updating contact data details:", err);
      alert("Failed to save/update contact data details.");
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (update) {
      const timer = setTimeout(() => {
        setUpdate(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [update]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-16">
        <div className="text-blue-400 text-lg font-bold"></div>
      </div>
    );
  }

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
          {id ? "Update Contact Data Details" : "Add Contact Data Details"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Address Field */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
                outline: "none",
                boxShadow: "0 1px 3px #ffffff",
              }}
              placeholder="Enter address"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
                outline: "none",
                boxShadow: "0 1px 3px #ffffff",
              }}
              placeholder="Enter email"
              required
            />
          </div>

          {/* Number Field */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Number
            </label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
                outline: "none",
                boxShadow: "0 1px 3px #ffffff",
              }}
              placeholder="Enter number"
              required
            />
          </div>

          {/* Link Field */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Link
            </label>
            <input
              type="text"
              value={Link}
              onChange={(e) => setLink(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
                outline: "none",
                boxShadow: "0 1px 3px #ffffff",
              }}
              placeholder="Enter link"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-2">
            {id ? (
              <Update type="submit">Update</Update>
            ) : (
              <Submit type="submit">Submit</Submit>
            )}
          </div>
        </form>
      </div>
      {/* Popups */}
      {success && <SubmitData />}
      {update && <UpdateData />}
    </div>
  );
};

export default ContactDataDetails;
