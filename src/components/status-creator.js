import React from "react";

import {
  Card,
  FilledInput,
  IconButton,
  Box,
} from "@material-ui/core";

import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";

import "./status-creator.css";

class StatusCreator extends React.Component {
  render() {
    return (
      <Card className="status-creator-card">
        <FilledInput
          disableUnderline={true}
          inputProps={{ min: 0, style: { textAlign: "left" } }}
          multiline={true}
          fullWidth={true}
          placeholder="What's on your mind?"
          className="status-creator-input"
        />
        <Card>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="left-icons">
              <IconButton aria-label="Upload">
                <ImageIcon />
              </IconButton>
            </div>
            <div className="right-icons">
              <IconButton aria-label="Send" onClick={handleSend}>
                <SendIcon />
              </IconButton>
            </div>
          </Box>
        </Card>
      </Card>
    );
  }
}

function handleSend() {
  fetch("http://localhost:4000/api/v1/statuses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({
      status: document.querySelector(".status-creator-input").value,
    }),
  });
}

export default StatusCreator;
