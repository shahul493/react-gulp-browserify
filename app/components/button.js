import React from 'react';

export default class Button extends React.Component {
  static propTypes = {
    text: React.PropTypes.string,
    onClick: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <button
        onClick={this.props.onClick}
      >
        {this.props.text || this.props.children}
      </button>
    );
  }
};