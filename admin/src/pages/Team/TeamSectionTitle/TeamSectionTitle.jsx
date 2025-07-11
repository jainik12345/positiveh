import React, { useState, useEffect } from "react";
import Submit from "../../../components/Buttons/Submit";
import Update from "../../../components/Buttons/Update";
import SubmitData from "../../../components/Popup/SubmitData";
import UpdateData from "../../../components/Popup/UpdateData";
import axios from "axios";
import BE_URL from "../../../config";

const TeamSectionTitle = () => {
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch existing data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BE_URL}/team-section-title`);
        if (res.data.status === "success" && res.data.data.length > 0) {
          const data = res.data.data[0];
          setTitle(data.title || "");
          setHeading(data.heading || "");
          setDescription(data.description || "");
          setId(data.id);
        }
      } catch (err) {
        console.error("Error fetching team section title:", err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !heading.trim() || !description.trim()) {
      console.log(
        "Validation failed: Title, Heading, and Description are required"
      );
      return;
    }

    try {
      if (id) {
        // Update existing
        const res = await axios.put(`${BE_URL}/team-section-title/${id}`, {
          title,
          heading,
          description,
        });
        if (res.data.status === "success") {
          setUpdate(true);
        } else {
          alert("Something went wrong while updating.");
        }
      } else {
        // Insert new
        const res = await axios.post(`${BE_URL}/team-section-title`, {
          title,
          heading,
          description,
        });
        if (res.data.status === "success") {
          setSuccess(true);
          setId(res.data.data.insertId);
        } else {
          alert("Something went wrong while saving.");
        }
      }
    } catch (err) {
      console.error("Error saving/updating team section title:", err);
      alert("Failed to save/update team section title.");
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
        <div className="text-blue-400 text-lg font-bold">Loading...</div>
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
          {id ? "Update Team Section Title" : "Add Team Section Title"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Description Field */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={8}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#e3eafc",
                outline: "none",
                boxShadow: "0 1px 3px #ffffff",
                resize: "vertical",
              }}
              placeholder="Enter section description"
              required
            />
          </div>

          {/* Heading Field */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
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
                boxShadow: "0 1px 3px #ffffff",
              }}
              placeholder="Enter section heading"
              required
            />
          </div>

          {/* Title Field */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
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
                boxShadow: "0 1px 3px #ffffff",
              }}
              placeholder="Enter section title"
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

export default TeamSectionTitle;
