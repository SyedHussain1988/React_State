import React, { useState } from 'react';
import './Room.css'

function Room() {

    //const state = useState(true);
    //console.log("State = ",state);
    //let [isLit, setLit] = useState(false);

    let [isLitON, setLitON] = useState(true);
    let [tempF , setTempFarh] = useState(72);

    //let [age , setAge] = useState(24);
    
    //let hello = 'Hello '+ isLit +'World';
    //let hello = `Hello ${isLit} World`;

    return (
    //<div className={`room ${isLit? "lit": "dark"}`}> 
    <div className={`room ${isLitON? "ON": "OFF"}`}> 
        Room Light is {isLitON? "ON": "OFF"}
        <br/>
        <button onClick={()=> setLitON(true) } >ON</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=> setLitON(false) } >OFF</button>
        <br/>
        Room Current Temperature is: {tempF}
        <br/>
        <button title="Increase Temperature" onClick={()=> setTempFarh(++tempF)}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button title="Decrease Temperature" onClick={()=> setTempFarh(--tempF)}>-</button>
        {/* <button onClick={ ()=> {
                        console.log("Increase age arrow function");
                        setAge(++age);
                        }}>
            Increase Age
        </button> */}
    </div>
    );
}

export default Room;
