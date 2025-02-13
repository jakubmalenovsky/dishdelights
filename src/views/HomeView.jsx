import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const HomeView = () => {
  return (
    <Container>
      <Header />
      {/* Welcome Section */}
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Welcome to DishDelights!
        </Typography>
        <Typography variant="h6">
          Discover, create, and enjoy delicious meals with our diverse collection of recipes.
        </Typography>
      </Box>
      <Footer />
    </Container>
  );
};

export default HomeView