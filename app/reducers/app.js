import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  viewMode: 'list'
};

const actionsMap = {
  [ActionTypes.SWITCH_VIEW_MODE](state) {
    return Object.assign({}, state, {
      viewMode: state.viewMode === 'list' ? 'diff' : 'list'
    });
  }
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
