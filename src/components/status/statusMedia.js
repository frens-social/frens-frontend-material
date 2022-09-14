import React from "react";

import { ImageList, ImageListItem, CardMedia } from "@material-ui/core";

export default function StatusMedia(props) {
  function calculateColumns(item_count) {
    if (item_count == 1) {
      return 4;
    } else if (item_count == 2) {
      return 2;
    } else if (item_count == 3) {
      return 1.33;
    } else if (item_count >= 4) {
      return 2;
    }
  }

  function calculateRows(item_count) {
    if (item_count == 1) {
      return 4;
    } else if (item_count == 2) {
      return 2;
    } else if (item_count == 3) {
      return 1.33;
    } else if (item_count >= 4) {
      return 2;
    }
  }

  return (
    <CardMedia>
      <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={121}>
        {props.media.map((item, index) => (
          <ImageListItem
            key={item.id}
            cols={calculateColumns(props.media.length)}
            rows={calculateRows(props.media.length)}
            onClick={() => props.handleMediaClick(props.status, index)}
            style={{ cursor: "pointer" }}
          >
            <img
              srcSet={`http://localhost:4000/api/v1/media/${item.id}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </CardMedia>
  );
}
