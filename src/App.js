import { useState, useEffect } from "react";
import "./App.css";

import Input from "./components/Input";
import List from "./components/List";

function App() {
  const getLocalListItem = () => {
    let toDoList = localStorage.getItem("toDoList");
    if (toDoList) {
      return JSON.parse(localStorage.getItem("toDoList"));
    } else {
      return [];
    }
  };

  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState(getLocalListItem());
  const [darkMode, setDarkMode] = useState(false);

  const itemInputFunc = (event) => {
    setItem(event.target.value);
  };
  const addItemFunc = (e) => {
    if (e.key === "Enter" && item !== "") {
      setListItem([...listItem, item]);
      setItem("");
    }
  };
  const completedFunc = (event) => {
    event.target.parentElement.parentElement.firstChild.style.textDecoration =
      "line-through";
    event.target.parentElement.parentElement.firstChild.style.color = "green";
  };
  const deleteFunc = (event) => {
    let arr = [...listItem];
    const itemInArr =
      event.target.parentElement.parentElement.firstChild.innerText;

    let idx = 0;
    if (arr.indexOf(itemInArr) !== -1) {
      idx = arr.indexOf(itemInArr);
    }
    arr.splice(idx, 1);
    setListItem(arr);
  };

  const toggleModeHandler = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(listItem));
  }, [listItem]);

  return (
    <>
      <Input
        darkMode={darkMode}
        toggleModeHandler={toggleModeHandler}
        itemInputFunc={itemInputFunc}
        addItemFunc={addItemFunc}
        item={item}
      />
      <List
        darkMode={darkMode}
        completedFunc={completedFunc}
        deleteFunc={deleteFunc}
        listItem={listItem}
      />
    </>
  );
}

export default App;
