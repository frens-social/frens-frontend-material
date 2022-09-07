import React, { useState } from "react";

import { Button, ButtonGroup } from "@material-ui/core";

import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import StatusFooterReactButton from "./statusFooterReactButton";

export default function StatusFooter(props) {
  return (
    <ButtonGroup
      orientation="horizontal"
      variant="text"
      fullWidth={true}
    >
      <Button startIcon={<ReplyOutlinedIcon />} onClick={(event) => {}} />
      <Button startIcon={<FormatQuoteOutlinedIcon />} onClick={(event) => {}} />
      <Button startIcon={<BookmarkBorderOutlinedIcon />} onClick={(event) => {}} />
      <Button startIcon={<StatusFooterReactButton />} onClick={(event) => {}} />
    </ButtonGroup>
  );
}
