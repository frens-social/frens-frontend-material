import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Avatar, Typography, Box } from "@material-ui/core";

import StatusOptionsMenu from "./StatusOptionsMenu";
import StatusReactions from "./statusReactions";

export default function StatusHeader(props) {
  const navigate = useNavigate();

  function onUsernameClicked() {
    navigate(`/users/${props.user.id}`);
  }

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent={"space-between"}
    >
      <Button onClick={onUsernameClicked} style={{ textTransform: "none" }}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          sx={{ gap: 8, width: "100%" }}
          flexWrap="wrap"
        >
          <Typography variant="body1" align="left">
            <b>{props.user.username}</b>
          </Typography>
          <Typography variant="body1" align="left" onClick={onUsernameClicked}>
            @{props.user.username}
          </Typography>
        </Box>
      </Button>

      <Typography variant="body4" align="left">
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
