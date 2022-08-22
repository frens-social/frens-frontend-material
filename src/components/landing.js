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
            <Grid container spacing={3}></Grid>
          </CardContent>
        </Card>

        <Card className="login-card">
          <CardContent>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
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
                  onClick={() => {
                    window.location.href = "/home";
                  }}
                >
                  Login
                </Button>
              </Grid>
              <Grid item>
                <Divider variant="middle" />
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

export default Landing;
