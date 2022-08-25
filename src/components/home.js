import React from "react";

import {
  Divider,
  Button,
  Card,
  CardContent,
  Item,
  TextField,
  Grid,
} from "@material-ui/core";

import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="main-content">
        <Card className="left-panel">
          <CardContent></CardContent>
        </Card>
        <Card className="middle-panel">
          <CardContent></CardContent>
        </Card>
        <Card className="right-panel">
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
