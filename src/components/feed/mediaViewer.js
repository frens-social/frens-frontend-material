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
        <div onClick={e => e.stopPropagation()}>
        </div>
      </Backdrop>
    )
}