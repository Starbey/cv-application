import { useState } from 'react'
import TemplateObj from "./TemplateObj.jsx"
import TemplateObj2 from "./TemplateObj2.jsx"
import Menu from "./components/Menu.jsx"
import Cv from "./components/Cv.jsx"

import "./styles/App.css"

function App() {
  const [infoObj,setInfoObj]=useState(TemplateObj);
  const [personalInfo,setPersonalInfo]=useState(infoObj.personalInfo);
  
  const handleSaveChanges=(e)=>{
    setInfoObj(TemplateObj2);
  }

  const handleSavePersonalInfo=(e)=>{
    setPersonalInfo(TemplateObj2().personalInfo);
  }

  return (
    <>
      <div className="app">
        <Menu 
          handleSavePersonalInfo={handleSavePersonalInfo}
        >
          hello
        </Menu>
        
        <Cv 
          personalInfo={personalInfo}
          educations={infoObj.educations}
          professionalExperiences={infoObj.professionalExperiences}
        ></Cv>
       </div>
    </>
  )
}

export default App
