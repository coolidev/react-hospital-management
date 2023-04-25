import React from 'react'
import './Doctor.css'
function Doctor(props) {
    return (
         <div className="drComponent">
            <div className="ppContainer">
                <img alt="dr" src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg" className="drPhoto"/>
            </div>
            <div className="nameContainer">
                <p className="drName">Dr. Aidan Crivaro</p>
                <p className="status">{props.online==="true"?"Available":"Not Available "}</p>
            </div>
            <div className="statusContainer">
                <div className="dot" style={{backgroundColor:props.online==="true"?"#32CD32":"red"}}></div>
            </div>
        </div>
    )
}

export default Doctor
