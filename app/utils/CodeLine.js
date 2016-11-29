import { findIndex } from 'lodash/array';

import { _insertAt, _removeAt } from '../index';

const blockTypes = {
  TEXT: 'TEXT',
  TAB: 'TAB'
};

class CodeBlock {

  constructor() {
    this._content = '';
  }

  get content() {
    return this._content;
  }

  get type() {
    return this._type;
  }

  insertAt(index, char) {
    this._content = _insertAt(this._content, index, char);
  }

  removeAt(index) {
    this._content = _removeAt(this._content, index);
  }
}

class TabBlock extends CodeBlock {

  constructor() {
    super();
    this._type = blockTypes.TAB;
  }
}

class TextBlock extends CodeBlock {

  constructor() {
    super();
    this._type = blockTypes.TEXT;
  }
}

export default class CodeLine {

  constructor(prevLine, block = 0, position = 0) {
    if (!prevLine) {
      this._line = [new TextBlock()];
      this._length = 1;
      return;
    }

    const textBlockIndex = findIndex(prevLine, ['type', blockTypes.TEXT]);
    this._line = Array.from(new Array(textBlockIndex), () => new TabBlock());

  }

}
