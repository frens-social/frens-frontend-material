import React, { useState, useEffect } from "react";

import { Box, Card, CardContent, Typography } from "@material-ui/core";

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
  }, []);

  return (
    <Box display="flex" flexDirection="row" style={{ gap: "4px" }}>
      {reactionCounts.map((reaction) => (
        <Box display="flex" flexDirection="row" sx={{ width: "100%", gap: 8 }}>
          <Emoji text={addColons(reaction.emoji)} />
          <Typography variant="body4"> {reaction.count} </Typography>
        </Box>
      ))}
    </Box>
  );
}

function addColons(str) {
  return `:${str}:`;
}

function userHasReacted(status, emoji) {
  return false;
}
