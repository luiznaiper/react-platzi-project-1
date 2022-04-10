import React from "react";
import './TodoSearch.css'

function TodoSearch(){
    const onSearchValueChange = (ev)=> {
        console.log(ev.target.value)
    }
    return(
        <input 
            className="TodoSearch" 
            placeholder="Cebolla" 
            onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};