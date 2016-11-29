import Cursor from './Cursor';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const editorReducerStore = state.get('editorReducer');

  return {
    position: editorReducerStore.get('position').toObject()
  };
};

export default connect(mapStateToProps)(Cursor);
