import React from "react";

import { Box } from "@material-ui/core";

import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';



export default function StatusInteractionsMenu(props) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-around" sx={{ width: "100%", m: 1, gap: 8 }}>
        <AddReactionOutlinedIcon />
        <FormatQuoteOutlinedIcon />
        <ReplyOutlinedIcon />
    </Box>
  );
}
