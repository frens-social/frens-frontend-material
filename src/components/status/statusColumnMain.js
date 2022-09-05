import React from "react";

import { Box } from "@material-ui/core";

import StatusHeader from "./statusHeader";
import StatusBody from "./statusBody";
export default function StatusMainColumn(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{ width: "100%", gap: 8 }}
    >
      <StatusHeader user={props.user} status={props.status} />
      <StatusBody status={props.status} />
    </Box>
  );
}
