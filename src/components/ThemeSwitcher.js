import React from "react";
import ReactDOM from "react-dom";

const ThemeSwitcher = (props) => {
  return (
    <div className="themeSwitcher">
      <span>Dark Mode</span>
      <i
        className="fa-solid fa-power-off"
        onClick={props.clickedFunc}
        style={{ color: props.switchColor }}
      ></i>
    </div>
  );
};

export default ThemeSwitcher;
