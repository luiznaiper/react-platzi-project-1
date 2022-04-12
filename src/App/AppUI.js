import React from "react"
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { HideCompletedTodos } from "../HideCompletedTodos";
import { ShowCompletedTodos } from "../ShowCompletedTodos";
import { TodoCongrats } from "../TodoCongrats";

function AppUI({
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      toggleCompleteTodo,
      deleteTodo,
      hideCompletedTodosFn,
      showCompletedTodosFn
}){
    return(
   <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />    
      <TodoCongrats
          total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=> toggleCompleteTodo (todo.text)}
            onDelete={()=> deleteTodo (todo.text)}
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