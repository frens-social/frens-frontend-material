import React from "react";

import Card from "@material-ui/core/Card";
import {
  IconButton,
  Divider,
  Typography,
  Box,
  Avatar,
} from "@material-ui/core";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ReplyIcon from "@mui/icons-material/Reply";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      text: "",
      image: null,

      optionsMenuOpen: false,

      liked: false,
    };
  }

  displayOptionsMenu() {
    console.log("displayOptionsMenu");
  }

  likeStatus() {
    fetch("localhost:3000/api/statuses/" + this.props.status.id + "/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.setState({
      liked: true,
    });
  }

  render() {
    return (
      <Card style={{ marginBottom: "10px" }}>
        <div
          style={{ backgroundImage: `url(${this.props.account.banner_url})` }}
        >
          <Box display="flex" alignItems="center" justifyContent={ "space-between" }>
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
              <IconButton
                flex-grow={2}
                onClick={this.displayOptionsMenu}
                sx={{ marginLeft: "auto" }}
              >
                <MoreHorizIcon />
              </IconButton>
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
            <IconButton onClick={this.likeStatus}>
              <FavoriteBorderIcon />
            </IconButton>

            <IconButton>
              <BookmarkBorderIcon />
            </IconButton>

            <IconButton>
              <AddReactionIcon />
            </IconButton>

            <IconButton>
              <FormatQuoteIcon />
            </IconButton>

            <IconButton>
              <ReplyIcon />
            </IconButton>
          </Box>
        </div>
      </Card>
    );
  }
}

function header() {
  return (
    <div className="status-header">
      <div className="status-header-left">
        <Avatar alt="desu" src={this.props.account.avatar_url} />
        <Typography variant="h6">{this.props.account.username}</Typography>
      </div>
      <div className="status-header-right">
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Status;
