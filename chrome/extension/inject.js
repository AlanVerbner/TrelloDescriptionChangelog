import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';

import Dock from 'react-dock';
import Root from '../../app/containers/Root';
import {
  getCardHistory
} from '../../app/actions/trelloActions';

const initialState = {};
const createStore = require('../../app/store/configureStore');
const store = createStore(initialState);

function getCardId(url) {
  return '9hL8eZcu';
}

class InjectApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.buttonOnClick = this.buttonOnClick.bind(this);
  }

  buttonOnClick() {
    console.log(this);
    const nextVisibleState = !this.state.isVisible;
    this.setState({
      isVisible: nextVisibleState
    });
    if (nextVisibleState) {
      const cardId = getCardId(window.location);
      store.dispatch(getCardHistory(cardId));
    }
  }

  render() {
    return (
      <div>
        <button id="show-history" onClick={this.buttonOnClick}>
          Open TodoApp
        </button>
        <Dock
          position="right"
          defaultSize={0.4}
          isVisible={this.state.isVisible}
          onVisibleChange={this.buttonOnClick}
          dockStyle={{ background: '#EDEFF0' }}
        >
          <Root store={store} />
        </Dock>
      </div>
    );
  }
}

function tryLoadDetailButton() {
  const detailCards = document.getElementsByClassName('card-detail-data');
  if (detailCards.length === 0) return;
  const wasntAddedBefore = document.getElementsByClassName('show-trello-history').length === 0;
  if (wasntAddedBefore) {
    const button = document.createElement('button');
    button.className = 'show-trello-history';
    button.type = 'button';
    button.innerHTML = 'Show History';
    button.onclick = () => {
      document.getElementById('show-history').click();
    };
    detailCards[0].appendChild(button);
  }
}

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'trello-history';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
  tryLoadDetailButton();
});

chrome.extension.onMessage.addListener((msg) => {
  if (msg.action === 'UrlChanged') {
    tryLoadDetailButton();
  }
});
