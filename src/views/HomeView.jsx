import React from "react";
import { Container, Typography, Box } from "@mui/material";

const HomeView = () => {
  return (
    <Container>
      {/* Welcome Section */}
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Welcome to DishDelights!
        </Typography>
        <Typography variant="h6">
          Discover, create, and enjoy delicious meals with our diverse collection of recipes.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomeView