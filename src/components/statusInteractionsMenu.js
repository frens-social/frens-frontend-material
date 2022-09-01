import React from "react";

import { Box, IconButton } from "@material-ui/core";

import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

export default function StatusInteractionsMenu(props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      sx={{ width: "100%", m: 0, gap: 8 }}
    >
      <IconButton>
        <AddReactionOutlinedIcon />
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
