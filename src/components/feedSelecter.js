import React from "react";

import { Card, Select, MenuItem, Typography } from "@material-ui/core";

class FeedSelecter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFeed: "home",
    };
  }

  handleChange = (event) => {
    this.setState({
      selectedFeed: event.target.value,
    });
  };

  render() {
    return (
      <Card style={{ height: "60px" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.selectedFeed}
          label="Feed"
          onChange={this.handleChange}
          style={{ width: "100%", height: "100%" }}
        >
          <MenuItem value={"home"}>
            <Typography variant="body1">Home</Typography>
          </MenuItem>
          <MenuItem value={"public"}>
            <Typography variant="body1">Public</Typography>
          </MenuItem>
          <MenuItem value={"federated"}>
            <Typography variant="body1">Federated</Typography>
          </MenuItem>
        </Select>
      </Card>
    );
  }
}

export default FeedSelecter;
