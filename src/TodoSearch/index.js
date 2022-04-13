import React from "react"
import { TodoContext } from "../TodoContext"
import './TodoSearch.css'

function TodoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

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