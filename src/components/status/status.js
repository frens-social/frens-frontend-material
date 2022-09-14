import React from "react";

import Card from "@material-ui/core/Card";
import { ImageList, ImageListItem, Box, CardContent, CardActions, CardMedia } from "@material-ui/core";

import StatusHeader from "./statusHeader";
import StatusBody from "./statusBody";
import StatusReactions from "./statusReactions";
import StatusFooter from "./footer/statusFooter";

export default function Status(props) {
  const [userHasReacted, setUserReacted] = React.useState(false);

  return (
    <div>
      <Box display="flex" flexDirection="column" sx={{ width: "100%", gap: 4 }}>
        <Card>
          <StatusHeader status={props.status} onDelete={props.onDelete} />

          <CardContent>
            <StatusBody status={props.status} />
            <StatusReactions
              status={props.status}
              userHasReacted={userHasReacted}
              setUserReacted={setUserReacted}
              user={props.user}
            />
          </CardContent>

          <CardMedia>
            <ImageList
              sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {props.media.map((item) => (
                <ImageListItem
                  key={item.id}
                >
                  <img
                    srcSet={`http://localhost:4000/api/v1/media/${item.id}`}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </CardMedia>

          <CardActions>
            <StatusFooter
              status={props.status}
              user={props.user}
              setUserReacted={setUserReacted}
            />
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
