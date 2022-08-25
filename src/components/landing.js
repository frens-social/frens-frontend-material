import React from "react";
import {
  Divider,
  Button,
  Card,
  CardContent,
  Item,
  TextField,
  Grid,
} from "@material-ui/core";

import "./landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="main-content">
        <Card className="info-card">
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1>LOGO</h1>
              </Grid>
              <Grid item xs={12}>
                About the site
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card className="login-card">
          <CardContent>
            <Grid
              container
              spacing={2}
              className="login-grid"
            >
              <Grid item className="username-input-container">
                <TextField
                  id="standard-basic"
                  label="Email"
                  className="username-input"
                />
              </Grid>
              <Grid item className="password-input-container">
                <TextField
                  id="standard-basic"
                  label="Password"
                  type="password"
                  className="password-input"
                />
              </Grid>
              <Grid item className="login-button-container">
                <Button
                  variant="contained"
                  color="primary"
                  className="login-button"
                  onClick={() => {handleLogin()}}          
                >
                  Login
                </Button>
              </Grid>
              <Grid item className="signup-button-container">
                <Button
                  variant="contained"
                  color="secondary"
                  className="signup-button"
                >
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>

      <div className="footer">
        <div className="footer-content">
          <div>About</div>
          <div>Contact</div>
          <div>Terms</div>
          <div>Privacy</div>
        </div>
      </div>
    </div>
  );
}

const handleLogin = () => {
  fetch("http://localhost:4000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "test",
      password: "test",
    }),
  })

    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
      window.location.href = "/home";
    }, (error) => {
      console.log(error);
    }
    );
}



export default Landing;
