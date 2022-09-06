import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Box, Avatar, Typography } from "@material-ui/core";

export default function StatusHeaderUserInfo(props){
  const navigate = useNavigate();


    function onUserInfoClicked() {
        navigate(`/users/${props.user.id}`);
    }

  return (
    <Button
    onClick={onUserInfoClicked}
    style={{ textTransform: "none" }}
  >
    <Box
      display="flex"
      alignItems="center"
      flexDirection="row"
      sx={{ gap: 8, width: "100%" }}
      flexWrap="wrap"
    >
      <Avatar alt="desu" src={props.user.avatar_url} />
        <Typography variant="body1" align="left">
          <b>{props.user.username}</b>
        </Typography>
        <Typography variant="body1" align="left">
          @{props.user.username}
        </Typography>
    </Box>
    </Button>
  );
}
