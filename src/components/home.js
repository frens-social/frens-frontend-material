import React from "react";

import {
  Divider,
  Button,
  Card,
  CardContent,
  Item,
  TextField,
  Grid,
} from "@material-ui/core";

import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="main-content">
        <Card className="left-panel">
          <CardContent>
            <Grid container spacing={3}>
              <ProfileCard />
              <Navigation />
            </Grid>
          </CardContent>
        </Card>
        <Card className="middle-panel">
          <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <StatusCreator />
                    <Feed />
                    </Grid>
                    </Grid>
          </CardContent>
        </Card>
        <Card className="right-panel">
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <Card className="profile-card">
      <CardContent className="profile-card-content">PROFILE</CardContent>
    </Card>
  );
}

function Navigation() {
  return (
    <Card className="navigation-card">
      <CardContent className="navigation-card-content">NAVIGATION</CardContent>
    </Card>
  );
}

function StatusCreator() {
  return (
    <Card className="status-creator-card">
      <CardContent className="status-creator-card-content">
        STATUS CREATOR
      </CardContent>
    </Card>
  );
}

function Feed() {
    return (
        <Card className="feed-card">
        <CardContent className="feed-card-content">FEED</CardContent>
        </Card>
    );
}

export default Home;
