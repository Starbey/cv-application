import { useState } from 'react'
import Menu from "./components/Menu.jsx"
import Cv from "./components/Cv.jsx"

import "./styles/App.css"

function App() {
  return (
    <>
      <div className="app">
        <Menu></Menu>
        <Cv></Cv>
       </div>
    </>
  )
}

export default App
