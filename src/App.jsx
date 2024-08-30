

import { useState } from "react"
import "./App.css"


import GamePlay from "./Components/GamePlay/GamePlay"
import StartGame from "./Components/StartGame/StartGame"

function App() {
  const[isGameStarted, setIsGameStarted]= useState(true)
  const toggleGamePlay = ()=>{
    setIsGameStarted((prev)=> !prev)
  }
  return (
    <div>
      {
        isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>
      }
    
    </div>
  )
}

export default App
