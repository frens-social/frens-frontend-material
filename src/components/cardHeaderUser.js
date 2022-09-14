import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Popover,
  Button,
  CardHeader,
  IconButton,
  Avatar,
  Typography,
  ButtonGroup,
} from "@material-ui/core";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function CardHeaderprops(props) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  function DeleteStatus() {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));

    fetch("http://localhost:4000/api/v1/statuses/" + props.status.id, {
      method: "DELETE",
      headers: headers,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));

    //onDelete(status.id);
  }

  return (
    <div>
      <CardHeader
        avatar={
          <IconButton
            onClick={() => {
              navigate("/profile/" + props.user.id);
            }}
            style={{ padding: 0 }}
          >
            <Avatar src={props.user ? props.user.avatar_url : ""} />
          </IconButton>
        }
        title={
          <Typography variant="h6">
            {props.user ? props.user.display_name : ""}
          </Typography>
        }
        subheader=<Typography variant="body2">
          {props.user ? "@" + props.user.username : ""}
        </Typography>
        style={{
          backgroundColor: "#bbbbbbbb",
        }}
        action={
          <div>
            <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
              <MoreHorizIcon />
            </IconButton>
            <Popover
              open={menuOpen}
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <ButtonGroup
                orientation="vertical"
                variant="text"
                size="large"
                fullWidth={true}
              >
                {props.menuButtons.map((button) => (
                  <Button
                    startIcon={button.icon}
                    onClick={() => {
                      button.onClick();
                      setAnchorEl(null);
                    }}
                    style={{ textTransform: "none" }}
                  >
                    {button.text}
                  </Button>
                ))}
              </ButtonGroup>
            </Popover>
          </div>
        }
      />
    </div>
  );
}
