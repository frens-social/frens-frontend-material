import React from "react";

import { Card, Button, Typography, Box, Divider } from "@material-ui/core";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from '@mui/icons-material/Logout';

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
            <Button>
              <HomeIcon />
              <Typography variant="body1">Home</Typography>
              </Button>

            <Divider />

            <Button aria-label="Messages">
              <EmailIcon />
              <Typography variant="body1">Messages</Typography>
            </Button>

            <Divider />

            <Button aria-label="Notifications">
              <NotificationsIcon />
              <Typography variant="body1">Notifications</Typography>
            </Button>

            <Divider />

            <Button aria-label="Logout" onClick={this.handleLogout}>
              <LogoutIcon />
              <Typography variant="body1">Logout</Typography>
            </Button>
          </Box>
        </Card>
      </div>
    );
  }
}

export default Navigation;
