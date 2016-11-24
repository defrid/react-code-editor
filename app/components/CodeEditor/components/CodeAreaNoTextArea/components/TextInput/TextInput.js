import React, { PropTypes, Component } from 'react';

require('./TextInput.scss');
import { _bindAll, _isCharacterKeyEvent } from '~/utils';
import keyConstants from '~/const/keyConstants';

const {
  BACKSPACE_KEY, TAB_KEY, ENTER_KEY
} = keyConstants;

export default class TextInput extends Component {

  static propTypes = {
    onInsertNewLine: PropTypes.func.isRequired,
    onChar: PropTypes.func.isRequired,
    onBackspace: PropTypes.func.isRequired,
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

    switch (key) {
      case BACKSPACE_KEY:
        event.preventDefault();
        this.props.onBackspace();
        break;
      case TAB_KEY:
        event.preventDefault();
        console.log('TAB_KEY');
        break;
      case ENTER_KEY:
        event.preventDefault();
        this.props.onInsertNewLine();
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
