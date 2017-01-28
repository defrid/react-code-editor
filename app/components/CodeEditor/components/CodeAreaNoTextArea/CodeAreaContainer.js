import CodeArea from './CodeArea';
import {
  editorCodeScroll
} from 'actions/editorActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const editorReducerStore = state.get('editorReducer');

  return {
    textLines: editorReducerStore.get('textLines').toArray()
  };
};

const mapDispatchToProps = {
  onScroll: editorCodeScroll
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeArea);
