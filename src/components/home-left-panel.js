import { Grid } from "@material-ui/core";
import React from "react";
import AccountCard from "./account-card";
import Navigation from "./navigation";

function HomeLeftPanel() {
  return (
    <div>
      <Grid container spacing={3} direction="column" width="100%" justify="center">
        <AccountCard />
        <Navigation />
      </Grid>
    </div>
  );
}

export default HomeLeftPanel;
