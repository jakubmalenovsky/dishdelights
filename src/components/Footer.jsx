import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: 4, py: 2, textAlign: "center", bgcolor: "grey.200" }}>
      <Typography variant="body2">&copy; {new Date().getFullYear()} DishDelights</Typography>
    </Box>
  );
};

export default Footer;
