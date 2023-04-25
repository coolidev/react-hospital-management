import React from 'react'
import './BigButton.css'
function BigButton(props) {
    return (
        <div className="button" style={{backgroundColor:props.buttonBg}}>
            <img alt="button" className="buttonImg" src={props.link}/>
            <p className="buttonName">{props.option}</p>
            <p className="buttonName">patient</p>
        </div>
    )
}

export default BigButton
