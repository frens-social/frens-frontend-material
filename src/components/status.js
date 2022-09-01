import React from "react";

import Card from "@material-ui/core/Card";
import {
  Divider,
  Typography,
  Box,
} from "@material-ui/core";

import StatusHeader from "./statusHeader";
import StatusReactionButton from "./statusReactionButton";

export default function Status(props) {

    return (
      <Card>
        <StatusHeader account={props.account} />

        <div className="status-text" style={{ padding: "15px" }}>
          <Typography variant="body1" style={{ wordWrap: "break-word" }}>
            {props.status.text}
          </Typography>
        </div>

        <Divider />

        <div className="status-footer">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <StatusReactionButton />
          </Box>
        </div>
      </Card>
    );
}