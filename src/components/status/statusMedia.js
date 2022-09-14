import React from "react";

import {
  ImageList,
  ImageListItem,
  Box,
  CardContent,
  CardActions,
  CardMedia,
} from "@material-ui/core";

export default function StatusMedia(props) {

    function calculateColumns(item_count){
        // 1 equals 4
        // 2 equals 2
        // 3 equals 1.33
        // 4 should be 2
        // 5 should be 1.6

        if (item_count == 1){
            return 4
        }
        else if (item_count == 2){
            return 2
        }
        else if (item_count == 3){
            return 1.33
        }
        else if (item_count == 4){
            return 2
        }
        else if (item_count == 5){
            return 1.6
        }
        else if (item_count == 6){
            return 2
        }
        else if (item_count == 7){
            return 1.6
        }
    }

    function calculateRows(item_count){

        if (item_count == 1){
            return 4
        }
        else if (item_count == 2){
            return 2
        }
        else if (item_count == 3){
            return 1.33
        }
        else if (item_count == 4){
            return 2
        }
        else if (item_count == 5){
            return 1.6
        }
        else if (item_count == 6){
            return 2
        }
        else if (item_count == 7){
            return 1.6
        }
    }

  return (
    <CardMedia>
      <ImageList
        sx={{ width: 500, height: 450 }}
        cols={4}
        rowHeight={121}
      >
        {props.media.map((item) => (
          <ImageListItem
            key={item.id}
            cols={calculateColumns(props.media.length)}
            rows={calculateRows(props.media.length)}
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