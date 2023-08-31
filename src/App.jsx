import { useState } from 'react'
import TemplateObj from "./TemplateObj.jsx"
import Menu from "./components/Menu.jsx"
import Cv from "./components/Cv.jsx"

import "./styles/App.css"

function App() {
  const info=TemplateObj()
  return (
    <>
      <div className="app">
        <Menu></Menu>
        <Cv cvInfo={info}>
        </Cv>
       </div>
    </>
  )
}

export default App
