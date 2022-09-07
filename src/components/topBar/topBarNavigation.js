import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Paper,
  Box,
  Button,
  Avatar,
  ButtonGroup,
  InputBase,
  Divider,
} from "@material-ui/core";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function TopBarNavigation() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      minWidth="auto"
    >
      <Button onClick={() => navigate("/home")} size="large">
        <Avatar alt="Logo" src="https://unsplash.it/200/300" />
      </Button>

      <ButtonGroup
        orientation="horizontal"
        variant="text"
        size="large"
        fullWidth={true}
      >
        <Button>
          <HomeIcon onClick={() => navigate("/home")} />
        </Button>

        <Button>
          <EmailIcon onClick={() => navigate("/messages")} />
        </Button>

        <Button>
          <NotificationsIcon onClick={() => navigate("/notifications")} />
        </Button>

        <Button>
          <SettingsIcon onClick={() => navigate("/settings")} />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
