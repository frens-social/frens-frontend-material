import React, { useEffect } from "react";

import { Box } from "@material-ui/core";

import MediaViewer from "./mediaViewer";
import Status from "../status/status";

export default function Feed(props) {
  const [statuses, setStatuses] = React.useState([]);
  const [mediaViewerOpen, setMediaViewerOpen] = React.useState(false);

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
    <div>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: "100%", m: 0, gap: 8 }}
      >
        {statuses.map((status) => (
          <Status
            key={status.id}
            status={status}
            user={status.user}
            media={status.media}
            setMediaViewerOpen={setMediaViewerOpen}
          />
        ))}
      </Box>
      <MediaViewer open={mediaViewerOpen} setOpen={setMediaViewerOpen} />
    </div>
  );
}
