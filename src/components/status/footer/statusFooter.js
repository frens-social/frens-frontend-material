import React, { useState } from "react";

import { Box, IconButton, Popover } from "@material-ui/core";

import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import StatusFooterReactButton from "./statusFooterReactButton";

export default function StatusFooter(props) {
  const buttonSize = "40px";

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      sx={{ width: "100%", m: 0, p: 0, gap: 8 }}
    >

      <IconButton style={{ width: buttonSize, height: buttonSize }}>
        <BookmarkBorderOutlinedIcon />
      </IconButton>

      <IconButton style={{ width: buttonSize, height: buttonSize }}>
        <FormatQuoteOutlinedIcon />
      </IconButton>

      <IconButton style={{ width: buttonSize, height: buttonSize }}>
        <ReplyOutlinedIcon />
      </IconButton>

      <StatusFooterReactButton
        status={props.status}
        userHasReacted={props.userHasReacted}
        setUserReacted={props.setUserReacted}
      />
    </Box>
  );
}
