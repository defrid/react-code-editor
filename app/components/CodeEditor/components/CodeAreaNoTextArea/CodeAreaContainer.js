import React, { Component } from 'react';
import CodeArea from './CodeArea';
import {

} from '~/actions/editorActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const editorReducerStore = state.get('editorReducer');

  return {
    textLines: editorReducerStore.get('textLines').toArray(),
    currentLine: editorReducerStore.get('currentLine')
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeArea);