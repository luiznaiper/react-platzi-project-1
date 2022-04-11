import React from "react";
import './ShowCompletedTodos.css'

function ShowCompletedTodos(props){
   
    return(
        <button 
            className='ShowCompletedTodos'
            onClick={props.onHide}
        >
        Show completed
        </button>
    );
}

export { ShowCompletedTodos};