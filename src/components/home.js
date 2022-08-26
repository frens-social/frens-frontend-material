import React from "react";

import {
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
          <Grid item xs={2}>
            <HomeLeftPanel />
          </Grid>
          <Grid item xs={4}>
            <HomeMiddlePanel />
          </Grid>
          <Grid item xs={2}>
            <HomeRightPannel />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
