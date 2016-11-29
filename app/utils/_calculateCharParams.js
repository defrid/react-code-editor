const CHAR_COUNT = 100;

export default function _calculateCharParams() {
  const testEl = document.createElement('div');
  testEl.style.width = 'auto';
  testEl.style.height = 'auto';
  testEl.style.position = 'absolute';
  testEl.style.fontFamily = 'monospace';
  testEl.style.fontSize = '14px';

  testEl.innerHTML = Array.from(new Array(CHAR_COUNT), () => 'A').join('');

  document.body.appendChild(testEl);
  const elRect = testEl.getBoundingClientRect();
  document.body.removeChild(testEl);

  return {
    width: elRect.width / CHAR_COUNT,
    height: elRect.height
  };
}
