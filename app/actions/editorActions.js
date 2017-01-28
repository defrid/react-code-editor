export const EDITOR_CHAR_ENTER = 'EDITOR_CHAR_ENTER';
export const EDITOR_BACKSPACE_PRESS = 'EDITOR_BACKSPACE_PRESS';
export const EDITOR_INSERT_NEW_LINE = 'EDITOR_INSERT_NEW_LINE';
export const EDITOR_ARROW_LEFT_PRESS = 'EDITOR_ARROW_LEFT_PRESS';
export const EDITOR_ARROW_UP_PRESS = 'EDITOR_ARROW_UP_PRESS';
export const EDITOR_ARROW_RIGHT_PRESS = 'EDITOR_ARROW_RIGHT_PRESS';
export const EDITOR_ARROW_DOWN_PRESS = 'EDITOR_ARROW_DOWN_PRESS';
export const EDITOR_CODE_SCROLL = 'EDITOR_CODE_SCROLL';

// ToDo split actions to keyboard action and others, no eto pzc kak mutorno

import keyConstants from 'const/keyConstants';
const {
  ARROW_LEFT_KEY,
  ARROW_UP_KEY,
  ARROW_RIGHT_KEY,
  ARROW_DOWN_KEY
} = keyConstants;

export function editorCharEnter(char) {
  return {
    type: EDITOR_CHAR_ENTER,
    char
  };
}

export function editorInsertNewLine() {
  return {
    type: EDITOR_INSERT_NEW_LINE
  };
}

export function editorBackspacePress() {
  return {
    type: EDITOR_BACKSPACE_PRESS
  };
}

export function editorArrowPress(direction) {
  let type;
  switch (direction) {
    case ARROW_LEFT_KEY:
      type = EDITOR_ARROW_LEFT_PRESS;
      break;
    case ARROW_UP_KEY:
      type = EDITOR_ARROW_UP_PRESS;
      break;
    case ARROW_RIGHT_KEY:
      type = EDITOR_ARROW_RIGHT_PRESS;
      break;
    case ARROW_DOWN_KEY:
      type = EDITOR_ARROW_DOWN_PRESS;
      break;
  }

  return { type };
}

export function editorCodeScroll(scrollOffset) {
  return {
    type: EDITOR_CODE_SCROLL,
    scrollOffset
  };
}
