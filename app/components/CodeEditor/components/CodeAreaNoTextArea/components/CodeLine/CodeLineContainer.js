import React, { Component } from 'react';
import CodeLine from './CodeLine';
import { editorLineChanged } from '~/actions/editorActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeLine);
