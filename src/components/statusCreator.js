import React from 'react';

class StatusCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <textarea
            rows="4"
            cols="50"
            placeholder="What's on your mind?"
            value={this.props.status}
            onChange={this.props.onChange}
          />
        </div>
        <div>
          <button onClick={this.props.onClick}>Post</button>
        </div>
      </div>
    );
  }
}

export default StatusCreator;