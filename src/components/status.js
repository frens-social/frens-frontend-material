import React from "react";

import Card from "@material-ui/core/Card";
import { Divider, Typography, Box, Avatar, Slider } from "@material-ui/core";

import StatusHeader from "./statusHeader";
import StatusReactions from "./statusReactions";
import StatusMainColumn from "./statusMainColumn";
import StatusFooter from "./statusFooter";

export default function Status(props) {
  return (
    <Card>
      <Box
        display="flex"
        flexDirection="row"
        allignItems="top"
        sx={{ width: "100%", m: 0, p: 0, gap: 8 }}
      >
        <Box
          style={{
            marginLeft: "5px",
            marginTop: "5px",
          }}
        >
          <Avatar alt="desu" src={props.user.avatar_url} />
        </Box>
        <StatusMainColumn status={props.status} user={props.user} />
      </Box>
      <StatusReactions status={props.status} />
      <Divider />
      <StatusFooter status={props.status} user={props.user} />
    </Card>
  );
}
