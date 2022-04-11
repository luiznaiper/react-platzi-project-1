import React from "react";
import './TodoItem.css'

function TodoItem(props) {
    
    return (
      <li className="TodoItem">
        <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'} ${props.hide && 'Icon-check--hide'}`}
          onClick={props.onComplete}
        >
          √
        </span>
        <p 
          className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'} ${props.hide && 'TodoItem-p--hide'}`}
        >
          {props.text}
        </p>
        <span 
          className={`Icon Icon-delete ${props.hide && 'Icon Icon-delete--hide'}`}
          onClick={props.onDelete}
        >
          X
        </span>
      </li>
    );
  }
  
  export { TodoItem };