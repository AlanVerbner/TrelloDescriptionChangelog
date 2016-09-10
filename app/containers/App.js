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
  render() {
    const {
      cardName,
      historyRecords,
      viewMode,
      status,
      actions
    } = this.props;

    let content;
    switch (status) {
      case 'fetching':
        content = (<h4>Fetching changelog</h4>);
        break;
      case 'errorFetching':
        content = (<h4>Error while fetching changelog</h4>);
        break;
      case 'noItems':
        content = (<h4 id="no-items-title">No changelog found for this card</h4>);
        break;
      case 'itemsLoaded':
        content = (<MainSection historyRecords={historyRecords} viewMode={viewMode} cardName={cardName} switchViewMode={actions.switchViewMode} />);
        break;
      default:
        break;
    }

    return (
      <div id="history-container" className={style.container}>
        {content}
      </div>
    );
  }
}

App.propTypes = {
  cardName: PropTypes.string.isRequired,
  historyRecords: PropTypes.array.isRequired,
  viewMode: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(state => ({
  historyRecords: state.historyRecords,
  cardName: state.cardName,
  viewMode: state.app.viewMode,
  status: state.app.status
}), dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
}))(App);
