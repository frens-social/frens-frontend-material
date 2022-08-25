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

import HomeLeftPanel from "./home-left-panel";
import HomeMiddlePanel from "./home-middle-panel";
import HomeRightPannel from "./home-right-panel";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
        >
          <Grid item xs={2} sm={2}>
            <HomeLeftPanel />
          </Grid>
          <Grid item xs={4} sm={4}>
            <HomeMiddlePanel />
          </Grid>
          <Grid item xs={2} sm={2}>
            <HomeRightPannel />
          </Grid>
        </Grid>
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
