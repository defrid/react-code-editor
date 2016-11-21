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

  generateLineNumbers() {
    //document.getElementsByClassName('codeEditor__container__lineNumbers').scrollTop = 50;

    return new Array(this.state.maxlines).join().split(',').map((item, index) => {

      return <p key={index}>{++index}</p>;
    });
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
    const appendString = '\t';
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
      case 9:
        //TODO
        //tab
        event.preventDefault();
        //this.onTabKey();
        //DEBUG KEY
        //this.markWords();
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
  }

  onUpdate = (event) => {
    this.setStatusCaretPosition();
  }

  render() {

    return (
      <div className="codeEditor">
        <div className="codeEditor__container">
          <div className="codeEditor__container__lineNumbers">
            { this.generateLineNumbers() }
          </div>
          <pre
            className="codeEditor__container__editableArea"
            contentEditable
            onKeyDown={this.onKeyPressed}
            onKeyUp={this.onUpdate}
            onClick={this.onUpdate}
          />
        </div>

        <div className="codeEditor__statusBar__container">
          <div className="codeEditor__statusBar__container__position">
            {this.state.line}:{this.state.column}
          </div>
        </div>
      </div>
    );
  }
}
