import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import { Avatar, Box, CardContent } from "@material-ui/core";

import StatusHeader from "./statusHeader";
import StatusBody from "./statusBody";
import StatusFooter from "./footer/statusFooter";

export default function Status(props) {
  const [userHasReacted, setUserReacted] = React.useState(false);

  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="row" sx={{ gap: 12 }}>
          <Box>
            <Avatar alt="desu" src={props.user.avatar_url} />
          </Box>
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
      <StatusFooter
        status={props.status}
        user={props.user}
        setUserReacted={setUserReacted}
      />
    </Card>
  );
}
