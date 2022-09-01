import React from "react";

import Card from "@material-ui/core/Card";
import { Divider, Typography, Box } from "@material-ui/core";

import StatusHeader from "./statusHeader";
import StatusReactionButton from "./statusReactionButton";
import StatusInteractionsMenu from "./statusInteractionsMenu";

export default function Status(props) {
  return (
    <div>
      <Card>
        <StatusHeader account={props.account} />

        <div className="status-text" style={{ padding: "15px" }}>
          <Typography variant="body1" style={{ wordWrap: "break-word" }}>
            {props.status.text}
          </Typography>
        </div>

        <Divider />
        <StatusInteractionsMenu />
        <Divider />
      </Card>
    </div>
  );
}
