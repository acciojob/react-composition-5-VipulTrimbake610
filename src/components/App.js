
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [t1,setT1] = useState("Tab 1");;
  const [t2,setT2] = useState("Tab A");
  function handleClick1(e){
    setT1(e.target.innerText);
  }
  function handleClick2(e){
    setT2(e.target.innerText);
  }
  return (
    <div>
        <ul>
          <li onClick={handleClick1}>Tab 1</li>
          <li onClick={handleClick1}>Tab 2</li>
          <li onClick={handleClick1}>Tab 3</li>
        </ul>
        <p>Content of {t1}</p>
        <ul>
          <li onClick={handleClick2}>Tab A</li>
          <li onClick={handleClick2}>Tab B</li>
          <li onClick={handleClick2}>Tab C</li>
        </ul>
        <p>Content of {t2}</p>
    </div>
  )
}

export default App
