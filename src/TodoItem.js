import react from "react"
import './TodoItem.css'

function TodoItem(props){

    

    return(
        <li>
            <span
                 className={`${props.completed && 'Todo-check-active'}`}
                 onClick={props.onComplete}
            >
                ✓
            </span>
            <p 
                className={`${props.completed && 'Todo-p-complete'}`}>{props.text}
            </p>
            <span 
                className='Todo-delete'
                onClick={props.onDelete}
            >
                X   
            </span>
        </li>
    );
}

export { TodoItem };