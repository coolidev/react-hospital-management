import React from 'react'
import './Patient.css'
import {
  NavLink,
} from "react-router-dom";
function Patient(props) {
    return (
        <NavLink className = "patientContainer" to={{
            pathname:"/patient",
            state:{
                data:props.data
            }
            }} >
            <div className = "covidIndicator" style={{backgroundColor:props.data.covidStatus==="positive"?"green":"red"}}></div>
            <div className = "patientDetails">
                <p className="patientText">Name : {props.data.name}</p>
                <p className="patientText">Room : {props.data.roomNo}</p>
                <p className="patientText">Covid : {props.data.covidStatus}</p>
            </div>
        </NavLink>
    )
}

export default Patient
