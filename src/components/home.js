import React from "react";

import { Box } from "@material-ui/core";

import "./home.css";

import HomeLeftPanel from "./home-left-panel";
import HomeMiddlePanel from "./home-middle-panel";
import HomeRightPannel from "./home-right-panel";

function Home() {
  return (
    <div className="home">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        minWidth="auto"
        sx={{ m: 1, gap: 12 }}
      >
        <HomeLeftPanel />
        <HomeMiddlePanel />
        <HomeRightPannel />
      </Box>
    </div>
  );
}

export default Home;
