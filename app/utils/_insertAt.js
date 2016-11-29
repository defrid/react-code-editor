export default function _insertAt(str, index, char) {
  return str.substr(0, index) + char + str.substr(index);
}
