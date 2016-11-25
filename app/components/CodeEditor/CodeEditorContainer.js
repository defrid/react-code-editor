import React, { Component } from 'react';
import CodeEditor from './CodeEditor';
import {

} from '~/actions/editorActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const editorReducerStore = state.get('editorReducer');

  return {
    totalLines: editorReducerStore.get('textLines').size,
    position: editorReducerStore.get('position').toObject(),
    scrollOffset: editorReducerStore.get('scrollOffset')
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
