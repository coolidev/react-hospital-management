import React, { useState } from 'react'
import PageNumber from '../components/PageNumber'
import './AllPatients.css'
import Patient from '../components/Patient'
import {Data} from '../data/Data'

function AllPatients() {
    
    console.log(Data)
    const [page, setPage] = useState("");
    return (
        <div className="patientsContainer">
            <div className="headingContainer">
                <div className="headingTextContainer">
                    <p className="headingText">
                        ALL PATIENT
                    </p>
                </div>
            </div>
            <div className="dataContainer">
                {
                    Data.map((value,key)=>{
                            return(<Patient
                                        key={key}
                                        data={value}
                                        />)
                    })
                }
            </div>
            <div className="pageNumberContainer">
                <p className="currentPage">PAGE : 1</p>
                <div className="pNumberContainer">
                    <PageNumber pageNumber="1" currentPage={(value)=>setPage(value)}/>
                    <PageNumber pageNumber="2" currentPage={(value)=>setPage(value)}/>
                    <PageNumber pageNumber="3" currentPage={(value)=>setPage(value)}/>
                    <PageNumber pageNumber="4" currentPage={(value)=>setPage(value)}/>
                </div>

            </div>
        </div>
    )
}

export default AllPatients
