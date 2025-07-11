// /* eslint-disable no-unused-vars */

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Paper,
//   TextField,
//   Typography,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import BE_URL from "../../config";

// const ResetPassword = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     if (!password || !confirmPassword) {
//       setErrorMessage("Please fill in both password fields.");
//       setOpenSnackbar(true);
//       setSuccess(false);
//       return;
//     }
//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       setOpenSnackbar(true);
//       setSuccess(false);
//       return;
//     }
//     try {
//       const response = await axios.post(`${BE_URL}/admin/reset-password`, {
//         newPassword: password,
//       });
//       setErrorMessage(response.data.message);
//       setSuccess(true);
//       setOpenSnackbar(true);
//       setTimeout(() => {
//         navigate("/admin");
//       }, 2000);
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.message || "Error updating password"
//       );
//       setSuccess(false);
//       setOpenSnackbar(true);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         minWidth: "100vw",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
//         backgroundBlendMode: "screen",
//         fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
//       }}
//     >
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={() => setOpenSnackbar(false)}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert
//           onClose={() => setOpenSnackbar(false)}
//           severity={success ? "success" : "error"}
//           sx={{
//             width: "100%",
//             fontWeight: 600,
//             background: success
//               ? "linear-gradient(90deg,#192e4d 10%,#5186c9 90%)"
//               : "linear-gradient(90deg,#fc6471 10%,#3b6ea5 90%)",
//             color: "#fff",
//             borderRadius: "9px",
//             letterSpacing: 0.5,
//           }}
//         >
//           {errorMessage}
//         </Alert>
//       </Snackbar>

//       <motion.div
//         initial={{ opacity: 0, y: -24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ type: "spring", stiffness: 90 }}
//       >
//         <Paper
//           elevation={0}
//           sx={{
//             p: 4,
//             width: 600,
//             borderRadius: 4,
//             boxShadow: "0 4px 32px #0a183d44, 0 0 0 2px #1565c033",
//             background: "rgba(12, 14, 22, 0.98)",
//             textAlign: "center",
//             border: "1.5px solid #101a2d",
//             position: "relative",
//           }}
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               top: -28,
//               left: "50%",
//               transform: "translateX(-50%)",
//               width: 56,
//               height: 56,
//               background: "linear-gradient(135deg,#192e4d 10%,#5186c9 100%)",
//               borderRadius: "50%",
//               boxShadow: "0 2px 12px #192e4d44",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               color: "#fff",
//               fontSize: 30,
//               fontWeight: 800,
//               zIndex: 1,
//               border: "3px solid #181a24",
//               mb: 2,
//             }}
//           >
//             <span role="img" aria-label="lock">
//               🔒
//             </span>
//           </Box>
//           <Typography
//             variant="h5"
//             sx={{
//               mt: 3.5,
//               mb: 3,
//               fontWeight: 700,
//               color: "#5186c9",
//               fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
//               letterSpacing: 0.2,
//             }}
//           >
//             Reset Password
//           </Typography>

//           <TextField
//             fullWidth
//             label="New Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             variant="outlined"
//             margin="normal"
//             sx={{
//               mb: 2,
//               "& .MuiOutlinedInput-root": {
//                 borderRadius: 2,
//                 background: "#181a24",
//                 color: "white",
//               },
//               "& input": {
//                 color: "white",
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#5186c9",
//                 fontWeight: 500,
//               },
//               "& .MuiOutlinedInput-notchedOutline": {
//                 borderColor: "#192e4d",
//               },
//               "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
//                 borderColor: "#5186c9",
//               },
//             }}
//           />

//           <TextField
//             fullWidth
//             label="Confirm Password"
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             variant="outlined"
//             margin="normal"
//             sx={{
//               mb: 1,
//               "& .MuiOutlinedInput-root": {
//                 borderRadius: 2,
//                 background: "#181a24",
//                 color: "white",
//               },
//               "& input": {
//                 color: "white",
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#5186c9",
//                 fontWeight: 500,
//               },
//               "& .MuiOutlinedInput-notchedOutline": {
//                 borderColor: "#192e4d",
//               },
//               "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
//                 borderColor: "#5186c9",
//               },
//             }}
//           />

//           <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
//             <Button
//               variant="contained"
//               onClick={handleSubmit}
//               sx={{
//                 px: 4,
//                 py: 1.2,
//                 fontWeight: 600,
//                 borderRadius: 2.5,
//                 background: "linear-gradient(90deg, #192e4d 10%, #5186c9 90%)",
//                 boxShadow: "0 2px 8px 0 #192e4d55",
//                 textTransform: "none",
//                 fontSize: "1rem",
//                 letterSpacing: 0.5,
//                 color: "#fff",
//                 "&:hover": {
//                   background:
//                     "linear-gradient(90deg, #101a2d 10%, #3b6ea5 90%)",
//                 },
//               }}
//             >
//               Submit
//             </Button>
//           </Box>
//         </Paper>
//       </motion.div>
//     </Box>
//   );
// };

// export default ResetPassword;

/* */

/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import BE_URL from "../../config";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleSubmit = async () => {
    setErrorMessage("");
    setSuccess(false);

    if (!password || !confirmPassword) {
      setErrorMessage("Please fill in both password fields.");
      setOpenSnackbar(true);
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setOpenSnackbar(true);
      return;
    }
    if (!email) {
      setErrorMessage("Missing email. Try again from Forgot Password.");
      setOpenSnackbar(true);
      return;
    }

    // Try admin reset first
    let updated = false;
    let apiErrorMsg = "";
    try {
      const response = await axios.post(`${BE_URL}/admin/reset-password`, {
        newPassword: password,
        email,
      });
      if (response.data.message === "Password updated successfully") {
        updated = true;
        setErrorMessage(response.data.message);
      } else {
        apiErrorMsg = response.data.message;
      }
    } catch (error) {
      apiErrorMsg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Error updating password";
    }
 
    if (!updated) {
      try {
        const response = await axios.post(
          `${BE_URL}/employeeDataName/reset-password`,
          {
            newPassword: password,
            email,
          }
        );
        if (response.data.message === "Password reset successfully") {
          updated = true;
          setErrorMessage(response.data.message);
        } else {
          apiErrorMsg = response.data.message;
        }
      } catch (error) {
        apiErrorMsg =
          error.response?.data?.message ||
          error.response?.data?.error ||
          apiErrorMsg;
      }
    }

    setOpenSnackbar(true);

    if (updated) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/admin"); 
      }, 2000);
    } else {
      setSuccess(false);
      setErrorMessage(apiErrorMsg || "Error updating password.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
        backgroundBlendMode: "screen",
        fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
      }}
    >
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={success ? "success" : "error"}
          sx={{
            width: "100%",
            fontWeight: 600,
            background: success
              ? "linear-gradient(90deg,#192e4d 10%,#5186c9 90%)"
              : "linear-gradient(90deg,#fc6471 10%,#3b6ea5 90%)",
            color: "#fff",
            borderRadius: "9px",
            letterSpacing: 0.5,
          }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>

      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 90 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            width: 600,
            borderRadius: 4,
            boxShadow: "0 4px 32px #0a183d44, 0 0 0 2px #1565c033",
            background: "rgba(12, 14, 22, 0.98)",
            textAlign: "center",
            border: "1.5px solid #101a2d",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -28,
              left: "50%",
              transform: "translateX(-50%)",
              width: 56,
              height: 56,
              background: "linear-gradient(135deg,#192e4d 10%,#5186c9 100%)",
              borderRadius: "50%",
              boxShadow: "0 2px 12px #192e4d44",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 30,
              fontWeight: 800,
              zIndex: 1,
              border: "3px solid #181a24",
              mb: 2,
            }}
          >
            <span role="img" aria-label="lock">
              🔒
            </span>
          </Box>
          <Typography
            variant="h5"
            sx={{
              mt: 3.5,
              mb: 3,
              fontWeight: 700,
              color: "#5186c9",
              fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
              letterSpacing: 0.2,
            }}
          >
            Reset Password
          </Typography>

          <TextField
            fullWidth
            label="New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                background: "#181a24",
                color: "white",
              },
              "& input": {
                color: "white",
              },
              "& .MuiInputLabel-root": {
                color: "#5186c9",
                fontWeight: 500,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#192e4d",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5186c9",
              },
            }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            sx={{
              mb: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                background: "#181a24",
                color: "white",
              },
              "& input": {
                color: "white",
              },
              "& .MuiInputLabel-root": {
                color: "#5186c9",
                fontWeight: 500,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#192e4d",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5186c9",
              },
            }}
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                px: 4,
                py: 1.2,
                fontWeight: 600,
                borderRadius: 2.5,
                background: "linear-gradient(90deg, #192e4d 10%, #5186c9 90%)",
                boxShadow: "0 2px 8px 0 #192e4d55",
                textTransform: "none",
                fontSize: "1rem",
                letterSpacing: 0.5,
                color: "#fff",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #101a2d 10%, #3b6ea5 90%)",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ResetPassword;
