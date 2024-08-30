import { useState } from "react";
import "./NumberSelect.css"

function NumberSelect() {
    const arrnum = [1,2,3,4,5,6];

    const [selectNumber, setSelectnumber]=useState()
  return (
    
      <div className="box"
      
      >
           
           {
                arrnum.map((value, i)=>(
                    <div
                    isSelected = {value === Selectnumber}
                    key={i}
                     onClick={()=> setSelectnumber(value)}>{value}
                     
                     </div>
                ))
            }
           
          
           
        
      </div>
    
  )

}

export default NumberSelect
