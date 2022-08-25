import React from "react";

import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

import "./account-card.css";

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
        <Card className="account-card">
          <CardContent className="account-card-content">
            <div
              className="account-card-image"
              style={{
                display: "flex",
                backgroundImage: `url(${account.avatar_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "50px",
                height: "50px",
              }}
            ></div>
            <Typography component="div" variant="h6">
              {account.username}
            </Typography>
          </CardContent>
        </Card>
      );
    }
  }
}

export default AccountCard;
