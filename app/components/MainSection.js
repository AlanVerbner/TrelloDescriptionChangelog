import React, {
  Component,
  PropTypes
} from 'react';
import ReactMarkdown from 'react-markdown';
import Diff from 'react-diff';

import HistoryRecord from './HistoryRecord';
// import style from './MainSection.css';

function drawDiff(historyRecord, index, allItems) {
  const inputA = index + 1 < allItems.length ? allItems[index + 1].data.card.desc : '';
  const inputB = historyRecord.data.card.desc;
  return (
    <Diff key={historyRecord.id} inputA={inputA} inputB={inputB} type="chars" />
  );
}

function drawMarkdown(historyRecord) {
  return (
    <ReactMarkdown source={historyRecord.data.card.desc} />
  );
}

export default function MainSection(props) {
  /*static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };*/

  const {
    historyRecords,
    viewMode
  } = props;
  
  return (
    <div className="js-list-actions">
      {historyRecords.map((historyRecord, index, allItems) =>
        <HistoryRecord key={historyRecord.id} historyRecord={historyRecord}>
          {viewMode === 'list' ? drawMarkdown(historyRecord) : drawDiff(historyRecord, index, allItems)}
        </HistoryRecord>
      )}
    </div >
  );
}
