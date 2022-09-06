import React from "react";
import { useNavigate } from "react-router-dom";

import { IconButton, Button, Avatar, Typography, Box } from "@material-ui/core";

import StatusOptionsMenu from "./StatusOptionsMenu";
import StatusReactions from "./statusReactions";
import StatusHeaderUserInfo from "./statusHeaderUserInfo";

export default function StatusHeader(props) {
  return (
    <Box display="flex" alignItems="center" justifyContent={"space-between"}>
      <StatusHeaderUserInfo user={props.user} />

      <Typography variant="body2" align="left">
        25m ago
      </Typography>

      <StatusReactions
        status={props.status}
        userHasReacted={props.userHasReacted}
      />
      <StatusOptionsMenu user={props.user} />
    </Box>
  );
}
