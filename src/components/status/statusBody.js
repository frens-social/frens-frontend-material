import React from "react";

import { CardContent, Typography } from "@material-ui/core";

export default function StatusBody(props) {
  return (
    <CardContent
      style={{
        backgroundColor: "#bbb",
      }}
    >
      <Typography variant="body1" style={{ wordWrap: "break-word" }}>
        {props.status.text}
      </Typography>
    </CardContent>
  );
}
