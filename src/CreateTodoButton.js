import react from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

    

    const onClickButton = (msg) => {
        alert(msg)
    }

    return(
        <button 
            className='CreateTodoButton'
            onClick={() => onClickButton('Here will be the modal')}
        >
            +
        </button>
    );
}
 
export { CreateTodoButton}