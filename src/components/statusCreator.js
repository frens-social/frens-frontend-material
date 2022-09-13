import React from "react";

import {
  Card,
  Button,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  CardMedia,
  ButtonGroup,
  IconButton,
} from "@material-ui/core";

import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function StatusCreator({setOpen}) {
  const [statusText, setStatusText] = React.useState("");
  const [statusMediaIDs, setStatusMediaIDs] = React.useState([]);

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
        setStatusMediaIDs([...statusMediaIDs, result.id]);
        console.log("Media ids are now: " + statusMediaIDs);
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
      media_ids: statusMediaIDs,
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


      // Close the status creator
      setStatusText("");
      setStatusMediaIDs([]);
      setOpen(false);
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
          value={statusText}
          variant="outlined"
        />
      </CardContent>

      <CardMedia component="img"/>

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
