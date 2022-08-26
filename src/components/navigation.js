import React from "react";

import { Card, IconButton, Typography, Box, Divider } from "@material-ui/core";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from '@mui/icons-material/Logout';

import "./home.css";

class Navigation extends React.Component {


  handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  render() {
    return (
      <div className="navigation">
        <Card>
          <Box display="flex" flexDirection="column" sx={{ m: 0, gap: 0 }}>
            <IconButton aria-label="Home">
              <HomeIcon />
              <Typography variant="body1">Home</Typography>
            </IconButton>

            <Divider />

            <IconButton aria-label="Messages">
              <EmailIcon />
              <Typography variant="body1">Messages</Typography>
            </IconButton>

            <Divider />

            <IconButton aria-label="Notifications">
              <NotificationsIcon />
              <Typography variant="body1">Notifications</Typography>
            </IconButton>

            <Divider />

            <IconButton aria-label="Logout" onClick={this.handleLogout}>
              <LogoutIcon />
              <Typography variant="body1">Logout</Typography>
            </IconButton>
          </Box>
        </Card>
      </div>
    );
  }
}

export default Navigation;
