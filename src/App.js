
import { useState,useEffect } from 'react';
import './App.css';
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg"
import lightBackground from "./images/bg-desktop-light.jpg";
import darkBackground from "./images/bg-desktop-dark.jpg";

function App() {

  const getLocalListItem=()=>{
    let toDoList=localStorage.getItem("toDoList");
    if(toDoList)
    {
      return JSON.parse(localStorage.getItem("toDoList"));
    }
    else
    {
      return [];
    }
  }

  const [item,setItem]=useState("");
  const [listItem,setListItem]=useState(getLocalListItem());
  const [darkMode,setDarkMode]=useState(false);



  

  const itemInputFunc=(event)=>
  {
  
      setItem(event.target.value);
    
  }
  const addItemFunc=(e)=>
  {
    if(e.key==="Enter" && item!=="")
    {
      setListItem([...listItem,item]);
      setItem("");
    }
    
  }
  const completedFunc=(event)=>
  {
      event.target.parentElement.parentElement.firstChild.style.textDecoration="line-through";
      event.target.parentElement.parentElement.firstChild.style.color="green";
    
  }
  const deleteFunc=(event)=>
  {
    let arr=[...listItem];
    const itemInArr=event.target.parentElement.parentElement.firstChild.innerText;
    
    let idx=0;
    if(arr.indexOf(itemInArr)!==-1)
    {
        idx=arr.indexOf(itemInArr);
    }
    arr.splice(idx, 1);
    setListItem(arr);
    
  }

  const toggleModeHandler=()=>{
      setDarkMode(!darkMode);
  }

  useEffect(() => {
    localStorage.setItem("toDoList",JSON.stringify(listItem));
    
  }, [listItem]);
  

  return (
    <>
     <div className='input-container' style={darkMode?{backgroundImage:`url(${darkBackground})`}:{backgroundImage:`url(${lightBackground})`}}>
     <div className='input-content'>
      <div className='input-heading'>

    <h1>TODO</h1>
    <img onClick={toggleModeHandler} src={darkMode?sun:moon} alt="" />
      </div>
        <input onChange={itemInputFunc} onKeyPress={addItemFunc} value={item} type="text" placeholder='Create a new todo...' style={darkMode?{background:"hsl(235, 24%, 19%)",color:"hsl(234, 39%, 85%)"}:{background:"white"}}/>
     </div>
     </div>
     <div className='list-container' style={darkMode?{background:"black"}:{background:"white"}}>
     <div className='list-content'>
        <ul>
       
          {listItem.map((listElement,index)=>{
            return <>
            
            <li key={index} style={darkMode?{background:"hsl(235, 24%, 19%)",color:"hsl(234, 39%, 85%)"}:{background:"white"}}>
            <h3>{listElement}</h3>
            <div className='button-container'>
            <button onClick={completedFunc}>Complete</button>
            <button className='delete' onClick={deleteFunc}>Delete</button>
            </div>
            </li>
            </>
          })}
        </ul>
     </div>
     </div>
     </>
  );
}

export default App;
