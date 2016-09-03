import React, {
  Component,
  PropTypes
} from 'react';
import HistoryRecord from './HistoryRecord';
// import style from './MainSection.css';

export default function MainSection(props) {

  /*static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };*/

  const {
    historyRecords,
  } = props;
  return (
    <div className="js-list-actions">
      {historyRecords.map(historyRecord =>
        <HistoryRecord key={historyRecord.id} historyRecord={historyRecord} />
      )}
    </div >
  );
}
