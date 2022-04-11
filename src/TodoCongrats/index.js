import React from "react"
import './TodoCongrats.css'

function TodoCongrats(props){
   
    const onCompleteTodos = ()=> {
        console.log(onCompleteTodos)
    }

    return(
        <p 
            className={`TodoCongrats`}
        >
        <span>¡Congratulations! </span> You finished all the tasks
        </p>
    );
}

export { TodoCongrats};

