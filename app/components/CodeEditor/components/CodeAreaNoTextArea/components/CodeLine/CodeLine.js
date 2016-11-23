import React, { PropTypes, Component } from 'react';

require('./CodeLine.scss');
import { _bindAll } from '~/utils';

export default class CodeLine extends Component {

  static propTypes = {
    onInsertNewLine: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyUp: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string
  };

  constructor(props) {
    super(props);

    _bindAll(this, 'onChange', 'onKeyDown');
  }

  onChange(event) {
    this.props.onChange(event.target.textContent);
  }

  onKeyDown(event) {
    const key = event.keyCode;
    switch (key) {
      case 13:
        // enter
        event.preventDefault();
        return this.props.onInsertNewLine();
    }
  }

  render() {

    return (
      <pre
        className="codeArea__codeLine"
        contentEditable
        onKeyUp={this.onChange}
        onKeyDown={this.onKeyDown}
        onClick={this.props.onClick}
        value={this.props.text}
      />
    );
  }
}
