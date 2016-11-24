import React, { Component } from 'react';
import TextInput from './TextInput';
import {
  editorCharEnter, editorBackspacePress, editorInsertNewLine
} from '~/actions/editorActions';
import { connect } from 'react-redux';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  onChar: editorCharEnter,
  onBackspace: editorBackspacePress,
  onInsertNewLine: editorInsertNewLine
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(TextInput);
