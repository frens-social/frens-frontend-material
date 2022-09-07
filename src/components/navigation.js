import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

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
    <Card
      sx={{
        width: "100%",
      }}
    >
      <CardHeader
        avatar={<Avatar src={user ? user.avatar_url : ""} alt="desu" />}
        title={user ? user.display_name : "ERROR"}
        subheader={user ? user.username : "ERROR"}
      />

      <CardContent>
        <Box display="flex" flexDirection="column" sx={{ m: 0, gap: 8 }}>
          <Button
            color="primary"
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={() => navigate("/home")}
          >
            Home
          </Button>
          <Button
            color="primary"
            variant="contained"
            startIcon={<EmailIcon />}
            onClick={() => navigate("/home")}
          >
            Messages
          </Button>
          <Button
            color="primary"
            variant="contained"
            startIcon={<NotificationsIcon />}
            onClick={() => navigate("/home")}
          >
            Notifications
          </Button>
          <Button
            color="primary"
            variant="contained"
            startIcon={<LogoutIcon />}
            onClick={() => navigate("/home")}
          >
            Logout
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
