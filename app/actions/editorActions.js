export const EDITOR_CHAR_ENTER = 'EDITOR_CHAR_ENTER';
export const EDITOR_BACKSPACE_PRESS = 'EDITOR_BACKSPACE_PRESS';
export const EDITOR_INSERT_NEW_LINE = 'EDITOR_INSERT_NEW_LINE';

export function editorCharEnter(char) {
  return {
    type: EDITOR_CHAR_ENTER,
    char
  };
}

// ToDo support splitting the row and etc
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
