import React from "react";

import Card from "@material-ui/core/Card";
import { Box } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Popover, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

class StatusOptionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
    };
  }

  toggleOpen = (event) => {
    this.setState({
      open: !this.state.open,
      anchorEl: event.currentTarget,
    });
  };

  onDelete = () => {
    fetch("http://localhost:4000/api/v1/statuses/" + this.props.status.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).catch((err) => {
      console.log(err);
    });
  };

  render() {
    return (
      <IconButton
        onClick={this.toggleOpen}
        sx={{ marginLeft: "auto", backgroundColor: "black" }}
        style={{ minWidth: "15px", maxWidth: "15px", minHeight: "15px", maxHeight: "15px" }}
      >
        <MoreHorizIcon />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Card>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Button onClick={this.onDelete}>
                  <DeleteIcon />
                  <Typography variant="body1">Delete</Typography>
                </Button>
              </Box>
            </Box>
          </Card>
        </Popover>
      </IconButton>
    );
  }
}

export default StatusOptionsMenu;