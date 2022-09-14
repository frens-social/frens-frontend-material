import React from "react";
import { useNavigate } from "react-router-dom";

import { Avatar, CardHeader } from "@material-ui/core";

import StatusOptionsMenu from "./StatusOptionsMenu";

export default function StatusHeader(props) {
  const navigate = useNavigate();

  return (
    <CardHeader
      avatar={<Avatar alt="desu" src={props.status.user.avatar_url} onClick={() => navigate("/users/" + props.status.user.id)} />}
      title={props.status.user.username}
      subheader={props.status.user.username}
      action={<StatusOptionsMenu status={props.status} onDelete={props.onDelete} />}
      style={{ backgroundColor: "#bbbbbb" }}
    />
  );
}