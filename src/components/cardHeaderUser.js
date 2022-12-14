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

  return (
    <div>
      <CardHeader
        avatar={
          <IconButton
            onClick={() => {
              navigate("/profile/" + props.user.id);
            }}
          >
            <Avatar src={props.user ? props.user.avatar_url : ""} />
          </IconButton>
        }
        title={
          <Typography variant="body1">
            {props.user ? props.user.display_name : ""}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="textSecondary">
            @{props.user ? props.user.username : ""}
          </Typography>
        }
        style={{
          //backgroundColor: "#bbbbbbbb",
          padding: "0px",
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
