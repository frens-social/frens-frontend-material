import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, Button, Typography, Box, Divider } from "@material-ui/core";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

function Navigation() {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate("/home");
  };
  const handleLogoutButtonClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navigation">
      <Card>
        <Box display="flex" flexDirection="column" sx={{ m: 0, gap: 0 }}>
          <Button onClick={handleHomeButtonClick}>
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

          <Button aria-label="Logout" onClick={handleLogoutButtonClick}>
            <LogoutIcon />
            <Typography variant="body1">Logout</Typography>
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default Navigation;
