import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Avatar, Box, Card, Typography } from "@material-ui/core";

import Feed from "./feed";

export default function Profile() {
  let params = useParams();

  const [account, setAccount] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/api/v1/accounts/self";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAccount(data);
      });
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: "100%", m: 0, gap: 8 }}
    >
      <Card
        style={{
          height: 250,
          padding: 16,
          backgroundImage: `url(${account.banner_url})`,
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="flex-end"
          sx={{ width: "100%", height: "100%", m: 0, gap: 8 }}
        >
          <Avatar
            alt="desu"
            src={account.avatar_url}
            style={{ height: 100, width: 100 }}
          />
          <Typography variant="h6">Username Goes Here</Typography>
        </Box>
      </Card>
      <Feed />
    </Box>
  );
}
