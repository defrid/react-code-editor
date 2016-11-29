import { isFunction } from 'lodash/lang';

export default function _mapActionsToReducer(initialState, reducerObject) {
  return (state = initialState, action) => {
    if (isFunction(reducerObject[action.type])) {
      return reducerObject[action.type](state, action);
    }

    return state;
  };
}
