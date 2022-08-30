import React from "react";

import {
  Button,
  IconButton,
  Box,
  Card,
  Divider,
  TextField,
} from "@material-ui/core";

import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import SendIcon from "@mui/icons-material/Send";

class StatusCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        privacy: "public",
    };
  }

  handleSend() {
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

  render() {
    return (
      <Card style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ m: 0, p: 1, gap: 12 }}
          style={{ height: "100%", margin: "12px" }}
        >
          <TextField
            id="outlined-textarea"
            label="Whats new?"
            variant="outlined"
            multiline
            style={{ width: "100%" }}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
        </Box>
        <Divider />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ m: 0, p: 1, gap: 12 }}
        >
          <IconButton>
            <InsertPhotoOutlinedIcon />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={() => this.handleSend()}
          >
            Yeet
          </Button>
        </Box>
      </Card>
    );
  }
}

export default StatusCreator;
