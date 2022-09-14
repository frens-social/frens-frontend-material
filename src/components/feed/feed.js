import React, { useEffect } from "react";

import { Box } from "@material-ui/core";

import MediaViewer from "./mediaViewer";
import Status from "../status/status";

export default function Feed(props) {
  const [statuses, setStatuses] = React.useState([]);
  const [mediaViewerStatus, setMediaViewerStatus] = React.useState(null);
  const [mediaViewerOpen, setMediaViewerOpen] = React.useState(false);
  const [mediaViewerMediaIndex, setMediaViewerMediaIndex] = React.useState(0);

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

  function handleMediaClick(status, media_index) {
    console.log("Media clicked for status: " + status.id + " media index: " + media_index);
    console.log("Setting media viewer status to: " + status.id);
    setMediaViewerStatus(status);
    console.log("Setting media viewer media index to: " + media_index);
    setMediaViewerMediaIndex(media_index);
    console.log("Setting media viewer open to: true");
    setMediaViewerOpen(true);
  }

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
            handleMediaClick={handleMediaClick}
          />
        ))}
      </Box>
      <MediaViewer
        open={mediaViewerOpen}
        setOpen={setMediaViewerOpen}
        status={mediaViewerStatus}
        media={mediaViewerStatus ? mediaViewerStatus.media : []}
        index={mediaViewerMediaIndex}
        setIndex={setMediaViewerMediaIndex}
      />
    </div>
  );
}
