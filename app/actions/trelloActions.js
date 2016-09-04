import * as types from '../constants/ActionTypes';

const TRELLO_HISTORY_URL = 'https://trello.com/1/cards/CARD_ID/actions?filter=updateCard:desc';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

export function getCardHistory(cardId) {
  return dispatch => {
    dispatch({
      type: types.GET_TRELLO_HISTORY_START,
    });

    return fetch(
        TRELLO_HISTORY_URL.replace('CARD_ID', cardId), {
          method: 'GET',
          headers,
          credentials: 'include'
        })
      .then(response => response.json())
      .then(data => dispatch({
        type: types.GET_TRELLO_HISTORY_SUCCESS,
        payload: data
      }))
      .catch(err => {
        dispatch({
          type: types.GET_TRELLO_HISTORY_FAILED,
          payload: err
        });
      });
  };
}
