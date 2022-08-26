import React from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Box,
  Typography,
} from "@material-ui/core";

import "./landing.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInputValue: "",
      passwordInputValue: "",
    };
  }

  render() {
    return (
      <div className="landing">
        <div className="main-content">
          <Card className="info-card">
            <Box display="flex" flexDirection="column" sx={{ m: 2, gap: 0 }}>
              <Typography variant="h3" component="h1" gutterBottom>
                {" "}
                Frens.moe{" "}
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                {" "}
                A social network for frens.{" "}
              </Typography>
            </Box>
          </Card>

          <Card className="login-card">
            <Box display="flex" flexDirection="column" sx={{ m: 2, gap: 24 }}>
              <TextField
                id="standard-basic"
                label="Username"
                className="username-input"
                onChange={(e) => {
                  this.setState({ usernameInputValue: e.target.value });
                }}
              />
              <TextField
                id="standard-basic"
                label="Password"
                type="password"
                className="password-input"
                onChange={(e) => {
                  this.setState({ passwordInputValue: e.target.value });
                }}
              />
              <Button
                variant="contained"
                color="primary"
                className="login-button"
                onClick={() => {
                  handleLogin(
                    this.state.usernameInputValue,
                    this.state.passwordInputValue
                  );
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="signup-button"
              >
                Create Account
              </Button>
            </Box>
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
}

function handleLogin(username, password) {
  fetch("http://localhost:4000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then(
      (data) => {
        localStorage.setItem("token", data.token);
        window.location.href = "/home";
      },
      (error) => {
        console.log(error);
      }
    );
}

export default Landing;
