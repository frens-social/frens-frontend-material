import React from "react";

import { Box } from "@material-ui/core";

import TrendsInfo from "./trends-info";

function HomeRightPannel() {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: 250, m: 0, gap: 8 }}
      >
        <TrendsInfo />
      </Box>
    </div>
  );
}

export default HomeRightPannel;
