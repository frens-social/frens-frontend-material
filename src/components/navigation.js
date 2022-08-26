import React from "react";

import { Card, IconButton, Typography, Grid } from "@material-ui/core";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./home.css";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Card>
          <Grid
            container
            spacing={0}
            direction="column"
            justify="left"
            alignItems="left"
          >
            <Grid item xs={12}>
              <IconButton aria-label="Home">
                <HomeIcon />
                <Typography variant="body1">Home</Typography>
              </IconButton>
            </Grid>

            <Grid item xs={12}>
              <IconButton aria-label="Messages">
                <EmailIcon />
                <Typography variant="body1">Messages</Typography>
              </IconButton>
            </Grid>

            <Grid item xs={12}>
              <IconButton aria-label="Notifications">
                <NotificationsIcon />
                <Typography variant="body1">Notifications</Typography>
              </IconButton>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default Navigation;
