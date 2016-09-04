import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  viewMode: 'list',
  status: ''
};

const actionsMap = {
  [ActionTypes.SWITCH_VIEW_MODE](state) {
    return Object.assign({}, state, {
      viewMode: state.viewMode === 'list' ? 'diff' : 'list'
    });
  },
  [ActionTypes.GET_TRELLO_HISTORY_START](state) {
    return Object.assign({}, state, {
      status: 'fetching'
    });
  },
  [ActionTypes.GET_TRELLO_HISTORY_SUCCESS](state, action) {
    return Object.assign({}, state, {
      status: action.payload.length > 0 ? 'itemsLoaded' : 'noItems'
    });
  },
  [ActionTypes.GET_TRELLO_HISTORY_FAILED](state) {
    return Object.assign({}, state, {
      status: 'errorFetching',
      errorFetching: true,
    });
  },
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
