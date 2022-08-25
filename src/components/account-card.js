import React from "react";

import {
  Card,
  CardContent,
  Paper,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";

import "./account-card.css";

const styles = {
  paperContainer: {
    backgroundImage: `url("https://res.cloudinary.com/omaha-code/image/upload/ar_4:3,c_fill,dpr_1.0,e_art:quartz,g_auto,h_396,q_auto:best,t_Linkedin_official,w_1584/v1561576558/mountains-1412683_1280.png")`,
  },
};

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
        <Box className="account-card-container" style={styles.paperContainer}>
          <Grid container spacing={3} direction="row">
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
          </Grid>
        </Box>
      );
    }
  }
}

export default AccountCard;
