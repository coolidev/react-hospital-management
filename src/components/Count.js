import React from 'react'
import './Count.css'
function Count(props) {
    return (
      <div className = "countContainer">
          <div className= "countTitleContainer">
            <p className = "coountTitle">{props.title}</p>
          </div>
          <div className = "countValueContainer" style={{backgroundColor:props.valueBg}}>
            <p className = "countValue">{props.value}</p>
          </div>
      </div>
    )
}

export default Count
