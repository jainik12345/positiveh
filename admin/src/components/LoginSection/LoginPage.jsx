/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  Link,
  Paper,
} from "@mui/material";
import { MdEmail, MdLock } from "react-icons/md";
import { motion } from "framer-motion";
import axios from "axios";
import BE_URL from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required";
      hasError = true;
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
      hasError = true;
    }

    setErrors(newErrors);
    if (!hasError) {
      try {
        const res = await axios.post(`${BE_URL}/admin/login`, {
          email,
          password,
        });

        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Welcome to Positive H.!",
          });

          navigate("/home-image");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error?.response?.data?.message || "Something went wrong",
        });
      }
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "#F6CD7C",
        overflow: "hidden",
        fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
      }}
    >
      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          width: "100%",
          maxWidth: "1080px",
          padding: 2,
        }}
      >
        {/* Left Side - Welcome Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ff9800",
            fontSize: "2.8rem",
            fontWeight: "bold",
            textShadow: "2px 2px 12px white",
            letterSpacing: 1,
            fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
          }}
        >
          Welcome Back!
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ flex: 1 }}
        >
          <Container maxWidth="xl">
            <Paper
              elevation={0}
              sx={{
                padding: 4,
                width: 440,
                borderRadius: "12px",
                background: "#fff",
                boxShadow:
                  "0 4px 32px 0 rgba(255,152,0,0.10), 0 1.5px 8px 0 #ff98001a",
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
                  background:
                    "linear-gradient(135deg,#ff9800 10%,#ffd580 100%)",
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
                <span role="img" aria-label="login">
                  🔑
                </span>
              </Box>
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "#33240d",
                  mt: 3.5,
                  letterSpacing: 0.2,
                  fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
                }}
              >
                Positive H. Admin Panel
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3, color: "#ad6e1d", fontWeight: 500 }}
              >
                Sign in to start your session
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MdEmail size={25} color="#ff9800" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      background: "#fff7ed",
                    },
                    "& .MuiInputLabel-root": {
                      color: "#ff9800",
                      fontWeight: 500,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff980044",
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff9800",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MdLock size={25} color="#ff9800" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mb: 1,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      background: "#fff7ed",
                    },
                    "& .MuiInputLabel-root": {
                      color: "#ff9800",
                      fontWeight: 500,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff980044",
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff9800",
                    },
                  }}
                />

                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}
                >
                  <Link
                    href="/forgot-password"
                    underline="hover"
                    sx={{
                      color: "#ff9800",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Forgot password?
                  </Link>
                </Box>

                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      background:
                        "linear-gradient(90deg, #ff9800 10%, #ffd580 90%)",
                      color: "#fff",
                      borderRadius: "30px",
                      boxShadow: "0 2px 10px 0 #ff980033",
                      fontSize: "1rem",
                      letterSpacing: 0.5,
                      textTransform: "none",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #e67c00 10%, #ffb347 90%)",
                        boxShadow: "0 6px 25px #ff980033",
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
              </form>
            </Paper>
          </Container>
        </motion.div>
      </Box>
    </Box>
  );
};

export default LoginPage;
