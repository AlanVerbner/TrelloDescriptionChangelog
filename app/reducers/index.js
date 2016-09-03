import { combineReducers } from 'redux';
import historyRecords from './historyRecords';
import cardName from './cardName';

export default combineReducers({
  historyRecords,
  cardName
});
