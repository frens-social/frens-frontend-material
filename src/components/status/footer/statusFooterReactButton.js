import React, { useState } from "react";

import { Box, IconButton, Popover } from "@material-ui/core";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";

export default function StatusFooterReactButton(props) {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const buttonSize = "40px";

  return (
    <div>
      {!props.userHasReacted ? (
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            console.log("Opening emoji picker");
            setAnchorEl(event.currentTarget);
            setEmojiPickerOpen(true);
          }}
          style={{ width: buttonSize, height: buttonSize }}
        >
          <AddReactionOutlinedIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            console.log("Removing reaction");
            props.removeReaction();
          }}
          style={{ width: buttonSize, height: buttonSize }}
        >
          <AddReactionOutlinedIcon />
        </IconButton>
      )}

<Popover
        open={emojiPickerOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Picker
          data={data}
          autofocus={true}
          previewPosition="none"
          onEmojiSelect={(emoji) => {
            fetch(
              "http://localhost:4000/api/v1/statuses/" +
                props.status.id +
                "/reactions",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                  emoji: emoji.id,
                }),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
            setEmojiPickerOpen(false);
            props.setUserReacted(true);
          }}
          onClickOutside={() => {
            setEmojiPickerOpen(false);
          }}
        />
      </Popover>
    </div>
  );
}
