import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import "./footer.css";
export default function Footer() {
  return (
    <Grid container className="footer">
      <Grid item md={6} className="footer_signup">
        <img src={require("../images/Logo_White.webp")} alt="logo" />
        {/* <TextField
          margin="normal"
          required
          id="email"
          label="Email Address"
          name="email"
          variant="filled"
          color="success"
        />
        <button>Explore Meals</button> */}
      </Grid>
      <Grid item md={2} className="footer_col">
        <h3>Get Started</h3>
        <ul>
          <li>Place an Order</li>
          <li>Our Menu</li>
          <li>How it Works</li>
          <li>How it Works</li>
          <li>Plans & Pricing</li>
          <li>Refer a Friend</li>
        </ul>
      </Grid>
      <Grid item md={2} className="footer_col">
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Blog</li>
        </ul>
      </Grid>
      <Grid item md={2} className="footer_col">
        <h3>Connect</h3>
        <ul>
          <li>Contact Us</li>
          <li>Get $40</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </Grid>
    </Grid>
  );
}
