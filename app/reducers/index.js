import { combineReducers } from 'redux';
import historyRecords from './historyRecords';
import cardName from './cardName';
import app from './app';

export default combineReducers({
  historyRecords,
  cardName,
  app
});
