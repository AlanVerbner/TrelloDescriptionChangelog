import * as ActionTypes from '../constants/ActionTypes';

const initialState = [];

function pruneHistoryRecord(historyRecord) {
  return {
    id: historyRecord.id,
    memberCreator: {
      fullName: historyRecord.memberCreator.fullName,
      username: historyRecord.memberCreator.username,
      initials: historyRecord.memberCreator.initials,
    },
    data: {
      card: {
        desc: historyRecord.data.card.desc,
        oldDesc: historyRecord.data.old.desc
      }
    },
    date: historyRecord.date
  };
}

const actionsMap = {
  [ActionTypes.GET_TRELLO_HISTORY_SUCCESS](state, action) {
    return action.payload.map(pruneHistoryRecord);
  }
};

export default function hisstoryRecords(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
