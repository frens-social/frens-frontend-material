import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core";

export default function Auth() {
  const [tabValue, setTabValue] = React.useState(0);

  const [loginUsername, setLoginUsername] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerUsername, setRegisterUsername] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");

  const handleTabChange = (event, newValue) => {
    console.log("Tab changed to: ", newValue);
    setTabValue(newValue);
  };

  function handleLogin() {
    console.log("Login button clicked");

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    var body = JSON.stringify({
      username: loginUsername,
      password: loginPassword,
    });

    var requestOptions = {
      method: "POST",
      headers: headers,
      body: body,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/v1/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.username);
        window.location.replace("http://localhost:3001/");
      })
      .catch((error) => console.log("error", error));
  }

  function handleRegister() {
    console.log("Register button clicked");
  }

  return (
    <div
      className="Auth"
      style={{
        backgroundColor: "#23272A",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={{
          backgroundColor: "#23272A",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        sx={{ m: 1, gap: 24 }}
      >
        <Card
          style={{
            minWidth: 275,
            maxWidth: 400,
            minHeight: 400,
            maxHeight: 650,
          }}
        >
          <CardHeader
            title={<Typography variant="h4">Frens.Moe</Typography>}
            subheader="A place for frens"
            style={{ textAlign: "center" }}
          />
          <CardContent>
            <Typography variant="body1">
              Frens.Moe is an experimental federated social network. Both the
              front-end and back-end are completely open source (MIT License),
              and you can find the code on GitHub.
              <br />
              <br />
              Please feel free to make an account, post memes, and make frens!
              Just be sure to report any bugs you find on our issues page.
              <br />
              <br />
              This is a work in progress, and is not ready for production use.
              If you'd like to help out, please feel free to contribute!
            </Typography>
          </CardContent>
          <CardMedia>
            <img
              src="https://i.kym-cdn.com/entries/icons/original/000/029/323/doggo.jpg"
              alt="doggo"
              style={{ width: "100%" }}
            />
          </CardMedia>
        </Card>
        <Card
          sx={{
            width: "20%",
            height: "35%",
            backgroundColor: "#2F3136",
            borderRadius: "20px",
            boxShadow: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            m: 1,
          }}
        >
          <CardContent>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>
            <br />
            {tabValue === 0 ? (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="stretch"
                justifyContent="center"
                sx={{ gap: 12 }}
              >
                <TextField
                  id="login-username"
                  label="Username"
                  variant="outlined"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
                <TextField
                  id="login-password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="stretch"
                justifyContent="center"
                sx={{ gap: 12 }}
              >
                <TextField
                  id="register-email"
                  label="Email"
                  variant="outlined"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <TextField
                  id="register-password"
                  label="Username"
                  variant="outlined"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                />
                <TextField
                  id="register-password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleRegister}
                >
                  Sign Up
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
