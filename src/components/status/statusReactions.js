import React, { useState, useEffect } from "react";

import { Box, Badge, Typography } from "@material-ui/core";

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
        console.log(data);
        setReactionCounts(data);
      });
  }, [props.userReacted]);

  return (
    <Box display="flex" flexDirection="row" style={{ gap: 12 }}>
      {reactionCounts.map((reaction) => (
        <Box display="flex" flexDirection="row" sx={{ width: "100%", gap: 2 }}>
          <Badge badgeContent={reaction.count} color="primary">
            <Emoji text={addColons(reaction.emoji)} />
          </Badge>
        </Box>
      ))}
    </Box>
  );
}

function addColons(str) {
  return `:${str}:`;
}