import React, { PropTypes, Component } from 'react';

import { _bindAll, _isCharacterKeyEvent } from '~/utils';
import keyConstants from '~/const/keyConstants';

require('./TextInput.scss');

const {
  BACKSPACE_KEY, TAB_KEY, ENTER_KEY,
  ARROW_LEFT_KEY, ARROW_UP_KEY, ARROW_RIGHT_KEY, ARROW_DOWN_KEY
} = keyConstants;

export default class TextInput extends Component {

  static propTypes = {
    onInsertNewLine: PropTypes.func.isRequired,
    onChar: PropTypes.func.isRequired,
    onBackspace: PropTypes.func.isRequired,
    onArrow: PropTypes.func.isRequired,
    text: PropTypes.string
  };

  constructor(props) {
    super(props);

    _bindAll(this, 'onChange', 'onKeyDown');
  }

  focus() {
    this.refs.textInput.focus();
  }

  onChange(event) {
    event.preventDefault();
    if (_isCharacterKeyEvent(event.key)) {
      this.props.onChar(event.key);
    }
  }

  onKeyDown(event) {
    const key = event.keyCode;
    event.preventDefault();

    switch (key) {
      case BACKSPACE_KEY:
        this.props.onBackspace();
        break;
      case TAB_KEY:
        console.log('TAB_KEY');
        break;
      case ENTER_KEY:
        this.props.onInsertNewLine();
        break;
      case ARROW_LEFT_KEY:
      case ARROW_UP_KEY:
      case ARROW_RIGHT_KEY:
      case ARROW_DOWN_KEY:
        this.props.onArrow(key);
        break;
    }
  }

  render() {

    return (
      <input
        className="codeArea__textInput"
        ref="textInput"
        onKeyUp={this.onChange}
        onKeyDown={this.onKeyDown}
        value={this.props.text}
      />
    );
  }
}
