import React from "react";

import Card from "@material-ui/core/Card";
import { Box, CardContent, CardActions } from "@material-ui/core";

import StatusMedia from "./statusMedia";
import StatusHeader from "./statusHeader";
import StatusBody from "./statusBody";
import StatusReactions from "./statusReactions";
import StatusFooter from "./footer/statusFooter";

export default function Status(props) {
  const [userHasReacted, setUserReacted] = React.useState(false);

  return (
    <div>
      <Box display="flex" flexDirection="column" sx={{ width: "100%", gap: 4 }}>
        <Card>
          <StatusHeader status={props.status} onDelete={props.onDelete} />

          <CardContent>
            <StatusBody status={props.status} />
            <StatusReactions
              status={props.status}
              userHasReacted={userHasReacted}
              setUserReacted={setUserReacted}
              user={props.user}
            />
          </CardContent>

          <StatusMedia media={props.media} />

          <CardActions>
            <StatusFooter
              status={props.status}
              user={props.user}
              setUserReacted={setUserReacted}
            />
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
