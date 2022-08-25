import React from "react";

import { Divider, Card, IconButton, Typography } from "@material-ui/core";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./home.css";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Card>
          <IconButton aria-label="Home">
            <HomeIcon />
            <Typography variant="body1">Home</Typography>
          </IconButton>

          <Divider orientation="vertical" flexItem />

          <IconButton aria-label="Messages">
            <EmailIcon />
            <Typography variant="body1">Messages</Typography>
          </IconButton>

          <Divider orientation="vertical" flexItem />

          <IconButton aria-label="Notifications">
            <NotificationsIcon />
            <Typography variant="body1">Notifications</Typography>
          </IconButton>
        </Card>
      </div>
    );
  }
}

export default Navigation;
