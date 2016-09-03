import * as types from '../constants/ActionTypes';

export function getCurrentUrl() {
  return dispatch => {
    chrome.extension.sendMessage({
      greeting: 'GetURL'
    },
    (response) => {
      dispatch({
        type: types.GET_CURRENT_URL_SUCCESS,
        payload: response
      });
    });

    return {
      type: types.GET_CURRENT_URL_REQUEST,
    };
  };
}
