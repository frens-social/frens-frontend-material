import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@material-ui/core/Card";
import {
  IconButton,
  Divider,
  Avatar,
  Box,
  CardContent,
  CardHeader,
  CardActions,
  CardMedia,
} from "@material-ui/core";

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
          <StatusHeader status={props.status} />

          <CardContent>
          <StatusBody status={props.status} />
          <StatusReactions
            status={props.status}
            userHasReacted={userHasReacted}
            setUserReacted={setUserReacted}
            user={props.user}
          />
          </CardContent>

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
