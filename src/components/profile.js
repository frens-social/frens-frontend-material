import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box } from "@material-ui/core";

import ProfileHeader from "./profileHeader";
import Feed from "./feed";

export default function Profile() {
  let params = useParams();

  const feedType = "user/" + params.userId;
  const [account, setAccount] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/api/v1/accounts/" + params.userId;
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
      <ProfileHeader account={account} />
      <Feed feedType={feedType} />
    </Box>
  );
}
