import React from "react";

import { Card, TextField, Box } from "@material-ui/core";

export default function Search() {
  return (
    <Box
        display="flex"
        flexDirection="column"
        sx={{ width: "100%", 
        height: "98vh",
        m: 0, gap: 8 }}
        >
      <Card>
        <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            fullWidth
        />
      </Card>

      <Card
        style={{
            width: "100%",
            height: "100%",
        }}
        ></Card>
    </Box>
  );
}
