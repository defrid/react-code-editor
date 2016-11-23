import React, { PropTypes, Component } from 'react';

require('./StatusRow.scss');

export default class StatusRow extends Component {

  static propTypes = {
    line: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired
  };

  render() {

    return (
      <div className="codeEditor__statusRow">
        <div className="statusRow__info">
          {this.props.line}:{this.props.column}
        </div>
      </div>
    );
  }
}
