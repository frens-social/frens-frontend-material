import React from "react";

import {
  Divider,
  Button,
  Card,
  CardContent,
  Item,
  TextField,
  Grid,
} from "@material-ui/core";

import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="main-content">
        <Card className="left-panel">
          <CardContent>
            <Grid container spacing={3}>
              <AccountCard />
              <Navigation />
            </Grid>
          </CardContent>
        </Card>
        <Card className="middle-panel">
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <StatusCreator />
                <Feed />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className="right-panel">
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
}

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
      return <div>{account.username}</div>;
    }
  }
}

function Navigation() {
  return (
    <Card className="navigation-card">
      <CardContent className="navigation-card-content">NAVIGATION</CardContent>
    </Card>
  );
}

function StatusCreator() {
  return (
    <Card className="status-creator-card">
      <CardContent className="status-creator-card-content">
        STATUS CREATOR
      </CardContent>
    </Card>
  );
}

function Feed() {
  return (
    <Card className="feed-card">
      <CardContent className="feed-card-content">FEED</CardContent>
    </Card>
  );
}

export default Home;
