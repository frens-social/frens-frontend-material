import React from "react";
import {
  Divider,
  Button,
  Card,
  CardContent,
  TextField,
} from "@material-ui/core";

import "./landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="main-content">
        <div className="left-side">
          <div className="logo">
            <h1>Logo Goes Here</h1>
          </div>
          <div className="about">
            <h2>About goes here</h2>
          </div>
        </div>

        <div className="right-side">
          <Card>
            <CardContent>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </div>
              <div>
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Button variant="contained" color="primary">
                Register
              </Button>
            </CardContent>
          </Card>
        </div>
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
