import React from "react";

const Btn = ({ count, onClick, disabled }) => {
  return (
    <button onClick={onClick} className="box" disabled={disabled}>
      {count}
    </button>
  );
};

export default Btn;
