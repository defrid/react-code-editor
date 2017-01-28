import React, { PropTypes, Component } from 'react';

import styles from './StatusRow.css';

export default class StatusRow extends Component {

  static propTypes = {
    line: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired
  };

  render() {

    return (
      <div className={styles.root}>
        <div className={styles.info}>
          {this.props.line}:{this.props.column}
        </div>
      </div>
    );
  }
}
