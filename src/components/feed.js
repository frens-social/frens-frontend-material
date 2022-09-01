import { Box } from "@material-ui/core";
import React, { useEffect } from "react";

import Status from "./status";

export default function Feed(props) {
  const [statuses, setStatuses] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/feeds/" + props.feedType, {
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
      {statuses.map(
        (status) => (
          (<Status key={status.id} id={status.id} status={status} account={status.account} />)
        )
      )}
    </Box>
  );
}