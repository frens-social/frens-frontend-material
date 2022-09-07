import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box } from "@material-ui/core";

import Auth from "./components/auth";
import Home from "./components/home";
import Profile from "./components/profile";
import Navigation from "./components/navigation";
import TrendsInfo from "./components/trends-info";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#BFAA9C",
        position: "relative",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    >
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
            sx={{ width: 550, m: 0, gap: 8 }}
          >
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/home" element={<Home />} />
              <Route path="/users/:userId" element={<Profile />} />
            </Routes>
          </Box>

          <TrendsInfo />
        </Box>
      </Router>
    </div>
  );
}

export default App;
