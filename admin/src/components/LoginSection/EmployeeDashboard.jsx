import React from "react";
import { Box, Typography } from "@mui/material";

const EmployeeDashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Employee Dashboard
      </Typography>
      <Typography>You are successfully logged in as an employee.</Typography>
    </Box>
  );
};

export default EmployeeDashboard;
