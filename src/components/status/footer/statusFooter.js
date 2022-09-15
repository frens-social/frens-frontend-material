import React from "react";

import { CardActions, Button, ButtonGroup } from "@material-ui/core";

import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import StatusFooterReactButton from "./statusFooterReactButton";

export default function StatusFooter(props) {
  return (
    <CardActions style={{ padding: "0px" }}>
      <ButtonGroup
        orientation="horizontal"
        variant="text"
        size="small"
        fullWidth={true}
      >
        <Button
          startIcon={<FormatQuoteOutlinedIcon />}
          onClick={(event) => {}}
        />
        <Button
          startIcon={<BookmarkBorderOutlinedIcon />}
          onClick={(event) => {}}
        />
        <Button
          startIcon={<StatusFooterReactButton />}
          onClick={(event) => {}}
        />
      </ButtonGroup>
    </CardActions>
  );
}
