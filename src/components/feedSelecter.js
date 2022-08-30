import React from 'react';

class FeedSelecter extends React.Component {
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
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        );
    }
}

export default FeedSelecter;