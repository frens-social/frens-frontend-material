import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Avatar, Typography, Box } from "@material-ui/core";

import StatusOptionsMenu from "./StatusOptionsMenu";
import StatusReactions from "./statusReactions";

export default function StatusHeader(props) {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent={"space-between"}
    >
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          sx={{ m: 0, p: 0, gap: 6 }}
        >
          <Typography variant="body1" align="left">
            <b>{props.user.username}</b>
          </Typography>
          <Typography variant="body1" align="left">
            @{props.user.username}
          </Typography>
          <Typography variant="body4" align="left">
            25m ago
          </Typography>
        </Box>
        <StatusReactions status={props.status} userReacted={props.userReacted} />
      <StatusOptionsMenu user={props.user} />
    </Box>
  );
}

/*

      /*<Button
        onClick={() => navigate(`/profile/${props.user.id}`)}
        style={{ textTransform: "none" }}
      >
      
      */