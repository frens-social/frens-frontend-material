import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@material-ui/core/Card";
import { IconButton, Divider, Avatar, Box, CardContent } from "@material-ui/core";

import StatusHeader from "./statusHeader";
import StatusBody from "./statusBody";
import StatusFooter from "./footer/statusFooter";

export default function Status(props) {
  const navigate = useNavigate();
  const [userHasReacted, setUserReacted] = React.useState(false);

  return (
    <Card>
      <CardContent
        style={{
          padding: "8px",
        }}
      >
      <Box display="flex"
      alignItems="flex-start"
      flexDirection="row" sx={{ gap: 12 }}>
        <Box
          display="flex"
          flexDirection="column"
          style={{ width: "100%", gap: 8 }}
        >
          <StatusHeader
            user={props.user}
            status={props.status}
            userHasReacted={props.userHasReacted}
          />
          <StatusBody status={props.status} />
        </Box>
      </Box>
      </CardContent>
      <Divider />
      <StatusFooter
        status={props.status}
        user={props.user}
        setUserReacted={setUserReacted}
      />
    </Card>
  );
}
