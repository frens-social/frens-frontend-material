import React from "react";

import { Card, IconButton, Typography, Box, Divider } from "@material-ui/core";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./home.css";

class Navigation extends React.Component {
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
          </Box>
        </Card>
      </div>
    );
  }
}

export default Navigation;
