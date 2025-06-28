// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Paper,
//   TextField,
//   Typography,
//   InputAdornment,
//   Snackbar,
//   Alert,
//   CircularProgress,
// } from "@mui/material";
// import { MdEmail } from "react-icons/md";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import BE_URL from "./../../config";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [showSnackbar, setShowSnackbar] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${BE_URL}/admin`)
//       .then((res) => {
//         if (res.data.data.length > 0) {
//           setEmail(res.data.data[0].admin_email_id);
//         }
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   const handleSendOtp = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (!email.trim()) {
//       setError("Email is required");
//       return;
//     }
//     try {
//       setLoading(true);
//       await axios.post(`${BE_URL}/admin/send-otp`, { email });
//       setLoading(false);
//       setShowSnackbar(true);
//       setTimeout(() => {
//         navigate("/verify-otp", { state: { email } });
//       }, 2000);
//     } catch (err) {
//       setLoading(false);
//       setError("Failed to send OTP.");
//       console.error(err);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "#F6CD7C",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         style={{ width: "100%", maxWidth: 440, zIndex: 2 }}
//       >
//         <Paper
//           elevation={0}
//           sx={{
//             p: 4,
//             width: 440,
//             borderRadius: 4,
//             background: "#fff",
//             boxShadow:
//               "0 4px 32px 0 rgba(255,152,0,0.10), 0 1.5px 8px 0 #ff98001a",
//             border: "2.5px solid #ff980033",
//             textAlign: "center",
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
//               background: "linear-gradient(135deg,#ff9800 10%,#ffd580 100%)",
//               borderRadius: "50%",
//               boxShadow: "0 2px 12px #ff980033",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               color: "#fff",
//               fontSize: 30,
//               fontWeight: 800,
//               zIndex: 1,
//               border: "3px solid #fff",
//               mb: 2,
//             }}
//           >
//             <span role="img" aria-label="mail">
//               📧
//             </span>
//           </Box>
//           <Typography
//             variant="h5"
//             align="center"
//             gutterBottom
//             sx={{
//               fontWeight: "bold",
//               mb: 2,
//               color: "#33240d",
//               mt: 3.5,
//               letterSpacing: 0.2,
//               fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
//             }}
//           >
//             Forgot Password
//           </Typography>
//           <Typography
//             variant="body2"
//             align="center"
//             sx={{ mb: 3, color: "#ad6e1d", fontWeight: 500 }}
//           >
//             Enter your email to receive an OTP
//           </Typography>

//           <form onSubmit={handleSendOtp}>
//             <TextField
//               fullWidth
//               label="Email"
//               variant="outlined"
//               value={email}
//               disabled
//               error={!!error}
//               helperText={error}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <MdEmail size={25} color="#ff9800" />
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{
//                 mb: 2,
//                 "& .MuiOutlinedInput-root": {
//                   borderRadius: 2,
//                   background: "#fff7ed",
//                 },
//                 "& .MuiInputLabel-root": {
//                   color: "#ff9800",
//                   fontWeight: 500,
//                 },
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ff980044",
//                 },
//                 "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ff9800",
//                 },
//               }}
//             />

//             <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 disabled={loading}
//                 sx={{
//                   px: 4,
//                   py: 1.2,
//                   fontWeight: 600,
//                   borderRadius: 2.5,
//                   background:
//                     "linear-gradient(90deg, #ff9800 10%, #ffd580 90%)",
//                   boxShadow: "0 2px 8px 0 #ff980035",
//                   textTransform: "none",
//                   fontSize: "1rem",
//                   letterSpacing: 0.5,
//                   color: "#fff",
//                   "&:hover": {
//                     background:
//                       "linear-gradient(90deg, #e67c00 10%, #ffb347 90%)",
//                   },
//                 }}
//               >
//                 {loading ? (
//                   <>
//                     <CircularProgress size={20} sx={{ color: "#fff", mr: 1 }} />
//                     Sending...
//                   </>
//                 ) : (
//                   "Send OTP"
//                 )}
//               </Button>
//             </Box>
//           </form>
//         </Paper>
//       </motion.div>

//       {/* Snackbar Success Message */}
//       <AnimatePresence>
//         {showSnackbar && (
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 10 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.6 }}
//             style={{
//               position: "fixed",
//               top: "10px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               zIndex: 99,
//             }}
//           >
//             <Snackbar
//               open={showSnackbar}
//               anchorOrigin={{ vertical: "top", horizontal: "center" }}
//               autoHideDuration={2000}
//               onClose={() => setShowSnackbar(false)}
//             >
//               <Alert
//                 severity="success"
//                 variant="filled"
//                 sx={{
//                   width: "100%",
//                   whiteSpace: "nowrap",
//                   background: "linear-gradient(90deg,#ff9800 10%,#ffd580 90%)",
//                   color: "#fff",
//                   borderRadius: "9px",
//                   fontWeight: 600,
//                   letterSpacing: 0.5,
//                 }}
//               >
//                 OTP Sent Successfully!
//               </Alert>
//             </Snackbar>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Box>
//   );
// };

// export default ForgotPassword;

//test 2

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { MdEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BE_URL from "./../../config";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BE_URL}/admin`)
      .then((res) => {
        if (res.data.data.length > 0) {
          setEmail(res.data.data[0].admin_email_id);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    try {
      setLoading(true);
      await axios.post(`${BE_URL}/admin/send-otp`, { email });
      setLoading(false);
      setShowSnackbar(true);
      setTimeout(() => {
        navigate("/verify-otp", { state: { email } });
      }, 2000);
    } catch (err) {
      setLoading(false);
      setError("Failed to send OTP.");
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%", maxWidth: 440, zIndex: 2 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            width: 440,
            borderRadius: 4,
            background: "rgba(12, 14, 22, 0.98)",
            boxShadow: "0 4px 32px #0a183d44, 0 0 0 2px #1565c033",
            border: "1.5px solid #101a2d",
            textAlign: "center",
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
            <span role="img" aria-label="mail">
              📧
            </span>
          </Box>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#5186c9",
              mt: 3.5,
              letterSpacing: 0.2,
              fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
            }}
          >
            Forgot Password
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ mb: 3, color: "white", fontWeight: 500 }}
          >
            Enter your email to receive an OTP
          </Typography>

          <form onSubmit={handleSendOtp}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              error={!!error}
              helperText={error}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MdEmail size={23} color="#5186c9" />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  background: "#181a24",
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
                },
                "& .MuiFormHelperText-root": {
                  color: "#e53935",
                },
              }}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  borderRadius: 2.5,
                  background:
                    "linear-gradient(90deg, #192e4d 10%, #5186c9 90%)",
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
                {loading ? (
                  <>
                    <CircularProgress size={20} sx={{ color: "#fff", mr: 1 }} />
                    Sending...
                  </>
                ) : (
                  "Send OTP"
                )}
              </Button>
            </Box>
          </form>
        </Paper>
      </motion.div>

      {/* Snackbar Success Message */}
      <AnimatePresence>
        {showSnackbar && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "fixed",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 99,
            }}
          >
            <Snackbar
              open={showSnackbar}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              autoHideDuration={2000}
              onClose={() => setShowSnackbar(false)}
            >
              <Alert
                severity="success"
                variant="filled"
                sx={{
                  width: "100%",
                  whiteSpace: "nowrap",
                  background: "linear-gradient(90deg,#192e4d 10%,#5186c9 90%)",
                  color: "#fff",
                  borderRadius: "9px",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                }}
              >
                OTP Sent Successfully!
              </Alert>
            </Snackbar>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ForgotPassword;
