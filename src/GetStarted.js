import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import Steps from "./Components/Steps";
import "./started.css";

export default function GetStarted() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      zipcode: data.get("zipcode"),
      email: data.get("email"),
    });
    navigate("./cart");
  };

  return (
    <div>
      <Grid container sx={{ height: "90vh" }}>
        <Box
          component={Grid}
          item
          md={6}
          className="left_side"
          display={{ md: "flex", sm: "none", xs: "none" }}
        >
          <Steps />
        </Box>
        <Grid item md={6} sm={12} xs={12} className="right_side">
          <h1>
            Gourmet Meals Delivered
            <br /> to Your Door
          </h1>
          <Typography variant="body2" color="text.secondary">
            Get delicious meals delivered to your door weekly, <br />
            all ready to eat in three minutes or less.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="started_form"
          >
            <TextField
              margin="normal"
              required
              id="zipcode"
              label="Zipcode"
              name="zipcode"
              autoFocus
              variant="outlined"
              color="success"
            />
            <TextField
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              variant="outlined"
              color="success"
            />
            <button type="submit">
              Explore Meals
              {/* <Link to="/cart">Explore Meals</Link> */}
            </button>
            <Typography variant="body2" color="text.secondary" mt={3}>
              Already have an account?{" "}
              <a href="https://freshmealplan.com/account/login">Log in!</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
