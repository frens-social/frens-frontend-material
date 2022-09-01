import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Avatar, Typography, Box } from "@material-ui/core";

import StatusOptionsMenu from "./statusOptionsMenu";

function StatusHeader(props) {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" justifyContent={"space-between"}>
      <Button
        onClick={() => navigate(`/profile/${props.account.id}`)}
        style={{ textTransform: "none" }}
      >
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          sx={{ m: 0, p: 0, gap: 12 }}
        >
          <Avatar alt="desu" src={props.account.avatar_url} />
          <Typography variant="h6">{props.account.username}</Typography>
        </Box>
      </Button>
      <Box>
        <StatusOptionsMenu account={props.account} />
      </Box>
    </Box>
  );
}

export default StatusHeader;
