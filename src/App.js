import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box, Fab } from "@material-ui/core";

import Auth from "./components/auth";
import Home from "./components/home";
import Profile from "./components/profile";
import Navigation from "./components/navigation";
import TrendsInfo from "./components/trendsInfo";
import Search from "./components/search";
import StatusCreatorFab from "./components/statusCreatorFab";

export default function App() {
  return (
    <div className="App">
      <div
        classname="Background"
        style={{
          backgroundColor: "#23272A",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <Router>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="center"
          minWidth="auto"
          sx={{ m: 1, gap: 12 }}
        >
          <Navigation />
          <Box
            display="flex"
            flexDirection="column"
            sx={{ width: "25%", m: 0, gap: 8 }}
          >
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/users/:userId" element={<Profile />} />
            </Routes>
          </Box>

          <TrendsInfo />
        </Box>
        <StatusCreatorFab />
      </Router>
    </div>
  );
}
