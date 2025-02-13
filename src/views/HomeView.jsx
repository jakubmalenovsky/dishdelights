import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import foodImage from "../assets/first.jpg"; // Update path if needed
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", width: "100%", height: "110vh" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          position: "relative",
          p: 0, // Remove padding to match header width
          maxWidth: "calc(100% - 20px)", // 10px smaller on each side
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
          }}
        >
          {/* Background Image with Overlay */}
          <Box
            component="img"
            src={foodImage}
            alt="Delicious food"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
              filter: "brightness(50%)",
            }}
          />

          {/* Text Content */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translateY(-50%)",
              color: "#fff",
            }}
          >
            <Typography variant="h1" fontWeight="bold">
              Food that you will{" "}
              <Typography variant="h1" component="span" color="primary" fontWeight="bold">
                love...
              </Typography>
            </Typography>

            <Button
              component={Link}
              to="./recipesview"
              variant="contained"
              sx={{
                mt: 2,
                color: "#fff",
                textTransform: "none",
                borderRadius: "20px",
                px: 3,
              }}
            >
              Explore
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeView;

