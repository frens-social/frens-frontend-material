import { Box } from "@material-ui/core";
import React from "react";
import StatusCreator from "./statusCreator";

import Status from "./status";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      statuses: [],
    };
  }

  onNewFeedSelect = (event) => {
    this.setState({
      selectedFeed: event.target.value,
    });
  };

  componentDidMount() {
    fetch("http://localhost:4000/api/v1/feeds/public", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          statuses: data,
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { error, isLoaded, statuses } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Box
          display="flex"
          flexDirection="column"
          sx={{ width: "100%", m: 0, gap: 8 }}
        >
          <StatusCreator />
          <Box display="flex" flexDirection="column" sx={{ m: 0, gap: 0 }}>
            {statuses.map((status) => (
              <Status
                key={status.id}
                status={status}
                account={status.account}
              />
            ))}
          </Box>
        </Box>
      );
    }
  }
}

export default Feed;
