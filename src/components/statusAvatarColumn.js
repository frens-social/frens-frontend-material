import React from "react";

import { Box, Avatar } from "@material-ui/core";

export default function StatusAvatarColumn(props) {
  return (
    <Box>
          <Avatar alt="desu" src={props.user.avatar_url} />
    </Box>
  )
}
