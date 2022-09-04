import React, { useState, useEffect } from "react";

import { Box, Card, Typography } from "@material-ui/core";

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
    <Box
      display="flex"
      flexDirection="row"
      sx={{ width: "100%", m: 1, gap: 8 }}
    >
      {reactionCounts.map((reaction) => (
        <Card key={reaction.name}>
          <Box
            display="flex"
            flexDirection="row"
            sx={{ width: "100%", m: 1, gap: 8 }}
          >
            <Typography variant="body1"> {reaction.count} </Typography>
            <Emoji text={addColons(reaction.emoji)} />
          </Box>
        </Card>
      ))}
    </Box>
  );
}

function addColons(str) {
  return `:${str}:`;
}
