import React from "react";

import {
  Card,
  Button,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Box,
  ButtonGroup,
  IconButton,
} from "@material-ui/core";

import ImageIcon from "@mui/icons-material/Image";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function StatusCreator() {
  function handleSend() {
    fetch("http://localhost:4000/api/v1/statuses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        text: this.state.text,
        privacy: this.state.privacy,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.onSend(data);
        this.setState({
          text: "",
          image: null,
        });
      });
  }

  return (
    <Card
      style={{
        width: 450,
        padding: 8
      }}
    >
      <CardHeader
        title="Create Post"
        subheader="What's on your mind?"
        action={
          <IconButton>
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          multiline
          minRows={4}
          maxRows={32}
          //value={value}
          //onChange={handleChange}
          variant="outlined"
        />
      </CardContent>
      <CardActions>
        <ButtonGroup fullWidth>
          <Button startIcon={<UploadIcon />}>Upload</Button>
          <Button endIcon={<SendIcon />}>Send</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
