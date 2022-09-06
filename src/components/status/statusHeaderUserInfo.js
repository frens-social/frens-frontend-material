import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Box, Avatar, Typography } from "@material-ui/core";

export default function StatusHeaderUserInfo(props) {
  const navigate = useNavigate();

  function onUserInfoClicked() {
    navigate(`/users/${props.user.id}`);
  }

  return (
    <Button onClick={onUserInfoClicked} style={{ textTransform: "none" }}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
        style={{ gap: 8 }}
      >
        <Avatar alt="desu" src={props.user.avatar_url} />
        <Box
          display="flex"
          flexDirection="column"
        >
          <Typography variant="body2" align="left" style={{ marginLeft: 4 }}>
            <b>{props.user.username}</b>
          </Typography>
          <Typography variant="body2" align="left">
            @{props.user.username}
          </Typography>
        </Box>
      </Box>
    </Button>
  );
}
