/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BE_URL from "../../config";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [verifying, setVerifying] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("Text").slice(0, 6);
    if (/^\d{6}$/.test(pasteData)) {
      const pasteOtp = pasteData.split("");
      setOtp(pasteOtp);
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      setVerifying(true);
      try {
        const response = await axios.post(`${BE_URL}/admin/verify-otp`, {
          email: "sanatanidharma586@gmail.com",
          otp: otpValue,
        });
        if (response.data.message === "OTP verified successfully") {
          setShowSnackbar(true);
          setTimeout(() => {
            navigate("/reset-password", {
              state: { email: "admin@example.com" },
            });
          }, 2000);
        } else {
          setError("Invalid OTP. Please try again.");
        }
      } catch (error) {
        setError("Error verifying OTP. Please try again.");
      } finally {
        setVerifying(false);
      }
    } else {
      setError("Please enter a 6-digit OTP");
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
        // background: "#fff7ed",
        background: "#F6CD7C",

        fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
      }}
    >
      <AnimatePresence>
        {showSnackbar && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1300,
            }}
          >
            <Snackbar
              open={showSnackbar}
              autoHideDuration={2000}
              onClose={() => setShowSnackbar(false)}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                severity="success"
                variant="filled"
                sx={{
                  whiteSpace: "nowrap",
                  fontWeight: 600,
                  background: "linear-gradient(90deg,#ff9800 10%,#ffd580 90%)",
                  color: "#fff",
                  borderRadius: "9px",
                  letterSpacing: 0.5,
                }}
              >
                OTP Verified! Proceeding to Reset Password
              </Alert>
            </Snackbar>
          </motion.div>
        )}
      </AnimatePresence>

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
            boxShadow:
              "0 4px 32px 0 rgba(255,152,0,0.08), 0 1.5px 8px 0 #ff98001a",
            background: "#fff",
            textAlign: "center",
            border: "2.5px solid #ff980033",
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
              background: "linear-gradient(135deg,#ff9800 10%,#ffd580 100%)",
              borderRadius: "50%",
              boxShadow: "0 2px 12px #ff980033",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 30,
              fontWeight: 800,
              zIndex: 1,
              border: "3px solid #fff",
              mb: 2,
            }}
          >
            <span role="img" aria-label="shield">
              🛡️
            </span>
          </Box>
          <Typography
            variant="h5"
            sx={{
              mt: 3.5,
              mb: 3,
              fontWeight: 700,
              color: "#33240d",
              fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
              letterSpacing: 0.2,
            }}
          >
            Verify OTP
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 3.5,
              userSelect: "none",
            }}
            onPaste={handlePaste}
          >
            {otp.map((digit, index) => (
              <TextField
                key={index}
                inputRef={(el) => (inputRefs.current[index] = el)}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                variant="outlined"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    textAlign: "center",
                    fontSize: "2rem",
                    background: "#fff7ed",
                    borderRadius: "14px",
                    width: "3.2rem",
                    height: "3.2rem",
                    boxShadow: digit
                      ? "0 0 0 2.5px #ffb347"
                      : "0 0 0 1px #ff980044",
                    border: digit
                      ? "2.5px solid #ffb347"
                      : "1px solid #ff980044",
                    transition: "all 0.2s cubic-bezier(.4,2,.2,1)",
                    outline: "none",
                    "&:focus-within": {
                      border: "2.5px solid #ff9800",
                      boxShadow: "0 0 10px 2px #ff9800, 0 0 0 2.5px #ffd580",
                      background: "#fff3e0",
                    },
                  },
                }}
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: "center",
                    fontSize: "2rem",
                    letterSpacing: "0.1em",
                  },
                  pattern: "[0-9]*",
                  inputMode: "numeric",
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    padding: 0,
                  },
                  "& .MuiInputBase-input": {
                    textAlign: "center",
                    color: "#33240d",
                  },
                }}
              />
            ))}
          </Box>

          {error && (
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                color: "#fc6471",
                fontWeight: 500,
                letterSpacing: 0.6,
              }}
            >
              {error}
            </Typography>
          )}

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handleVerify}
              disabled={verifying}
              sx={{
                px: 4,
                py: 1.2,
                mr: 8,
                mt: 3,
                fontWeight: 600,
                borderRadius: 2.5,
                background: "linear-gradient(90deg, #ff9800 10%, #ffd580 90%)",
                boxShadow: "0 2px 8px 0 #ff980035",
                textTransform: "none",
                fontSize: "1rem",
                letterSpacing: 0.5,
                color: "#fff",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #e67c00 10%, #ffb347 90%)",
                },
              }}
            >
              {verifying ? "Verifying..." : "VERIFY OTP"}
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default VerifyOTP;
