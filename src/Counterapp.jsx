import React, { useState } from "react";



const Counterapp=()=>{

const state=useState();

const [count,setCount]=useState(0);

const Counterplus=()=>{
    setCount(count+1);
}
const Counternegative=()=>{
    setCount(count-1);
}
    return(
        <>
            <div className="counter-box">
            <div className="btn-box">
            <button onClick={Counternegative}>-</button>
            </div>
            <div className="display-box">
            {count}
            </div>
            <div className="btn-box">
            <button onClick={Counterplus}>+</button>
            </div>
            </div>
        </>
    )
}

export default Counterapp;