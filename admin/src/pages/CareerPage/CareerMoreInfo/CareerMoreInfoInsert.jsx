// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Submit from "../../../components/Buttons/Submit";
// import Cancel from "../../../components/Buttons/Cancel";
// import SubmitData from "../../../components/Popup/SubmitData";
// import BE_URL from "../../../config";
// import axios from "axios";

// const CareerMoreInfoInsert = () => {
//   const navigate = useNavigate();
//   const [image, setImage] = useState(null);
//   const [heading, setHeading] = useState("");
//   const [description, setDescription] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (success) {
//       const timer = setTimeout(() => {
//         setSuccess(false);
//       }, 2500);
//       return () => clearTimeout(timer);
//     }
//   }, [success]);

//   const handleImageChange = (e) => {
//     setError(null);
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!image || !heading.trim() || !description.trim()) {
//       setError("Image, heading, and description are required.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", image);
//     formData.append("heading", heading);
//     formData.append("description", description);

//     try {
//       const response = await axios.post(`${BE_URL}/careerMoreInfo`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (response.data.status === "success") {
//         setSuccess(true);
//         setError(null);
//         setImage(null);
//         setHeading("");
//         setDescription("");
//         const fileInput = document.querySelector('input[type="file"]');
//         if (fileInput) fileInput.value = "";
//       } else {
//         setError("Failed to add career info");
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || "Something went wrong");
//     }
//   };

//   const handleCancel = () => {
//     navigate("/career-more-info");
//   };

//   return (
//     <div
//       className="w-full flex items-center justify-center px-2 py-8"
//       style={{
//         background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
//       }}
//     >
//       <div
//         className="w-full max-w-screen-xl mx-auto rounded-2xl p-8"
//         style={{
//           background: "rgba(12, 14, 22, 0.98)",
//           boxShadow: "0 4px 32px #0a183d44, 0 0 0 2px #1565c033",
//           border: "1.5px solid #101a2d",
//         }}
//       >
//         <h2
//           className="text-xl font-bold mb-10 px-0 py-2 w-full text-left"
//           style={{
//             color: "#5186c9",
//             borderBottom: "1.5px solid #192e4d",
//             paddingBottom: "0.75rem",
//             marginBottom: "2.5rem",
//             letterSpacing: "0.04em",
//           }}
//         >
//           Add Career More Info
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Image Upload */}
//           <div>
//             <label
//               className="block mb-2 font-semibold"
//               style={{ color: "#5186c9" }}
//             >
//               Image
//             </label>
//             <input
//               type="file"
//               onChange={handleImageChange}
//               accept="image/*"
//               className="rounded-md p-2 w-full cursor-pointer"
//               style={{
//                 background: "#181a24",
//                 border: "1.5px solid #192e4d",
//                 color: "#b2c7e5",
//               }}
//               required
//             />
//           </div>

//           {/* Heading */}
//           <div>
//             <label
//               className="block mb-2 font-semibold"
//               style={{ color: "#5186c9" }}
//             >
//               Heading
//             </label>
//             <input
//               type="text"
//               value={heading}
//               onChange={(e) => setHeading(e.target.value)}
//               className="rounded-md p-2 w-full"
//               style={{
//                 background: "#181a24",
//                 border: "1.5px solid #192e4d",
//                 color: "#b2c7e5",
//               }}
//               required
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label
//               className="block mb-2 font-semibold"
//               style={{ color: "#5186c9" }}
//             >
//               Description
//             </label>
//             <textarea
//               rows={12}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="rounded-md p-2 w-full"
//               style={{
//                 background: "#181a24",
//                 border: "1.5px solid #192e4d",
//                 color: "#b2c7e5",
//               }}
//               required
//             />
//           </div>

//           {/* Error Message */}
//           {error && <p className="text-red-600 font-semibold">{error}</p>}

//           {/* Buttons */}
//           <div className="flex justify-end gap-4 pt-2">
//             <Submit type="submit" />
//             <Cancel onClick={handleCancel} />
//           </div>
//         </form>
//       </div>

//       {/* Success Popup */}
//       {success && <SubmitData />}
//     </div>
//   );
// };

// export default CareerMoreInfoInsert;

/*  */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Submit from "../../../components/Buttons/Submit";
import Cancel from "../../../components/Buttons/Cancel";
import SubmitData from "../../../components/Popup/SubmitData";
import BE_URL from "../../../config";
import axios from "axios";

const CareerMoreInfoInsert = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleImageChange = (e) => {
    setError(null);
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !image ||
      !heading.trim() ||
      !description.trim() ||
      !quote.trim() ||
      !name.trim()
    ) {
      setError("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("heading", heading);
    formData.append("description", description);
    formData.append("quote", quote);
    formData.append("name", name);

    try {
      const response = await axios.post(`${BE_URL}/careerMoreInfo`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.status === "success") {
        setSuccess(true);
        setError(null);
        setImage(null);
        setHeading("");
        setDescription("");
        setQuote("");
        setName("");
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
      } else {
        setError("Failed to add career info");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  const handleCancel = () => {
    navigate("/career-more-info");
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
          Add Career More Info
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Image Upload */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="rounded-md p-2 w-full cursor-pointer"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
              }}
              required
            />
          </div>

          {/* Heading */}
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
              }}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Description
            </label>
            <textarea
              rows={12}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
              }}
              required
            />
          </div>

          {/* Quote */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
              Quote
            </label>
            <input
              type="text"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className="rounded-md p-2 w-full"
              style={{
                background: "#181a24",
                border: "1.5px solid #192e4d",
                color: "#b2c7e5",
              }}
              required
            />
          </div>

          {/* Name */}
          <div>
            <label
              className="block mb-2 font-semibold"
              style={{ color: "#5186c9" }}
            >
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
              }}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 font-semibold">{error}</p>}

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-2">
            <Submit type="submit" />
            <Cancel onClick={handleCancel} />
          </div>
        </form>
      </div>

      {/* Success Popup */}
      {success && <SubmitData />}
    </div>
  );
};

export default CareerMoreInfoInsert;
