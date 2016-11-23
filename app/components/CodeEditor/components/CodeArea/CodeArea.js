import React, { PropTypes, Component } from 'react';

import { _bindAll } from '~/utils';

require('./CodeArea.scss');

export default class CodeArea extends Component {

  static propTypes = {
    onScroll: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    onKeyUp: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    _bindAll(this, 'onScroll');
  }

  componentDidMount() {
    this.refs.codeArea.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    this.refs.codeArea.removeEventListener('scroll', this.onScroll);
  }

  onScroll(...args) {
    this.props.onScroll(...args);
  }

  render() {

    return (
      <pre
        className="codeEditor__codeArea"
        ref="codeArea"
        contentEditable
        onKeyDown={this.props.onKeyDown}
        // backspace key doesn't trigger keyDown, instead using keyUp to detect it
        onKeyUp={this.props.onKeyUp}
        onClick={this.props.onClick}
      />
    );
  }
}
