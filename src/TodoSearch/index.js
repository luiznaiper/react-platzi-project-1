import React from "react";
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }){

    const onSearchValueChange = (ev)=> {
        console.log(ev.target.value)
        setSearchValue(ev.target.value)
    }
    return(
        <input 
            className="TodoSearch" 
            placeholder="Cebolla" 
            value={searchValue}
            onChange={onSearchValueChange}
        />     
    )
}

export {TodoSearch};