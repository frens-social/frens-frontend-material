import React from "react";

import Card from "@material-ui/core/Card";
import { IconButton, opover, Typography, Box, Avatar } from "@material-ui/core";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      image: null,
      optionsMenuOpen: false,
    };
  }

  displayOptionsMenu() {
    console.log("displayOptionsMenu");
  }

  render() {
    return (
      <Card style={{ marginBottom: "10px" }}>
        <div
          style={{ backgroundImage: `url(${this.props.account.banner_url})` }}
        >
          <Box display="flex" alignItems="center" flexWrap="wrap" sx={{ m: 0, p: 1, gap: 12 }}>
            <Avatar alt="desu" src={this.props.account.avatar_url} />
            <Typography variant="h6">{this.props.account.username}</Typography>
            <IconButton onClick={this.displayOptionsMenu} sx={{ marginLeft: "auto" }}>
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </div>

        <div className="status-text" style={{ padding: "15px" }}>
          <Typography variant="body1" style={{ wordWrap: "break-word" }}>{this.props.status.text}</Typography>
        </div>
      </Card>
    );
  }
}

export default Status;
