import { Grid } from "@material-ui/core";
import React from "react";
import AccountCard from "./account-card";
import Navigation from "./navigation";

function HomeLeftPanel() {
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        width="100%"
        justify="center"
      >
        <Grid item xs={12}>
          <AccountCard />
        </Grid>
        <Grid item xs={12}>
          <Navigation />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeLeftPanel;
