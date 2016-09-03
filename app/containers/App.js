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

class App extends Component {
  static propTypes = {
    cardName: PropTypes.string.isRequired,
    historyRecords: PropTypes.array.isRequired
  };

  render() {
    const {
      cardName,
      historyRecords,
    } = this.props;

    return (
      <div className={style.container}>
        <div className="window-title">
          <h1 className="js-title-helper" dir="auto">Card History</h1>
          <h2 className="js-title-helper" dir="auto">{cardName}</h2>
        </div>
        <MainSection historyRecords={historyRecords} />
      </div>
    );
  }
}

export default connect(state => ({
  historyRecords: state.historyRecords,
  cardName: state.cardName
}))(App);
