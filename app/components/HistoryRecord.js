import React, {
  PropTypes
} from 'react';

import moment from 'moment';

export default function HistoryRecord(props) {
  /*static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  };*/


  const {
    historyRecord,
    children
  } = props;

  return (
    <div className="phenom mod-comment-type">
      <div className="phenom-creator">
        <div className="member">
          <span className="member-initials" title={`${historyRecord.memberCreator.fullName} (${historyRecord.memberCreator.username})`}>{historyRecord.memberCreator.initials}</span>
        </div>
      </div>
      <div className="phenom-desc">
        <span className="inline-member">
          <span className="u-font-weight-bold">{historyRecord.memberCreator.fullName}</span>
        </span>
        <div className="comment-container">
          <div className="action-comment markeddown js-comment" dir="auto">
            <div className="current-comment js-friendly-links js-open-card">
              {children}  
            </div>
          </div>
        </div>
        <div className="hide embedly js-embedly"></div>
      </div>
      <p className="phenom-meta quiet">
        <span className="date js-highlight-link">{moment(historyRecord.date).format('LLL')}</span>
      </p>
    </div>
  );
};
