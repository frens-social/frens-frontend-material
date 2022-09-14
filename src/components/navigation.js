import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  IconButton,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";

import CardHeaderUser from "./cardHeaderUser";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupIcon from "@mui/icons-material/Group";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchIcon from "@mui/icons-material/Search";

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
    <Card style={{ width: 225, position: "sticky", top: 8 }}>
      <CardHeaderUser user={user} />

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
              navigate("/");
            }}
            style={{ textTransform: "none", justifyContent: "flex-start" }}
          >
            Home
          </Button>
          <Button
            startIcon={<ExploreIcon />}
            onClick={() => {
              navigate("/explore");
            }}
            style={{ textTransform: "none", justifyContent: "flex-start" }}
          >
            Explore
          </Button>
          <Button
            startIcon={<SearchIcon />}
            onClick={() => {
              navigate("/search");
            }}
            style={{ textTransform: "none", justifyContent: "flex-start" }}
          >
            Search
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
            startIcon={<GroupIcon />}
            onClick={() => {
              navigate("/groups");
            }}
            style={{ textTransform: "none", justifyContent: "flex-start" }}
          >
            Groups
          </Button>
          <Button
            startIcon={<FormatListNumberedIcon />}
            onClick={() => {
              navigate("/lists");
            }}
            style={{ textTransform: "none", justifyContent: "flex-start" }}
          >
            Lists
          </Button>
          <Button
            startIcon={<BookmarkIcon />}
            onClick={() => {
              navigate("/bookmarks");
            }}
            style={{ textTransform: "none", justifyContent: "flex-start" }}
          >
            Bookmarks
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
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
