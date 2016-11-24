import React, { PropTypes, Component } from 'react';

require('./CodeLine.scss');

export default class CodeLine extends Component {

  static propTypes = {
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <pre
        className="codeArea__codeLine"
        ref="codeLine">
        {this.props.text}
      </pre>
    );
  }
}
