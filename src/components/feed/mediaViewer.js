import { Backdrop } from "@material-ui/core";
import React from "react";

export default function StatusMediaViewer(props) {
  function handleBackdropClick() {
    console.log("Media viewer backdrop clicked. Closing media viewer.");
    props.setOpen(false);
  }

  return (
    <Backdrop
      open={props.open}
      style={{ zIndex: 1000 }}
      onClick={handleBackdropClick}
    >
      <div onClick={(e) => e.stopPropagation()}>
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
      </div>
    </Backdrop>
  );
}