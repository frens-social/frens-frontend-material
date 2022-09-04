import React from "react";

import Card from "@material-ui/core/Card";
import { Divider, Typography, Box } from "@material-ui/core";

import StatusHeader from "./statusHeader";
import StatusInteractionsMenu from "./statusInteractionsMenu";
import StatusReactions from "./statusReactions";

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

        <StatusReactions status={props.status} />
        <Divider />
        <StatusInteractionsMenu status={props.status} />
        <Divider />
      </Card>
    </div>
  );
}
