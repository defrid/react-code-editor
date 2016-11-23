export const EDITOR_LINE_CHANGED = 'EDITOR_LINE_CHANGED';
export const EDITOR_INSERT_NEW_LINE = 'EDITOR_INSERT_NEW_LINE';

export function editorLineChanged(index, text) {
  return {
    type: EDITOR_LINE_CHANGED,
    index,
    text
  }
}

// ToDo support splitting the row and etc
export function editorInsertNewLine(index) {
  return {
    type: EDITOR_INSERT_NEW_LINE,
    index
  }
}
