import React from "react";
import { Routes, Route } from "react-router-dom";

import { Box } from "@material-ui/core";

import HomeLeftPanel from "./homeLeftPanel";
import Feed from "./feed";
import Profile from "./profile";
import HomeRightPannel from "./homeRightPanel";

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
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
        <HomeRightPannel />
      </Box>
    </div>
  );
}

export default Home;
