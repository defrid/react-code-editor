import React, { PropTypes, Component } from 'react';

import charParams from 'const/charParams';

import styles from './Cursor.css';

const { width, height, horizontalOffset, verticalOffset } = charParams;

export default class Cursor extends Component {

  static propTypes = {
    position: PropTypes.object.isRequired
  };

  render() {
    const { line, column } = this.props.position;
    const lineHeight = (2 * verticalOffset) + height;

    const style = {
      top: lineHeight * line + verticalOffset,
      left: width * column + horizontalOffset,
      height
    };

    return (
      <div style={style} className={styles.root} />
    );
  }
}
