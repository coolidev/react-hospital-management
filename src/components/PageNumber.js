import React from 'react';
import "./PageNumber.css"
const PageNumber = (props) => {
    const setPage=()=>{
        props.currentPage(props.pageNumber)
    }
    return (
        <div className="numberContainer" onClick={setPage}>
            <p className="pageNumber">{props.pageNumber}</p>
        </div>
    );
}

export default PageNumber;