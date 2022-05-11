import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Grid container className="nav_bar">
        <Grid item className="logo" sm={12} md={4}>
          <img src={require("../images/FRESH_Logo.webp")} alt="logo" />
        </Grid>
        <Box
          component={Grid}
          item
          display={{ xs: "none", sm: "none", md: "flex" }}
        >
          <ul className="nav_list">
            <li>Our Menu</li>
            <li>How It Works</li>
            <li>Plan & Pricing</li>
            <Link to="/">
              <button>Get Started</button>
            </Link>
          </ul>
        </Box>
      </Grid>
    </nav>
  );
}
