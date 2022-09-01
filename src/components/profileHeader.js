import React from "react";

import { Box, Card, Avatar, Typography } from "@material-ui/core";

export default function ProfileHeader(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: "100%", m: 0, gap: 8 }}
    >
      <Card
        style={{
          height: 250,
          padding: 16,
          /*backgroundImage: `url(${props.account.banner_url})`,*/
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="flex-end"
          sx={{ width: "100%", height: "100%", m: 0, gap: 8 }}
        >
          <Avatar
            alt="desu"
            src={props.account.avatar_url}
            style={{ height: 100, width: 100 }}
          />
          <Typography variant="h6">{props.account.username}</Typography>
        </Box>
      </Card>
    </Box>
  );
}
