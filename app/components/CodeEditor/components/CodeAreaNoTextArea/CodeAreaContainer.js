import React, { Component } from 'react';
import CodeArea from './CodeArea';
import {
  editorLineChanged, editorInsertNewLine
} from '~/actions/editorActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const editorReducerStore = state.get('editorReducer');

  return {
    textLines: editorReducerStore.get('textLines')
  };
};

const mapDispatchToProps = {
  onLineChanged: editorLineChanged,
  onInsertNewLine: editorInsertNewLine
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeArea);
