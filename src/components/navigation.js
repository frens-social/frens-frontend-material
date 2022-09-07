import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navigation() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const url = "http://localhost:4000/api/v1/users/self";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
      <Card style={{ width: 200, position: "sticky", top: 8 }}>
        <CardHeader
          avatar={<Avatar src={user ? user.avatar_url : ""} alt="desu" />}
          title={user ? user.display_name : "ERROR"}
          subheader={user ? user.username : "ERROR"}
        />

        <CardContent>
          <ButtonGroup
            orientation="vertical"
            variant="text"
            size="large"
            fullWidth={true}
          >
            <Button
              startIcon={<HomeIcon />}
              onClick={() => {
                navigate("/home");
              }}
              style={{ textTransform: "none", justifyContent: "flex-start" }}
            >
              Home
            </Button>
            <Button
              startIcon={<EmailIcon />}
              onClick={() => {
                navigate("/messages");
              }}
              style={{ textTransform: "none", justifyContent: "flex-start" }}
            >
              Messages
            </Button>
            <Button
              startIcon={<NotificationsIcon />}
              onClick={() => {
                navigate("/notifications");
              }}
              style={{ textTransform: "none", justifyContent: "flex-start" }}
            >
              Notifications
            </Button>
            <Button
              startIcon={<SettingsIcon />}
              onClick={() => {
                navigate("/settings");
              }}
              style={{ textTransform: "none", justifyContent: "flex-start" }}
            >
              Settings
            </Button>
            <Button
              startIcon={<LogoutIcon />}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
              style={{ textTransform: "none", justifyContent: "flex-start" }}
            >
              Logout
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
  );
}
