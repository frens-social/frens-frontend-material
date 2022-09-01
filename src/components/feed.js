import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import StatusCreator from "./statusCreator";

import Status from "./status";

export default function Feed() {
  const [statuses, setStatuses] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/feeds/public", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStatuses(data);
      });
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: "100%", m: 0, gap: 8 }}
    >
      <StatusCreator />
      {statuses.map(
        (status) => (
          console.log(status),
          (<Status key={status.id} id={status.id} status={status} account={status.account} />)
        )
      )}
    </Box>
  );
}

/*

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

          </Box>
        </Box>
      );
    }
  }
}

export default Feed;
*/
