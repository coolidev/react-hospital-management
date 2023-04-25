import React from 'react'
import { useLocation } from 'react-router'
function PatientDetails() {
    const location = useLocation()  
    const {data} = location.state
    console.log(data);
    return (
        <div>
            
        </div>
    )
}

export default PatientDetails
