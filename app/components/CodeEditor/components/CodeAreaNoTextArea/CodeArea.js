import React, { PropTypes, Component } from 'react';

import CodeLine from './components/CodeLine';
import TextInput from './components/TextInput';
import Cursor from './components/Cursor';
import { _bindAll } from 'utils';

import styles from './CodeArea.css';

export default class CodeArea extends Component {

  static propTypes = {
    textLines: PropTypes.array.isRequired,
    onScroll: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    _bindAll(this, 'onClick', 'onScroll');
  }


  onClick() {
    this.refs.textInput.getWrappedInstance().focus();
  }

  onScroll(event) {
    const targetElement = event.target || event.srcElement;

    this.props.onScroll(targetElement.scrollTop);
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

  render() {
    const inputProps = {
      ref: 'textInput',
      onChange: this.onCharEnter,
      onKeyUp: this.onUpdate,
      onKeyDown: this.onUpdate
    };

    return (
      <div
        className={styles.codeEditor__codeArea}
        onClick={this.onClick}
        onScroll={this.onScroll}
      >
        {this.renderCodeLines()}
        <TextInput {...inputProps} />
        <Cursor />
      </div>
    );
  }
}
