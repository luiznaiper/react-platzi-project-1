import React from "react";
import './ShowCompletedTodos.css'

function ShowCompletedTodos(props){
    const onShowCompletedTodos = ()=>{
        alert('I will show again the completed Todos')
    }
    return(
        <button 
            className='ShowCompletedTodos'
            onClick={onShowCompletedTodos}
        >
        Show completed
        </button>
    );
}

export { ShowCompletedTodos};