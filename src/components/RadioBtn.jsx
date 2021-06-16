import React from "react";

const RadioBtn = ({ labelName, id, isChecked, func }) => {
  return (
    <>
      <label>{labelName}</label>
      <input
        type="radio"
        name="location"
        id={id}
        checked={isChecked}
        onChange={func}
      />
    </>
  );
};

export default RadioBtn;
