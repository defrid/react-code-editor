import React, { PropTypes, Component } from 'react';

import styles from './CodeLine.css';

export default class CodeLine extends Component {

  static propTypes = {
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <pre
        className={styles.codeArea__codeLine}
        ref="codeLine">
        {this.props.text}
      </pre>
    );
  }
}
