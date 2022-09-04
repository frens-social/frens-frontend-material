import React from "react";

import { Typography } from "@material-ui/core";

export default function StatusBody(props) {

    return (
        <div className="status-text" style={{ padding: "0px" }}>
            <Typography variant="b1" style={{ wordWrap: "break-word" }}>
                {props.status.text}
            </Typography>
        </div>
    );
}