import React, { Component } from 'react';

let KEYWORDS = ['function', 'for', 'if', 'else'];

export default class CodeEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      line: 1,
      column: 1,
      maxlines: 1,
      lineLength: 0,
      text: ''
    };
  }

  componentDidMount() {
    this.refs.textArea.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    this.refs.textArea.removeEventListener('scroll', this.onScroll);
  }

  onScroll = (event) => {
    var targetElement = event.target || event.srcElement;
    var scrollOffset = targetElement.scrollTop;

    this.refs.rowArea.scrollTop = scrollOffset;
  }

  generateLineNumbers() {
    return Array.from(new Array(this.state.maxlines), (_, index) => <p key={index}>{++index}</p>);
  }

  getCaretPosition() {
    const selection = document.getSelection();
    const node = selection.anchorNode;

    if (node.length === undefined) {

      return null;
    }

    const text = node.textContent.slice(0, selection.focusOffset);
    const carriesCount = node.textContent.split('\n').length;

    const textLinesArray = text.split('\n');
    const curLineLength = text.split('\n').pop().length;

    return {
      text: node.textContent,
      maxlines: curLineLength == 0 ? carriesCount - 1: carriesCount,
      line: textLinesArray.length,
      lineLength: curLineLength,
      column: textLinesArray.pop().length + 1
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
    //TODO
    const delimiters = [" ", ".", "-", ",", "+", "!", "\r\n"];
    let text = this.state.text.split('\r\n,.!@#$%^&*();:"\'?');
    console.log(text);
  }

  onTabKey() {
    //TODO
    const appendString = '    ';
    document.execCommand('insertHTML', false, appendString);
  }

  onKeyEnter() {
    const caretPosition = this.getCaretPosition();

    let appendString = '\r\n\r\n';

    if (caretPosition !== null) {
      if (caretPosition.lineLength == 0) {
        appendString = '\r\n';
      }
    }

    document.execCommand('insertHTML', false, appendString);
  }

  keyPressedManager(event) {
    const target = event.target;
    const key = event.keyCode;

    switch (key) {
      case 8:
        //backspace
        this.generateLineNumbers();
        break;
      case 9:
        //tab
        event.preventDefault();
        this.onTabKey();
        break;
      case 13:
        //enter
        event.preventDefault();
        this.onKeyEnter();
        this.generateLineNumbers();
        break;
    }
  }

  onKeyPressed = (event) => {
    this.keyPressedManager(event);
    this.setStatusCaretPosition();
  };

  onUpdate = (event) => {
    this.setStatusCaretPosition();
  };

  render() {

    return (
      <div className="codeEditor">
        <div className="codeEditor__rows">
          <div className="codeEditor__rows__number" ref="rowArea">
            { this.generateLineNumbers() }
          </div>
          <pre
            className="codeEditor__rows__text"
            ref="textArea"
            contentEditable
            onKeyDown={this.onKeyPressed}
            onKeyUp={this.onUpdate}
            onClick={this.onUpdate}
          />
        </div>

        <div className="codeEditor__status">
          <div className="codeEditor__status__info">
            {this.state.line}:{this.state.column}
          </div>
        </div>
      </div>
    );
  }
}
