import React from "react";

import { Card, Typography, Box, Avatar } from "@material-ui/core";

class AccountCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      account: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/v1/accounts/self", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          account: data,
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { error, isLoaded, account } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Card
          style={{
            backgroundImage: `url(${account.banner_url})`,
          }}
        >
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
        </Card>
      );
    }
  }
}

export default AccountCard;
