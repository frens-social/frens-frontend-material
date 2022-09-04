import React from "react";

import { Box, Card, Avatar, Typography } from "@material-ui/core";

export default function ProfileHeader(props) {
  return (
    <Card
      style={{
        height: 250,
        padding: 0,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        sx={{ width: "100%", height: "100%", m: 0, gap: 0 }}
      >
        <div style={{ width: "100%", height: "100%", backgroundImage: `url(${props.user.banner_url})` }} />
        <Box
          display="flex"
          flexDirection="row"
          alignItems="flex-end"
          sx={{ width: "100%", height: "100%", m: 1, gap: 12 }}
        >
          <Avatar
            alt="desu"
            src={props.user.avatar_url}
            style={{ height: 80, width: 80 }}
          />
          <Typography variant="h4">{props.user.username}</Typography>
        </Box>
      </Box>
    </Card>
  );
}
