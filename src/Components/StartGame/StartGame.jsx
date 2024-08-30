import "./StartGame.css"
function StartGame({toggle}) {
  return (
    <div  className="container">
        <div className="photo"><img  src="images/dies.jpg" alt="" /></div>
        <div className="dies">
          <h1>DICE GAME</h1>
          <button onClick={toggle}>Play Now</button>
        </div>
        </div>
  )
}

export default StartGame
