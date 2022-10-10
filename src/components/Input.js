import React from 'react';
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import lightBackground from "../images/bg-desktop-light.jpg";
import darkBackground from "../images/bg-desktop-dark.jpg";

const Input = (props) => {

    const {darkMode,toggleModeHandler,itemInputFunc,addItemFunc,item}=props;
  return (
    <div
        className="input-container"
        style={
          darkMode
            ? { backgroundImage: `url(${darkBackground})` }
            : { backgroundImage: `url(${lightBackground})` }
        }
      >
        <div className="input-content">
          <div className="input-heading">
            <h1>TODO</h1>
            <img
              onClick={toggleModeHandler}
              src={darkMode ? sun : moon}
              alt=""
            />
          </div>
          <input
            onChange={itemInputFunc}
            onKeyPress={addItemFunc}
            value={item}
            type="text"
            placeholder="Create a new todo..."
            style={
              darkMode
                ? {
                    background: "hsl(235, 24%, 19%)",
                    color: "hsl(234, 39%, 85%)",
                  }
                : { background: "white" }
            }
          />
        </div>
      </div>

  )
}

export default Input;