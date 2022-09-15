import React from "react";

import { Card, Box } from "@material-ui/core";

import DeleteIcon from "@mui/icons-material/Delete";
import ReportIcon from '@mui/icons-material/Report';

import StatusMedia from "./statusMedia";
import StatusBody from "./statusBody";
import StatusReactions from "./statusReactions";
import StatusFooter from "./footer/statusFooter";
import CardHeaderUser from "../cardHeaderUser";

export default function Status(props) {
  const [userHasReacted, setUserReacted] = React.useState(false);

  const menuButtons = [
    {
      icon: <DeleteIcon />,
      text: "Delete",
      onClick: () => {
        DeleteStatus();
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


  function DeleteStatus() {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
  
    fetch("http://localhost:4000/api/v1/statuses/" + props.status.id, {
      method: "DELETE",
      headers: headers,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }

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
