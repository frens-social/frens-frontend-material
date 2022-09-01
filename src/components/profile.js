import React from "react";
import { useParams } from "react-router-dom";

import { Card, Typography } from "@material-ui/core";

export default function Profile() {
  let params = useParams();
  return (
    <Card>
      <Typography variant="h5">Profile</Typography>
      <Typography variant="body1">Profile ID: {params.profileId}</Typography>
    </Card>
  );
}
