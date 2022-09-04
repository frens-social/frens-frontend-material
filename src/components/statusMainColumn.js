import React from "react";
import StatusHeader from "./statusHeader";
import StatusBody from "./statusBody";

import { Box } from "@material-ui/core";
import StatusReactions from "./statusReactions";

export default function StatusMainColumn(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{ width: "100%", marginTop: "5px" }}
    >
      <StatusHeader user={props.user} />
      <StatusBody status={props.status} />
    </Box>
  );
}
