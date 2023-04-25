import React, { useState } from 'react';
import "./SearchBox.css"
const SearchBox=(props)=> {
const [inputName, setInputName] = useState("");
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputName);

    setInputName("")
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
             <input className="inputBox" placeholder={props.placeholder} type="text" value={inputName} onChange={(e)=>{setInputName(e.target.value)}} />
             <input className="searchButton" type="submit" value={props.buttonName}/>
             </form>
        </div>
    );
}

export default SearchBox;