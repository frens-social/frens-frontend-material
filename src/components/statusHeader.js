import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Avatar, Typography, Box } from "@material-ui/core";

import StatusOptionsMenu from "./statusOptionsMenu";

export default function StatusHeader(props) {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent={"space-between"}
      sx={{ m: 0.25, gap: 0 }}
    >
        <Box
          display="flex"
          alignItems="top"
          flexWrap="wrap"
          sx={{ m: 0, p: 0, gap: 6 }}
        >
          <Typography variant="b1" align="left">
            <b>{props.user.username}</b>
          </Typography>
          <Typography variant="b1" align="left">
            @{props.user.username}
          </Typography>
          <Typography variant="b1" align="left">
            25m ago
          </Typography>
        </Box>
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