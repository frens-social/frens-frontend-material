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
        <div
          style={{ backgroundImage: `url(${this.props.account.banner_url})` }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Box
              display="flex"
              alignItems="center"
              flexWrap="wrap"
              sx={{ m: 0, p: 1, gap: 12 }}
            >
              <Avatar alt="desu" src={this.props.account.avatar_url} />
              <Typography variant="h6">
                {this.props.account.username}
              </Typography>
            </Box>
            <Box>
              <StatusOptionsMenu status={this.props.status} />
            </Box>
          </Box>
        </div>

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
