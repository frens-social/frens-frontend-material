import React from "react";

import { Typography } from "@material-ui/core";

export default function StatusBody(props) {
  return (
    <Typography variant="body1" style={{ wordWrap: "break-word", margin: 12 }}>
      {props.status.text}
    </Typography>
  );
}
