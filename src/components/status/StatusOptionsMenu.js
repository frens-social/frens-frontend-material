import React from "react";

import Card from "@material-ui/core/Card";
import { Box } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Popover, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function StatusOptionsMenu({ status, onDelete }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Card>
          <Box display="flex" flexDirection="column" p={2}>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => {
                onDelete(status);
                handleClose();
              }}
            >
              Delete
            </Button>
          </Box>
        </Card>
      </Popover>
    </div>
  );
}