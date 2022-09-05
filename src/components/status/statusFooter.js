import React, { useState } from "react";

import { Box, IconButton, Popover } from "@material-ui/core";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

export default function StatusFooter(props) {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const buttonSize = "40px";

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      sx={{ width: "100%", m: 0, p: 0, gap: 8 }}
    >
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

      <IconButton style={{ width: buttonSize, height: buttonSize }}>
        <BookmarkBorderOutlinedIcon />
      </IconButton>

      <IconButton style={{ width: buttonSize, height: buttonSize }}>
        <FormatQuoteOutlinedIcon />
      </IconButton>

      <IconButton style={{ width: buttonSize, height: buttonSize }}>
        <ReplyOutlinedIcon />
      </IconButton>

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
    </Box>
  );
}
