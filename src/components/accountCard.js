import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

import {
  Card,
  Typography,
  Box,
  Avatar,
  CardActionArea,
} from "@material-ui/core";

function AccountCard() {
  const [account, setAccount] = useState([]);
  const navigate = useNavigate();

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
  }
  , []);    

  return (
    <Card
      style={{
        backgroundImage: `url(${account.banner_url})`,
      }}
    >
      <CardActionArea onClick={() => navigate(`/profile/${account.id}`)}>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            padding: "10px",
          }}
        >
          <Box display="flex" alignItems="center" sx={{ m: 1, gap: 8 }}>
            <Avatar alt="desu" src={account.avatar_url} />
            <Typography variant="h6">{account.username}</Typography>
          </Box>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default AccountCard;
