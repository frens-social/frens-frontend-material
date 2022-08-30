import React from "react";

import { Avatar, Typography, Card, Box } from "@material-ui/core";

import StatusOptionsMenu from "./statusOptionsMenu";

class StatusHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
        };
    }

  render() {
    return (
      <div style={{ backgroundImage: `url(${this.props.account.banner_url})` }}>
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
            <Typography variant="h6">{this.props.account.username}</Typography>
          </Box>
          <Box>
            <StatusOptionsMenu status={this.props.status} />
          </Box>
        </Box>
      </div>
    );
  }
}

export default StatusHeader;
