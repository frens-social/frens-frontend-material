import React from "react";

import Card from "@material-ui/core/Card";
import { Box, Icon } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Popover, Divider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

class StatusOptionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: null,
    };
  }

  onDelete = () => {
    fetch("http://localhost:4000/api/status/" + this.props.id, {
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
    );
  }
}

export default StatusOptionsMenu;
