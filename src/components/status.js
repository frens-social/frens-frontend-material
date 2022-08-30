import React from "react";

import Card from "@material-ui/core/Card";
import {
  IconButton,
  Popover,
  Divider,
  Typography,
  Box,
  Avatar,
} from "@material-ui/core";

import StatusHeader from "./statusHeader";
import StatusOptionsMenu from "./statusOptionsMenu";
import StatusReactionButton from "./statusReactionButton";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      image: null,

      liked: false,
    };
  }

  render() {
    return (
      <Card style={{ marginBottom: "10px" }}>
        <StatusHeader id={this.props.status.id} account={this.props.account} />

        <div className="status-text" style={{ padding: "15px" }}>
          <Typography variant="body1" style={{ wordWrap: "break-word" }}>
            {this.props.status.text}
          </Typography>
        </div>

        <Divider />

        <div className="status-footer" style={{ padding: "15px" }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <StatusReactionButton />
          </Box>
        </div>
      </Card>
    );
  }
}

export default Status;
