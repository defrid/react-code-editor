import { Map, fromJS } from 'immutable';

import {
  EDITOR_LINE_CHANGED, EDITOR_INSERT_NEW_LINE
} from '~/actions/editorActions';

const initialState = Map({
  textLines: ['']
});

// ToDo rewrite this shit completely
export default function editorReducer(state = initialState, action) {
  if (action.type === EDITOR_LINE_CHANGED) {
    const textLines = state.get('textLines');
    textLines[action.index] = action.text;

    return state.set('textLines', textLines);
  }

  // ToDo add focus change
  if (action.type === EDITOR_INSERT_NEW_LINE) {
    const textLines = state.get('textLines');

    return state.set('textLines', [...textLines, '']);
  }

  return state;
}
