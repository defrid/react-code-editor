import React, { PropTypes, Component } from 'react';

import CodeLine from './components/CodeLine';
import TextInput from './components/TextInput';
import { _bindAll } from '~/utils';

require('./CodeArea.scss');

class CodeArea extends Component {

  constructor(props) {
    super(props);

    _bindAll(this, 'onClick')
  }


  onClick() {
    this.refs.textInput.getWrappedInstance().focus();
  }

  renderCodeLines() {
    return this.props.textLines.map((text, index) => {
      const lineProps = {
        key: index,
        text
      };
      return <CodeLine {...lineProps} />;
    });
  }

  /**
   * ToDo 1) render custom cursor for editor
   * ToDo 2) think about rendering custom input inside current line
   * ToDo choose one: either 1 or 2, 2 is better but need to do it quick
   */

  render() {
    const inputProps = {
      ref: 'textInput',
      onChange: this.onCharEnter,
      onKeyUp: this.onUpdate,
      onKeyDown: this.onUpdate
    };

    return (
      <div className="codeEditor__codeArea"
        onClick={this.onClick} >
        {this.renderCodeLines()}
        <TextInput {...inputProps} />
      </div>
    );
  }
}

CodeArea.propTypes = {
  textLines: PropTypes.array.isRequired,
  currentLine: PropTypes.number
};

export default CodeArea;
