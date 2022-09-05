import React from "react";

import Card from "@material-ui/core/Card";
import { Box, CardContent } from "@material-ui/core";

import StatusColumnAvatar from "./statusColumnAvatar";
import StatusColumnMain from "./statusColumnMain";
import StatusFooter from "./statusFooter";

export default function Status(props) {
  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="row" sx={{ gap: 12 }}>
          <StatusColumnAvatar user={props.user} />
          <StatusColumnMain status={props.status} user={props.user} />
        </Box>
      </CardContent>
      <StatusFooter status={props.status} user={props.user} />
    </Card>
  );
}
