import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@material-ui/core/Card";
import {
  IconButton,
  Divider,
  Avatar,
  Box,
  CardContent,
  CardHeader,
} from "@material-ui/core";

import StatusHeader from "./statusHeader";
import StatusBody from "./statusBody";
import StatusReactions from "./statusReactions";
import StatusFooter from "./footer/statusFooter";

export default function Status(props) {
  const navigate = useNavigate();
  const [userHasReacted, setUserReacted] = React.useState(false);

  return (
    <Card>
      <StatusHeader status={props.status} />
      <StatusBody status={props.status} />
      <StatusReactions status={props.status} />

      <Divider />
      <StatusFooter
        status={props.status}
        user={props.user}
        setUserReacted={setUserReacted}
      />
    </Card>
  );
}
