import React, { useState } from "react";

import { Box, IconButton, Popover } from "@material-ui/core";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

export default function StatusInteractionsMenu(props) {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [text, setText] = useState("");

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      sx={{ width: "100%", m: 0, gap: 8 }}
    >
      
      
      
      <IconButton onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}>
        <AddReactionOutlinedIcon />
        <Popover
          open={emojiPickerOpen}
          anchorEl={document.getElementById("status-interactions-menu")}
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
            onSelect={(emoji) => setText(text + emoji.native)}
          />
        </Popover>
      </IconButton>



      <IconButton>
        <BookmarkBorderOutlinedIcon />
      </IconButton>
      
      
      
      <IconButton>
        <FormatQuoteOutlinedIcon />
      </IconButton>
      
      
      
      <IconButton>
        <ReplyOutlinedIcon />
      </IconButton>
    
    
    
    </Box>
  );
}

function handleOnEnter(text) {
  console.log("enter", text);
}
