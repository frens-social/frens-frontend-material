import React from "react";
import { useParams } from "react-router-dom";

import { Avatar, Box, Card, Typography } from "@material-ui/core";

export default function Profile() {
  let params = useParams();
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: 500, m: 0, gap: 8 }}
    >
        <Card style={{ height: 250, backgroundImage: `url(https://picsum.photos/200/300)` }}>
          <Avatar />
        </Card>
    </Box>
  );
}
