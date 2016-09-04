import React, {
  PropTypes
} from 'react';
import ReactMarkdown from 'react-markdown';
import Diff from 'react-diff';

import HistoryRecord from './HistoryRecord';
// import style from './MainSection.css';

function drawDiff(historyRecord) {
  const inputA = historyRecord.data.card.oldDesc;
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

function getViewModeButtonText(viewMode) {
  const text = viewMode === 'diff' ? 'list' : 'diff';
  return `View as ${text}`;
}

export default function MainSection(props) {
  const {
    cardName,
    historyRecords,
    viewMode,
    switchViewMode
  } = props;

  return (
    <div>
      <div className="window-title">
        <h2 className="js-title-helper" dir="auto">{cardName}</h2>
        <button className="button-link" type="button" onClick={switchViewMode}>{getViewModeButtonText(viewMode)}</button>
      </div>
      <div className="js-list-actions">
        {historyRecords.map((historyRecord) =>
          <HistoryRecord key={historyRecord.id} historyRecord={historyRecord}>
            {viewMode === 'list' ? drawMarkdown(historyRecord) : drawDiff(historyRecord)}
          </HistoryRecord>
        )}
      </div >
    </div>
  );
}

MainSection.propTypes = {
  cardName: PropTypes.string.isRequired,
  historyRecords: PropTypes.array.isRequired,
  viewMode: PropTypes.string.isRequired,
  switchViewMode: PropTypes.func.isRequired
};
