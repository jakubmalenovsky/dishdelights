import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <nav>
          <Link to="/recipes">DishDelights Recipes</Link>
          <Link to="/favorites">Personal Favorite Recipes</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
