import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul className="history-wrapper">
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
              type="button"
              className="btn-hist"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? `Go to game start` : `Go to move ${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
