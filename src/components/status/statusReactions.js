import React, { useState, useEffect } from "react";

import { Box, Badge, IconButton } from "@material-ui/core";

import Emoji from "react-emoji-render";

export default function StatusReactions(props) {
  const [reactionCounts, setReactionCounts] = useState([]);

  useEffect(() => {
    const url =
      "http://localhost:4000/api/v1/statuses/" +
      props.status.id +
      "/reactions/counts";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReactionCounts(data);
      });
  }, [props.userHasReacted]);

  return (
    <Box display="flex" 
    justifyContent="flex-end"
    flexDirection="row" style={{ gap: 16, marginRight: 16 }}>
      {reactionCounts.map((reaction) => (
          <Badge badgeContent={reaction.count} color="primary">
            <Emoji text={addColons(reaction.emoji)} />
          </Badge>
      ))}
    </Box>
  );
}

function addColons(str) {
  return `:${str}:`;
}
