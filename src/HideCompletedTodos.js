import React from "react";
import './HideCompletedTodos.css'

function HideCompletedTodos(props){
    const onHideCompletedTodos = ()=>{
        alert('I will hide the completed Todos')
    }
    return(
        <button 
            className='HideCompletedTodos'
            onClick={onHideCompletedTodos}
            >
            Hide completed
        </button>
    );
}

export { HideCompletedTodos};