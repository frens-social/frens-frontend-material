import { Box, Grid } from "@material-ui/core";
import React from "react";
import AccountCard from "./account-card";
import Navigation from "./navigation";

function HomeLeftPanel() {
  return (
    <div>
      <Box display="flex" flexDirection="column" sx={{ width: 250, m: 0, gap: 8 }}>
        <AccountCard />
        <Navigation />
      </Box>
    </div>
  );
}

export default HomeLeftPanel;
