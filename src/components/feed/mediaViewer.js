import React from "react";

import { Card, Backdrop, Box, CardHeader, Avatar } from "@material-ui/core";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function StatusMediaViewer(props) {
  function handleBackdropClick(event) {
    console.log("Media viewer backdrop clicked. Closing media viewer.");
    if (event.target === event.currentTarget) {
      props.setOpen(false);
    }
  }

  function handleBackClick() {
    console.log("Media viewer back clicked. Decrementing media viewer index.");
    if (props.index > 0) {
      props.setIndex(props.index - 1);
    }
  }

  function handleForwardClick() {
    console.log(
      "Media viewer forward clicked. Incrementing media viewer index."
    );
    if (props.index < props.media.length - 1) {
      props.setIndex(props.index + 1);
    }
  }

  return (
    <Backdrop
      className="media-viewer-backdrop"
      open={props.open}
      style={{ zIndex: 1000, backgroundColor: "rgba(0, 0, 0, 0.9)" }}
    >
      <Box
        display="flex"
        flexDirection="row"
        sx={{ width: "100%", height: "100%"}}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          flexGrow={1}
          onClick={(e) => handleBackdropClick(e)}
        >
          <ArrowBackIcon
            onClick={handleBackClick}
            style={{ color: "white", cursor: "pointer", fontSize: "72px" }}
          />
          {props.media.map((media, index) => (
            <img
              key={index}
              src={`http://localhost:4000/api/v1/media/${media.id}`}
              style={{
                display: index === props.index ? "block" : "none",
                maxWidth: "75%",
              }}
            />
          ))}
            <ArrowForwardIcon
              onClick={handleForwardClick}
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "72px",
                display: "block",
              }}
            />
        </Box>
        <Card
          style={{
            width: "450px",
          }}
        >
      <CardHeader
        avatar=<Avatar/>
        title="Media Viewer"
        subheader="View media in a larger format."
      />
        </Card>
      </Box>
    </Backdrop>
  );
}
