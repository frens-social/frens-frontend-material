import React from "react";

import {
  Card,
  Typography,
  Box,
  Avatar,
} from "@material-ui/core";

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
        <Card style={{
          backgroundImage: `url("https://res.cloudinary.com/omaha-code/image/upload/ar_4:3,c_fill,dpr_1.0,e_art:quartz,g_auto,h_396,q_auto:best,t_Linkedin_official,w_1584/v1561576558/mountains-1412683_1280.png")`,
        }}>
        <Box display="flex" alignItems="center" sx={{ m: 1, gap: 8 }}>
          <Avatar alt="desu" src={account.avatar_url} />
          <Typography variant="h6">{account.username}</Typography>
        </Box>
        </Card>
      );
    }
  }
}

export default AccountCard;
