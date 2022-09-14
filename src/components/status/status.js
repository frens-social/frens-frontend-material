import React from "react";

import Card from "@material-ui/core/Card";
import { Box, CardContent, CardActions } from "@material-ui/core";

import DeleteIcon from "@mui/icons-material/Delete";
import ReportIcon from '@mui/icons-material/Report';

import StatusMedia from "./statusMedia";
import StatusBody from "./statusBody";
import StatusReactions from "./statusReactions";
import StatusFooter from "./footer/statusFooter";
import CardHeaderUser from "../cardHeaderUser";

const menuButtons = [
  {
    icon: <DeleteIcon />,
    text: "Delete",
    onClick: () => {
      //DeleteStatus();
    },
  },
  {
    icon: <ReportIcon />,
    text: "Report",
    onClick: () => {
      //ReportStatus();
    }
  }
];

export default function Status(props) {
  const [userHasReacted, setUserReacted] = React.useState(false);

  return (
    <div>
      <Box display="flex" flexDirection="column" sx={{ width: "100%", gap: 4 }}>
        <Card>
          <CardHeaderUser
            status={props.status}
            user={props.user}
            menuButtons={menuButtons}
          />

          <StatusBody status={props.status} />
          <StatusReactions
            status={props.status}
            userHasReacted={userHasReacted}
            setUserReacted={setUserReacted}
            user={props.user}
          />

          <StatusMedia
            status={props.status}
            media={props.media}
            handleMediaClick={props.handleMediaClick}
          />

          <StatusFooter
            status={props.status}
            user={props.user}
            setUserReacted={setUserReacted}
          />
        </Card>
      </Box>
    </div>
  );
}
