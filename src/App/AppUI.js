import React from "react"
import { TodoContext } from "../TodoContext"
import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from "../TodoSearch/index.js"
import { TodoList } from "../TodoList/index.js"
import { TodoItem } from "../TodoItem/index.js"
import { CreateTodoButton } from "../CreateTodoButton/index.js"
import { HideCompletedTodos } from "../HideCompletedTodos"
import { ShowCompletedTodos } from "../ShowCompletedTodos"
import { TodoCongrats } from "../TodoCongrats"

function AppUI(){
    const {
      error, 
      loading, 
      searchedTodos, 
      toggleCompleteTodo, 
      deleteTodo,
      hideCompletedTodosFn,
      showCompletedTodosFn
    } = React.useContext(TodoContext)
    return(
   <React.Fragment>
      <TodoCounter/>    
      <TodoCongrats/>
      <TodoSearch/>
           <TodoList>
           { error && <p>We have an error, reload the page...</p> }
           { loading && <p>Loading, be patient...</p> }
           { (!loading && !searchedTodos.length) && <p> Create your first Task </p> }
   
           {searchedTodos.map(todo =>(
             <TodoItem 
               key={todo.text}
               text={todo.text}
               completed={todo.completed}
               onComplete={()=> toggleCompleteTodo (todo.text)}
               onDelete={()=> deleteTodo (todo.text)}
               hide={todo.hide}
              />
           ))}
         </TodoList>
      <CreateTodoButton />      
      <HideCompletedTodos
       onHide={()=> hideCompletedTodosFn()}
      />      
      <ShowCompletedTodos 
        onShow={()=> showCompletedTodosFn()}
      />      
   </React.Fragment>
  )
}

export { AppUI }