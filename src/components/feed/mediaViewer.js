import { Backdrop, Box } from "@material-ui/core";
import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function StatusMediaViewer(props) {
  function handleBackdropClick() {
    console.log("Media viewer backdrop clicked. Closing media viewer.");
    props.setOpen(false);
  }

  function handleBackClick() {
    console.log("Media viewer back clicked. Decrementing media viewer index.");
    props.setIndex(props.index - 1);
  }

  function handleForwardClick() {
    console.log(
      "Media viewer forward clicked. Incrementing media viewer index."
    );
    props.setIndex(props.index + 1);
  }

  return (
    <Backdrop
      open={props.open}
      style={{ zIndex: 1000, backgroundColor: "rgba(0, 0, 0, 0.9)" }}
      onClick={handleBackdropClick}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
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
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          ))}
          <ArrowForwardIcon
            onClick={handleForwardClick}
            style={{ color: "white", cursor: "pointer", fontSize: "72px" }}
          />
        </Box>
      </div>
    </Backdrop>
  );
}
