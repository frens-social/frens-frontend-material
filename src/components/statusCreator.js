import React from "react";

import {
  Card,
  Button,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Box,
  CardMedia,
  ButtonGroup,
  IconButton,
} from "@material-ui/core";

import ImageIcon from "@mui/icons-material/Image";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function StatusCreator() {
  const [statusText, setStatusText] = React.useState("");
  const [statusImageURL, setStatusImageURL] = React.useState(null);

  function handleUploadMedia(event) {
    var headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));

    var formdata = new FormData();
    formdata.append("file", event.target.files[0]);

    fetch("http://localhost:4000/api/v1/media", {
      method: "POST",
      headers: headers,
      body: formdata,
      redirect: "follow",
  })
      .then((response) => response.json())
      .then((result) => {
        setStatusImageURL("http://localhost:4000/api/v1/media/" + result.id);
      })
      .catch((error) => console.log("error", error));
  }

  function handleCreateStatus() {
    var headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));

    var body = JSON.stringify({
      text: statusText,
      privacy: "public",
    });

    var requestOptions = {
      method: "POST",
      headers: headers,
      body: body,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/v1/statuses", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
    }

    function handlePublishDraft() {
      var headers = new Headers();
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
  
      var body = JSON.stringify({
        text: statusText,
        privacy: "public",
      });
  
      var requestOptions = {
        method: "POST",
        headers: headers,
        body: body,
        redirect: "follow",
      };
  
      fetch("http://localhost:4000/api/v1/statuses", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
      }

  return (
    <Card
      style={{
        width: 450,
        padding: 8,
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
          onChange={(event) => setStatusText(event.target.value)}
          variant="outlined"
        />
      </CardContent>

      <CardMedia component="img" image={statusImageURL} />

      <CardActions>
        <ButtonGroup fullWidth>
          <Button startIcon={<UploadIcon />} component="label">
            Upload
            <input type="file" hidden onChange={handleUploadMedia} />
          </Button>
          <Button endIcon={<SendIcon />} onClick={handleCreateStatus}>
            {" "}
            Send{" "}
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
