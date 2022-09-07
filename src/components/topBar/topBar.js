import React from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Box,
  Paper,
  IconButton,
  Avatar,
  ButtonGroup,
  InputBase,
  Divider,
} from "@material-ui/core";

import TopBarNavigation from "./topBarNavigation";
import TopBarSearch from "./topBarSearch";
import TopBarProfile from "./topBarProfile";

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        minWidth="auto"
        style={{ backgroundColor: "#5663F7" }}
      >
        <TopBarNavigation />
        <TopBarSearch />
        <TopBarProfile />
      </Box>
    </AppBar>
  );
}
