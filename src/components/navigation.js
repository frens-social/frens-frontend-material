import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, Button, Typography, Box, Divider } from "@material-ui/core";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

function Navigation() {
  const navigate = useNavigate();

  const buttonHeight = "48px";

  const handleHomeButtonClick = () => {
    navigate("/home");
  };
  const handleLogoutButtonClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navigation">
      <Box
        display="flex"
        flexDirection="column"
        sx={{ m: 0, gap: 1, width: "100%" }}
      >
        <Card>
          <Button
            onClick={handleHomeButtonClick}
            style={{
              textTransform: "none",
              height: buttonHeight,
              width: "100%",
            }}
          >
            <HomeIcon />
            <Typography variant="body1">Home</Typography>
          </Button>
        </Card>

        <Divider />

        <Card>
          <Button
            aria-label="Messages"
            style={{
              textTransform: "none",
              height: buttonHeight,
              width: "100%",
            }}
          >
            <EmailIcon />
            <Typography variant="body1">Messages</Typography>
          </Button>
        </Card>

        <Divider />

        <Card>
          <Button
            aria-label="Notifications"
            style={{
              textTransform: "none",
              height: buttonHeight,
              width: "100%",
            }}
          >
            <NotificationsIcon />
            <Typography variant="body1">Notifications</Typography>
          </Button>
        </Card>

        <Divider />

        <Card>
          <Button
            aria-label="Logout"
            onClick={handleLogoutButtonClick}
            style={{
              textTransform: "none",
              height: buttonHeight,
              width: "100%",
            }}
          >
            <LogoutIcon />
            <Typography variant="body1">Logout</Typography>
          </Button>
        </Card>
      </Box>
    </div>
  );
}

export default Navigation;
