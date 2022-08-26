import { Card, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import React from "react";

function FeedSelecter() {
  return (
    <div>
      <Card>
      <FormControl variant="filled" sx={{ m: 1, minWidth: "100%" }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value="14"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Card>
    </div>
  );
}

function handleChange(event) {
  console.log(event.target.value);
}

export default FeedSelecter;
