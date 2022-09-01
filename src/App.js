import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box } from "@material-ui/core";

import AccountCard from "./components/accountCard";
import Auth from "./components/auth";
import Feed from "./components/feed";
import Profile from "./components/profile";
import Navigation from "./components/navigation";
import TrendsInfo from "./components/trends-info";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        position: "absolute",
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
          
          
          <Box
            display="flex"
            flexDirection="column"
            sx={{ width: 250, m: 0, gap: 8 }}
          >
            <AccountCard />
            <Navigation />
          </Box>


          <Box
            display="flex"
            flexDirection="column"
            sx={{ width: 650, m: 0, gap: 8 }}
          >
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/home" element={<Feed />} />
              <Route path="/profile/:profileId" element={<Profile />} />
            </Routes>
          </Box>
          
          
          <TrendsInfo />
        
        
        </Box>
      </Router>
    </div>
  );
}

export default App;
