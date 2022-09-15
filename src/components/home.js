import React from "react";
import Feed from "./feed/feed";

import { Box, Card, Tab, Tabs } from "@material-ui/core";

export default function Home() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    console.log("Tab changed to: ", newValue);
    setTabValue(newValue);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: "100%", m: 0, gap: 8 }}
    >
      <Card>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="For You" />
          <Tab label="Local" />
          <Tab label="Global" />
        </Tabs>
      </Card>
      <Feed feedType="home" />
    </Box>
  );
}
