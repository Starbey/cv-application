import { useState } from 'react'
import TemplateObj from "./TemplateObj.jsx"
import TemplateObj2 from "./TemplateObj2.jsx"
import Menu from "./components/Menu.jsx"
import Cv from "./components/Cv.jsx"

import "./styles/App.css"

function App() {
  const [infoObj,setInfoObj]=useState(TemplateObj);
  
  const handleSaveChanges=(e)=>{
    setInfoObj(TemplateObj2);
  }

  return (
    <>
      <div className="app">
        <Menu 
          handleSaveChanges={handleSaveChanges}
        ></Menu>
        
        <Cv 
          cvInfo={infoObj}>
        </Cv>
       </div>

       <button
          onClick={handleSaveChanges}
       >Save Changes</button>
    </>
  )
}

export default App
