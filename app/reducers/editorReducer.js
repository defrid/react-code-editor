import { fromJS } from 'immutable';

import {
  EDITOR_CHAR_ENTER, EDITOR_BACKSPACE_PRESS, EDITOR_INSERT_NEW_LINE,
  EDITOR_ARROW_LEFT_PRESS, EDITOR_ARROW_UP_PRESS, EDITOR_ARROW_RIGHT_PRESS, EDITOR_ARROW_DOWN_PRESS,
  EDITOR_CODE_SCROLL
} from 'actions/editorActions';
import {
  _insertAt, _mapActionsToReducer, _removeAt
} from 'utils';

const initialState = fromJS({
  textLines: [''],
  position: {
    line: 0,
    column: 0
  },
  scrollOffset: 0
});


export default _mapActionsToReducer(initialState, {
  [EDITOR_CHAR_ENTER]: (state, { char }) => {
    const { line, column } = state.get('position').toObject();
    const lines = state.get('textLines');
    const curLine = lines.get(line);
    const updatedLines = lines.set(line, _insertAt(curLine, column, char));

    return state
      .set('textLines', updatedLines)
      .setIn(['position', 'column'], column + 1);
  },

  [EDITOR_INSERT_NEW_LINE]: (state) => {
    const { line, column } = state.get('position').toObject();
    const textLines = state.get('textLines');
    const curLine = textLines.get(line);
    const nextLine = curLine.substr(column);
    const newCurLine = curLine.substr(0, column);

    // split current line and place right part on the next line
    return state
      .setIn(['position', 'line'], line + 1)
      .setIn(['position', 'column'], 0)
      .set('textLines',
        textLines
          .set(line, newCurLine)
          .insert(line + 1, nextLine)
      );
  },

  [EDITOR_BACKSPACE_PRESS]: (state) => {
    const { line, column } = state.get('position').toObject();
    const lines = state.get('textLines');
    const curLine = lines.get(line);
    let updatedLines;

    // if start of the first line then nothing to delete
    if (column === 0 && line === 0) {
      return state;
    }

    // if not start of the line then just remove current char
    if (column > 0) {
      updatedLines = lines.set(line, _removeAt(curLine, column - 1));

      return state
        .set('textLines', updatedLines)
        .setIn(['position', 'column'], column - 1);
    }

    // else merge current line with previous and remove it
    const prevLine = lines.get(line - 1);
    const newLine  = prevLine.concat(curLine);
    updatedLines = lines.delete(line).set(line - 1, newLine);

    return state
      .set('textLines', updatedLines)
      .setIn(['position', 'line'], line - 1)
      .setIn(['position', 'column'], prevLine.length);
  },

  [EDITOR_ARROW_LEFT_PRESS]: (state) => {
    const { line, column } = state.get('position').toObject();

    // if not in the start of the line
    if (column > 0) {
      return state
        .setIn(['position', 'column'], column - 1);
    }

    // if start of the first line
    if (line === 0) {
      return state;
    }

    // in other cases set position to the end of the previous line
    const lines = state.get('textLines');
    const prevLine = lines.get(line - 1);

    return state
      .setIn(['position', 'line'], line - 1)
      .setIn(['position', 'column'], prevLine.length);
  },

  [EDITOR_ARROW_UP_PRESS]: (state) => {
    const { line, column } = state.get('position').toObject();

    // if first line
    if (line === 0) {
      return state;
    }

    const lines = state.get('textLines');
    const prevLine = lines.get(line - 1);

    // if previous line is bigger than current column just go to prev line
    if (prevLine.length >= column) {
      return state
        .setIn(['position', 'line'], line - 1);
    }

    // else put cursor to the end of prev line
    return state
      .setIn(['position', 'line'], line - 1)
      .setIn(['position', 'column'], prevLine.length);
  },

  [EDITOR_ARROW_RIGHT_PRESS]: (state) => {
    const { line, column } = state.get('position').toObject();
    const lines = state.get('textLines');
    const curLine = lines.get(line);

    // if not in the end of the line
    if (column < curLine.length) {
      return state
        .setIn(['position', 'column'], column + 1);
    }

    // if end of the last line
    if (line === lines.size - 1) {
      return state;
    }

    // in other cases set position to the start of the next line
    return state
      .setIn(['position', 'line'], line + 1)
      .setIn(['position', 'column'], 0);
  },

  [EDITOR_ARROW_DOWN_PRESS]: (state) => {
    const { line, column } = state.get('position').toObject();
    const lines = state.get('textLines');

    // if last line
    if (line === lines.size - 1) {
      return state;
    }

    // if previous line is bigger than current column just go to next line
    const nextLine = lines.get(line + 1);

    if (nextLine.length >= column) {
      return state
        .setIn(['position', 'line'], line + 1);
    }

    return state
      .setIn(['position', 'line'], line + 1)
      .setIn(['position', 'column'], nextLine.length);
  },

  [EDITOR_CODE_SCROLL]: (state, { scrollOffset }) => {
    return state.set('scrollOffset', scrollOffset);
  }
});
