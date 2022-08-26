import React from "react";

import { Box } from "@material-ui/core";

import StatusCreator from "./status-creator";
import Feed from "./feed";

function HomeMiddlePanel() {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: 600, m: 0, gap: 8 }}
      >
        <StatusCreator />
        <Feed />
      </Box>
    </div>
  );
}

export default HomeMiddlePanel;
