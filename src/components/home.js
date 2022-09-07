import React from "react";
import StatusCreator from "./statusCreator";
import Feed from "./feed";

import { Box } from "@material-ui/core";

export default function Home() {
  return (
    <Box 
        display="flex"
        flexDirection="column"
        sx={{ width: "100%", m: 0, gap: 8 }}
    >
      <Feed feedType="home" />
    </Box>
  );
}
