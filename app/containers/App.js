import React, {
  PropTypes,
  Component
} from 'react';
import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'react-redux';

import MainSection from '../components/MainSection';
import style from './App.css';
import * as appActions from '../actions/appActions';

class App extends Component {
  getViewModeButtonText(viewMode) {
    const text = viewMode === 'diff' ? 'list' : 'diff';
    return `View ${text}`;
  }

  render() {
    const {
      cardName,
      historyRecords,
      viewMode,
      actions
    } = this.props;

    return (
      <div className={style.container}>
        <div className="window-title">
          <h1 className="js-title-helper" dir="auto">Card History</h1>
          <h2 className="js-title-helper" dir="auto">{cardName}</h2>
          <button className="button-link" type="button" onClick={actions.switchViewMode}>{this.getViewModeButtonText(viewMode)}</button>
        </div>
        <MainSection historyRecords={historyRecords} viewMode={viewMode} />
      </div>
    );
  }
}

App.propTypes = {
  cardName: PropTypes.string.isRequired,
  historyRecords: PropTypes.array.isRequired,
  viewMode: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(state => ({
  historyRecords: state.historyRecords,
  cardName: state.cardName,
  viewMode: state.app.viewMode
}), dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
}))(App);
