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
import AccountCard from "./account-card";
import Navigation from "./navigation";
import StatusCreator from "./status-creator";

function Home() {
  return (
    <div className="home">
      <div className="main-content">
        <Card className="left-panel">
          <CardContent>
            <Grid container spacing={3}>
              <AccountCard />
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

function Feed() {
  return (
    <Card className="feed-card">
      <CardContent className="feed-card-content">FEED</CardContent>
    </Card>
  );
}

export default Home;
