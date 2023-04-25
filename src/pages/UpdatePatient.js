import React, { useState } from 'react'
import './UpdatePatient.css'
import Button from "../components/Button"
import SearchBox from '../components/SearchBox'
function UpdatePatient() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [phone, setPhone] = useState("")
    const [illness, setIllness] = useState("")
    const [covidStatus, setCovidStatus] = useState("")
    const [roomNo, setRoomNo] = useState("")
    const handleAdd = () => {
    
     console.log(`
     name:${name},
     age:${age},
     phone:${phone},
     illness:${illness},
     covidStatus:${covidStatus},
     roomNo:${roomNo},
     createdAt:${Date().toLocaleString()}`);
     setName("")
      setAge("")
      setCovidStatus("")
      setIllness("")
      setPhone("")
      setRoomNo("")
    }
    const handleClear = () => {
      setName("")
      setAge("")
      setCovidStatus("")
      setIllness("")
      setPhone("")
      setRoomNo("")
    }
    return (
        <div className="updateContainer">
            <div className="headingContainerUpdate">
                <div className="headingTextContainer">
                    <p className="headingText">
                        UDATE PATIENT
                    </p>
                </div>
                <SearchBox placeholder="search by name" buttonName="Search" />
            </div>
            <div className="inputContainer">
                <div className="nameInput">
                    <p className="inputLabel">name</p>
                    <input
                    className="dataInput" 
                    type="text" 
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}} 
                    />
                </div>
                 <div className="nameInput">
                    <p className="inputLabel">age</p>
                    <input
                    className="dataInput small" 
                    type="text" 
                    value={age}
                    onChange={(e)=>{setAge(e.target.value)}} 
                    />
                </div>
                 <div className="nameInput">
                    <p className="inputLabel">phone</p>
                    <input
                    className="dataInput" 
                    type="text" 
                    value={phone}
                    onChange={(e)=>{setPhone(e.target.value)}} 
                    />
                </div>
                 <div className="nameInput">
                    <p className="inputLabel">case</p>
                    <input
                    className="dataInput" 
                    type="text" 
                    value={illness}
                    onChange={(e)=>{setIllness(e.target.value)}} 
                    />
                </div>
                 <div className="nameInput">
                    <p className="inputLabel">covid</p>
                    <input
                    className="dataInput medium" 
                    type="text" 
                    value={covidStatus}
                    onChange={(e)=>{setCovidStatus(e.target.value)}} 
                    />
                </div>
                <div className="nameInput">
                    <p className="inputLabel">room no</p>
                    <input
                    className="dataInput small" 
                    type="text" 
                    value={roomNo}
                    onChange={(e)=>{setRoomNo(e.target.value)}} 
                    />
                </div>
            </div>
            <div className="admitButtonContainer">
                <Button text="Update" click={handleAdd}/>
                <Button text = "Clear" click={handleClear}/>
            </div>
        </div>
    )
}

export default UpdatePatient
