import React, { Component, PropTypes } from 'react';

import LineNumbers from './components/LineNumbers';
import StatusRow from './components/StatusRow';
import CodeArea from './components/CodeAreaNoTextArea';

import styles from './CoreEditor.css';

export default class CodeEditor extends Component {

  static propTypes = {
    totalLines: PropTypes.number,
    position: PropTypes.object.isRequired
  };

  render() {
    const { position, totalLines, scrollOffset } = this.props;

    const lineNumbersProps = {
      totalLines,
      scrollOffset
    };

    const statusRowProps = {
      line: position.line + 1,
      column: position.column + 1
    };

    return (
      <div className={styles.editorWrapper}>
        <div className={styles.codeEditor}>
          <LineNumbers {...lineNumbersProps} />
          <CodeArea />
        </div>
        <StatusRow {...statusRowProps} />
      </div>
    );
  }
}
