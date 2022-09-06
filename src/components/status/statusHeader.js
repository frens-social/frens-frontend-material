import React from "react";
import { useNavigate } from "react-router-dom";

import { IconButton, Button, Avatar, CardHeader } from "@material-ui/core";

import StatusOptionsMenu from "./StatusOptionsMenu";
import StatusReactions from "./statusReactions";
import StatusHeaderUserInfo from "./statusHeaderUserInfo";

export default function StatusHeader(props) {
  const navigate = useNavigate();

  return (
    <CardHeader
      avatar={<Avatar alt="desu" src={props.status.user.avatar_url} />}
      title={props.status.user.username}
      subheader={props.status.user.username}
      action={<StatusOptionsMenu />}
    />
  );
}