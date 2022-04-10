import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import { HideCompletedTodos } from "./HideCompletedTodos";
import { ShowCompletedTodos } from "./ShowCompletedTodos";
import './App.css';
const todos=[
  {text:'Cut Onion', completed:false, hide: false},
  {text:'Sex with God', completed:true, hide: false},
  {text:'Kil the killer', completed:false, hide: false}
];
function App() {
  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          hide={todo.hide}
           />
        ))}
      </TodoList>
      <CreateTodoButton />      
      <HideCompletedTodos />      
      <ShowCompletedTodos />      
   </react.Fragment>
  );
}

export default App;
