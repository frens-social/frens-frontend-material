import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

import {
  Card,
  Typography,
  Box,
  Avatar,
  CardActionArea,
} from "@material-ui/core";

function UserCard() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://localhost:4000/api/v1/users/self";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }
  , []);    

  return (
    <Card
      style={{
        backgroundImage: `url(${user.banner_url})`,
      }}
    >
      <CardActionArea onClick={() => navigate(`/users/${user.id}`)}>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            padding: "10px",
          }}
        >
          <Box display="flex" alignItems="center" sx={{ m: 1, gap: 8 }}>
            <Avatar alt="desu" src={user.avatar_url} />
            <Typography variant="h6">{user.username}</Typography>
          </Box>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default UserCard;
