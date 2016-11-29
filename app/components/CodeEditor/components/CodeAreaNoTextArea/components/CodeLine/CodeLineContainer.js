import CodeLine from './CodeLine';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const editorReducerStore = state.get('editorReducer');
  return {
    currentLine: editorReducerStore.get('currentLine')
  };
};

export default connect(mapStateToProps)(CodeLine);
