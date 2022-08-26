import React from "react";

import Grid from "@material-ui/core/Grid";

import StatusCreator from "./status-creator";
import Feed from "./feed";
import FeedSelecter from "./feed-selecter";

function HomeMiddlePanel() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <StatusCreator />
        </Grid>
        <Grid item xs={12}>
          <FeedSelecter />
        </Grid>
        <Grid item xs={12}>
          <Feed />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeMiddlePanel;
