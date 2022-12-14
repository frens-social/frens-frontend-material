import React from "react";

import {
  Backdrop,
  Fab,
} from "@material-ui/core";

import StatusCreator from "./statusCreator";

import AddIcon from "@mui/icons-material/Add";

export default function StatusCreatorFab() {
  const [open, setOpen] = React.useState(false);

  function handleFabClick() {
    setOpen(true);
  }

  function handleBackdropClick() {
    setOpen(false);
  }

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: "fixed", bottom: 32, right: 32 }}
        onClick={() => {
          handleFabClick();
        }}
      >
        <AddIcon />
      </Fab>
      <Backdrop
        open={open}
        style={{ zIndex: 1000 }}
        onClick={handleBackdropClick}
      >
        <div onClick={e => e.stopPropagation()}>
        <StatusCreator setOpen={setOpen} />
        </div>
      </Backdrop>
    </div>
  );
}
