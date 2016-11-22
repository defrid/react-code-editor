import React, { Component } from 'react';
import { last } from 'lodash/array';

import LineNumbers from './components/LineNumbers';
import StatusRow from './components/StatusRow';

import { _bindAll } from '~/utils';
require('./CoreEditor.scss');

let KEYWORDS = ['function', 'for', 'if', 'else'];

export default class CodeEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      line: 1,
      column: 1,
      totalLines: 1,
      scrollTop: 0,
      text: ''
    };

    _bindAll(this, 'onKeyPressed', 'onUpdate', 'onScroll');
  }

  componentDidMount() {
    this.refs.codeArea.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    this.refs.codeArea.removeEventListener('scroll', this.onScroll);
  }

  getEditorData() {
    const selection = document.getSelection();
    const node = selection.anchorNode;

    const text = node.textContent;
    const allLines = text.split('\n');
    const linesCount = allLines.length;

    // ToDo refactor this
    return {
      text,
      totalLines:
        (allLines.length !== 1 && last(allLines).length === 0)
          ? linesCount - 1
          : linesCount,
      selection
    }
  }

  getCaretPosition() {
    const { text, totalLines, selection } = this.getEditorData();

    const currentLine = text.slice(0, selection.focusOffset);
    const currentLines = currentLine.split('\n');
    const curLineLength = last(currentLines).length;

    return {
      text,
      totalLines,
      line: currentLines.length,
      column: curLineLength + 1,
      isLastLine: totalLines === currentLines.length
    }
  }

  setStatusCaretPosition() {
    const caretPosition = this.getCaretPosition();

    if (caretPosition === null) {
      return;
    }

    this.setState({...caretPosition});
  }

  markWords() {
    // TODO
    const delimiters = [' ', '.', '-', ',', '+', '!', '\r\n'];
    let text = this.state.text.split('\r\n,.!@#$%^&*();:"\'?');
    console.log(text);
  }

  // TODO
  handleTabPress() {
    const appendString = '    ';
    document.execCommand('insertHTML', false, appendString);
  }

  // ToDo fix bug with enter inside last line
  handleEnterPress() {
    // ToDo remove this or update component only here
    const caretPosition = this.getCaretPosition();

    let appendString;

    // if at the start of line or last line no need to insert double delimiter
    if (caretPosition && (caretPosition.column === 1 || !caretPosition.isLastLine)) {
      appendString = '\r\n';
    } else {
      appendString = '\r\n\r\n';
    }

    document.execCommand('insertHTML', false, appendString);
  }

  keyPressedManager(event) {
    const target = event.target;
    const key = event.keyCode;

    switch (key) {
      case 9:
        // tab
        event.preventDefault();
        this.handleTabPress();
        break;
      case 13:
        // enter
        event.preventDefault();
        this.handleEnterPress();
        break;
    }
  }

  onScroll(event) {
    const targetElement = event.target || event.srcElement;

    this.setState({
      scrollTop: targetElement.scrollTop
    });
  };

  onKeyPressed(event) {
    this.keyPressedManager(event);
    this.setStatusCaretPosition();
  }

  onUpdate(event) {
    this.setStatusCaretPosition();
  }

  render() {
    const { scrollTop, totalLines, line, column } = this.state;

    const lineNumbersProps = {
      totalLines,
      scrollTop
    };
    const statusRowProps = {
      line,
      column
    };

    return (
      <div className="editorWrapper">
        <div className="codeEditor">
          <LineNumbers {...lineNumbersProps} />
          <pre
            className="codeEditor__codeArea"
            ref="codeArea"
            contentEditable
            onKeyDown={this.onKeyPressed}
            // backspace key doesn't trigger keyDown, instead using keyUp to detect it
            onKeyUp={this.onUpdate}
            onClick={this.onUpdate}
          />
        </div>
        <StatusRow {...statusRowProps} />
      </div>
    );
  }
}
