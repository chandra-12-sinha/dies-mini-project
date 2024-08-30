import "./GamePlay.css"
import TotalScore from '../TotalScore/TotalScore'
import NumberSelect from '../NumberSelect/NumberSelect'

function GamePlay() {
  return (
    <div className='gameplay'>
      <TotalScore/>
      <NumberSelect/>
    </div>
  )
}

export default GamePlay
