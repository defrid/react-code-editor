import React, { PropTypes, Component } from 'react';

import CodeLine from './components/CodeLine';

require('./CodeArea.scss');

export default class CodeArea extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onInsertNewLine: PropTypes.func.isRequired,
    onLineChanged: PropTypes.func.isRequired,
    textLines: PropTypes.array.isRequired
  };

  onUpdate(index, event) {

  }

  onInsertNewLine(index) {
    this.props.onInsertNewLine(index);
  }

  onLineChanged(index, text) {
    this.props.onLineChanged(index, text);
  }

  renderCodeLines() {
    return this.props.textLines.map((text, index) => {
      const lineProps = {
        key: index,
        text,
        onInsertNewLine: this.onInsertNewLine.bind(this, index),
        onChange: this.onLineChanged.bind(this, index),
        onKeyUp: this.onUpdate.bind(this, index),
        onKeyDown: this.onUpdate.bind(this, index),
        onClick: this.onUpdate.bind(this, index)
      };

      return <CodeLine {...lineProps} />;
    });
  }

  render() {

    return (
      <div className="codeEditor__codeArea">
        {this.renderCodeLines()}
      </div>
    );
  }
}
