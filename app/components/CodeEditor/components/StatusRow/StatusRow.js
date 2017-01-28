import React, { PropTypes, Component } from 'react';

import styles from './StatusRow.css';

export default class StatusRow extends Component {

  static propTypes = {
    line: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired
  };

  render() {

    return (
      <div className={styles.codeEditor__statusRow}>
        <div className={styles.statusRow__info}>
          {this.props.line}:{this.props.column}
        </div>
      </div>
    );
  }
}
