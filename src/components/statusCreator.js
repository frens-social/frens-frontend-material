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
      <div>
        
      </div>
    );
  }
}

export default StatusCreator;
