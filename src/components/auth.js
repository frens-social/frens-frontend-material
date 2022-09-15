import React from "react";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";

export default function Auth() {
  return (
    <div
      classname="Auth"
      style={{
        backgroundColor: "#23272A",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={{
          backgroundColor: "#23272A",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        sx={{ m: 1, gap: 24 }}
      >
        <Card style={{ width: "25%", height: "50%" }}>
          <CardHeader
            title={<Typography variant="h4">Frens.Moe</Typography>}
            subheader="A place for frens"
            style={{ textAlign: "center" }}
          />
          <CardContent>
            <Typography variant="body1">
              Frens.Moe is an experimental federated social network. Both the
              front-end and back-end are completely open source (MIT License),
              and you can find the code on GitHub.
              <br />
              <br />
              Please feel free to make an account, post memes, and make frens! Just be
              sure to report any bugs you find on our issues page.
              <br />
              <br />
              This is a work in progress, and is not ready for production use.
              If you'd like to help out, please feel free to contribute!
            </Typography>
          </CardContent>
          <CardMedia>
            <img
              src="https://i.kym-cdn.com/entries/icons/original/000/029/323/doggo.jpg"
              style={{ width: "100%" }}
            />
          </CardMedia>
        </Card>
        <Card
          sx={{
            width: "25%",
            height: "50%",
            backgroundColor: "#2F3136",
            borderRadius: "20px",
            boxShadow: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            m: 1,
          }}
        >
          <h1>Log in</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Log in</button>
        </Card>
      </Box>
    </div>
  );
}
