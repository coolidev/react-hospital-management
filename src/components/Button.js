import React from 'react'
import './Button.css'
function Button(props) {
    return (
        <div className="buttonSmall" onClick={props.click}>
            <p className="buttonText">{props.text}</p>
        </div>
    )
}

export default Button
