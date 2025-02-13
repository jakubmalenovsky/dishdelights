import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import foodImage from "../assets/first.jpg"; // Replace with the correct path

const HomeView = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on medium+
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: { xs: "center", md: "left" }, // Center text on small screens
        gap: 4, // Spacing between elements
        py: 4,
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={foodImage}
        alt="Delicious food"
        sx={{
          width: { xs: "100%", md: "45%" }, // Full width on small screens, smaller on larger screens
          maxWidth: "500px",
          borderRadius: "20px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      />

      {/* Text Section */}
      <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
        <Typography variant="h5" color="secondary" sx={{ fontWeight: 200 }}>
          DishDelights
        </Typography>
        <Typography variant="h1" sx={{ mt: 2 }}>
          Food that you will <span style={{ color: "#FF6F00" }}>love...</span>
        </Typography>
        <Button >
          Explore
        </Button>
      </Box>
    </Container>
  );
};

export default HomeView;
