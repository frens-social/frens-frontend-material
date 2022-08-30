import React from "react";

import {
    IconButton,
} from "@material-ui/core";

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

class StatusReactionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
    };
  }

    handleClick = (event) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    }

    handleClose = () => {
        this.setState({
            open: false,
        });
    }

    render() {
        return (
            <IconButton onClick={this.handleClick}>
                <InsertEmoticonIcon />
            </IconButton>
        );
    }
}

export default StatusReactionButton;