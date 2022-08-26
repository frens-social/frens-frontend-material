import React from "react";

import Card from "@material-ui/core/Card";
import { Avatar } from "@material-ui/core";

function Status(props) {
    return (
        <Card>
            <Avatar src={props.status.account.avatar_url} />
            <div className="status" style={{ padding: "15px" }}>
                {props.status.text}
            </div>
        </Card>
    );
}

export default Status;