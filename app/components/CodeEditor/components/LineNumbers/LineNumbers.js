import React, { PropTypes, Component } from 'react';

require('./LineNumbers.scss');

export default class LineNumbers extends Component {

  static propTypes = {
    totalLines: PropTypes.number.isRequired,
    scrollTop: PropTypes.number.isRequired
  };

  componentDidMount() {
    this.refs.numbers.scrollTop = this.props.scrollTop;
  }

  componentWillReceiveProps({scrollTop}) {
    if (this.props.scrollTop !== scrollTop) {
      this.refs.numbers.scrollTop = scrollTop;
    }
  }

  renderLineNumbers() {
    return Array.from(new Array(this.props.totalLines), (_, index) => <p key={index}>{++index}</p>);
  }

  render() {

    return (
      <div className="codeEditor__numbersColumn" ref="numbers">
        { this.renderLineNumbers() }
      </div>
    );
  }
}
