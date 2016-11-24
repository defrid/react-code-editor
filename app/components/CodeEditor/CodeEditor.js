import React, { Component, PropTypes } from 'react';

import LineNumbers from './components/LineNumbers';
import StatusRow from './components/StatusRow';
import CodeArea from './components/CodeAreaNoTextArea';

import { _bindAll } from '~/utils';
require('./CoreEditor.scss');

export default class CodeEditor extends Component {

  static propTypes = {
    totalLines: PropTypes.number
  };

  constructor(props) {
    super(props);

    _bindAll(this);
  }

  render() {
    const { totalLines } = this.props;

    const lineNumbersProps = {
      totalLines
    };

    // ToDo get this values from props in container
    const statusRowProps = {
      line: 1,
      column: 1
    };

    return (
      <div className="editorWrapper">
        <div className="codeEditor">
          <LineNumbers {...lineNumbersProps} />
          <CodeArea />
        </div>
        <StatusRow {...statusRowProps} />
      </div>
    );
  }
}
