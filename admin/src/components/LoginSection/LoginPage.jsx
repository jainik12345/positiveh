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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
} from "@mui/material";
import { MdEmail, MdLock } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WelcomeDialog = ({ open, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    TransitionComponent={Slide}
    TransitionProps={{ direction: "up" }}
    PaperProps={{
      sx: {
        background: "linear-gradient(135deg, #192e4d 65%, #5186c9 100%)",
        color: "#fff",
        borderRadius: 7,
        boxShadow: "0 10px 36px #0a183d99",
        minWidth: 390,
        position: "relative",
        overflow: "visible",
      },
    }}
  >
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: -44,
        transform: "translateX(-50%)",
        width: 88,
        height: 88,
        borderRadius: "50%",
        background: "radial-gradient(circle, #fff 65%, #5186c9 100%)",
        boxShadow: "0 2px 18px #5186c988",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#5186c9",
        fontSize: 46,
        fontWeight: 900,
        zIndex: 2,
        border: "6px solid #5186c9",
        mb: 2,
      }}
    >
      <span role="img" aria-label="party">
        🎉
      </span>
    </Box>
    <DialogTitle
      sx={{
        mt: 7,
        fontWeight: "bold",
        fontSize: "2rem",
        textAlign: "center",
        color: "#fff",
        letterSpacing: "0.04em",
        textShadow: "0 2px 12px #5186c922",
        lineHeight: 1,
      }}
    >
      Welcome!
    </DialogTitle>
    <DialogContent sx={{ textAlign: "center", pb: 1 }}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "1.1rem",
          color: "#e3eafc",
          mb: 2,
          letterSpacing: 0.2,
        }}
      >
        You have successfully logged in to
        <span style={{ color: "#fff", fontWeight: 600 }}> Positive H.</span>
      </Typography>
      <Box
        sx={{
          background: "rgba(255,255,255,0.06)",
          borderRadius: 3,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mb: 1,
          boxShadow: "0 1px 10px #5186c944",
        }}
      >
        <img
          src="https://img.icons8.com/color/48/000000/thumb-up.png"
          alt="thumb up"
          style={{ width: 42, height: 42, marginRight: 10 }}
        />
        <Typography sx={{ color: "#cbe8ff", fontWeight: 600, fontSize: 18 }}>
          Ready to explore your dashboard?
        </Typography>
      </Box>
    </DialogContent>
    <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
      <Button
        onClick={onClose}
        variant="contained"
        sx={{
          px: 5,
          py: 1.5,
          fontWeight: 600,
          background: "linear-gradient(90deg, #5186c9 60%, #192e4d 100%)",
          color: "#fff",
          borderRadius: "30px",
          boxShadow: "0 2px 12px #5186c999",
          fontSize: "1.08rem",
          letterSpacing: 0.3,
          textTransform: "none",
          "&:hover": {
            background: "linear-gradient(90deg, #192e4d 10%, #5186c9 90%)",
            boxShadow: "0 8px 30px #5186c966",
          },
        }}
        autoFocus
      >
        Go to Dashboard
      </Button>
    </DialogActions>
  </Dialog>
);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [openSuccess, setOpenSuccess] = useState(false);
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
      setOpenSuccess(true);
    }
  };

  const handleSuccessOk = () => {
    setOpenSuccess(false);
    navigate("/home-image");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #07090c 80%, #0a183d 100%)",
        fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Stylish blue/white background shapes */}
      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, #5186c9 50%, transparent 80%)",
            top: -80,
            left: -120,
            opacity: 0.22,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "radial-gradient(circle, #0a183d 70%, transparent 90%)",
            bottom: -60,
            right: -100,
            opacity: 0.17,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "radial-gradient(circle, #fff 60%, transparent 100%)",
            top: 120,
            right: 80,
            opacity: 0.07,
          }}
        />
      </Box>

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
            color: "#fff",
            fontSize: "2.8rem",
            fontWeight: "bold",
            textShadow: "2px 2px 18px #192e4d",
            letterSpacing: 1,
            fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
          }}
        >
          <Box>
            <span style={{ color: "#5186c9" }}>Welcome&nbsp;</span>
            <span style={{ color: "#fff" }}>Back!</span>
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                color: "#b2c7e5",
                fontWeight: 400,
                fontSize: "1.1rem",
                letterSpacing: 0.1,
                maxWidth: 330,
                lineHeight: 1.6,
                textShadow: "1px 1px 8px #101a2d",
              }}
            >
              Manage your Positive H. panel in a modern, secure dashboard.
            </Typography>
          </Box>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
          <Container maxWidth="xl">
            <Paper
              elevation={0}
              sx={{
                padding: 4,
                width: 410,
                borderRadius: "20px",
                background: "rgba(21, 32, 61, 0.98)",
                boxShadow: "0 6px 38px #0a183d55, 0 0 0 2px #5186c966",
                border: "2.5px solid #101a2d",
                position: "relative",
                overflow: "visible",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -28,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 62,
                  height: 62,
                  background:
                    "linear-gradient(135deg, #5186c9 10%, #192e4d 100%)",
                  borderRadius: "50%",
                  boxShadow: "0 2px 20px #5186c999",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 34,
                  fontWeight: 800,
                  zIndex: 1,
                  border: "3px solid #181a24",
                  mb: 2,
                }}
              >
                <span role="img" aria-label="login">
                  🔐
                </span>
              </Box>
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  mb: 3.5,
                  color: "#fff",
                  mt: 4,
                  letterSpacing: 0.2,
                  fontFamily: "'DM Sans', 'Inter', 'Roboto', sans-serif",
                  textShadow: "0 2px 10px #5186c9cc",
                }}
              >
                Positive H. Admin Panel
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: "#b2c7e5",
                  fontWeight: 500,
                  textAlign: "center",
                  letterSpacing: 0.1,
                  fontSize: "1.02rem",
                }}
              >
                Sign in to start your session
              </Typography>

              <form onSubmit={handleSubmit} autoComplete="off">
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
                        <MdEmail size={23} color="#5186c9" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2.5,
                      background: "#181a24",
                      color: "#b2c7e5",
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
                    "& .MuiFormHelperText-root": {
                      color: "#e53935",
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
                        <MdLock size={23} color="#5186c9" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mb: 1,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2.5,
                      background: "#181a24",
                      color: "#b2c7e5",
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
                    "& .MuiFormHelperText-root": {
                      color: "#e53935",
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
                      color: "#5186c9",
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
                        "linear-gradient(90deg, #192e4d 10%, #5186c9 90%)",
                      color: "#fff",
                      borderRadius: "30px",
                      boxShadow: "0 2px 10px 0 #192e4d33",
                      fontSize: "1rem",
                      letterSpacing: 0.5,
                      textTransform: "none",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #101a2d 10%, #3b6ea5 90%)",
                        boxShadow: "0 6px 25px #5186c922",
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

      {/* New Unique Welcome Modal */}
      <WelcomeDialog open={openSuccess} onClose={handleSuccessOk} />
    </Box>
  );
};

export default LoginPage;
