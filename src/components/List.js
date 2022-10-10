import React from 'react';


const List = (props) => {
    
  const {darkMode,completedFunc,deleteFunc,listItem}=props;
  return (
    <div
        className="list-container"
        style={darkMode ? { background: "black" } : { background: "white" }}
      >
        <div className="list-content">
          <ul>
            {listItem.map((listElement, index) => {
              return (
                <>
                  <li
                    key={index}
                    style={
                      darkMode
                        ? {
                            background: "hsl(235, 24%, 19%)",
                            color: "hsl(234, 39%, 85%)",
                          }
                        : { background: "white" }
                    }
                  >
                    <h3>{listElement}</h3>
                    <div className="button-container">
                      <button onClick={completedFunc}>Complete</button>
                      <button className="delete" onClick={deleteFunc}>
                        Delete
                      </button>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
  )
}

export default List;