import React from 'react';
import '../styles/root.scss';

const Square = ({ value, onClick, isWinningSquares }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`square ${isWinningSquares ? 'winning' : ''}  ${
          value === 'X' ? 'text-green' : 'text-orange'
        }`}
        style={{
          fontWeight: isWinningSquares ? 'bold' : 'normal',
          textDecoration: isWinningSquares ? 'line-through' : 'none',
        }}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
