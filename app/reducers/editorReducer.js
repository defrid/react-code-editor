import { fromJS } from 'immutable';

import {
  EDITOR_CHAR_ENTER, EDITOR_BACKSPACE_PRESS, EDITOR_INSERT_NEW_LINE
} from '~/actions/editorActions';
import {
  _mapActionsToReducer, _replaceAt
} from '~/utils';

const initialState = fromJS({
  textLines: [''],
  currentLine: 0
});

// ToDo add support of current caret position

export default _mapActionsToReducer(initialState, {
  [EDITOR_CHAR_ENTER]: (state, { char }) => {
    const currentLine = state.get('currentLine');
    const lines = state.get('textLines');
    const curLine = lines.get(currentLine);
    const updatedLines = lines.set(currentLine, curLine.concat(char));

    return state
      .set('textLines', updatedLines);
  },

  [EDITOR_INSERT_NEW_LINE]: (state) => {
    const textLines = state.get('textLines');
    const currentLine = state.get('currentLine');

    return state
      .set('currentLine', currentLine + 1)
      .set('textLines', textLines.insert(currentLine + 1, ''));
  },
  [EDITOR_BACKSPACE_PRESS]: (state) => {
    const currentLine = state.get('currentLine');
    const lines = state.get('textLines');
    const curLine = lines.get(currentLine);
    const updatedLines = lines.set(currentLine, _replaceAt(curLine, curLine.length - 1));

    return state
      .set('textLines', updatedLines);
  }
});
