import * as ActionTypes from '../constants/ActionTypes';

const initialState = '';

const actionsMap = {
  [ActionTypes.GET_TRELLO_HISTORY_SUCCESS](state, action) {
    return action.payload.length > 0 ? action.payload[0].data.card.name : state;
  }
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
