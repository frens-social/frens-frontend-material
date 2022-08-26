import React from "react";

import Card from "@material-ui/core/Card";
import { Typography, Box, Avatar } from "@material-ui/core";

function Status(props) {
  return (
    <Card>
      <Box display="flex" alignItems="center" sx={{ m: 1, gap: 8 }}>
        <Avatar alt="desu" src={props.account.avatar_url} />
        <Typography variant="h7">{props.account.username}</Typography>
      </Box>

      <div className="status" style={{ padding: "15px" }}>
        <Typography variant="body1">{props.status.text}</Typography>
      </div>
    </Card>
  );
}

export default Status;
