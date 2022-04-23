import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader"
import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from "../TodoSearch/index.js"
import { TodoList } from "../TodoList/index.js"
import { TodoItem } from "../TodoItem/index.js"
import { TodoForm } from '../TodoForm'
import { CreateTodoButton } from "../CreateTodoButton/index.js"
import { HideCompletedTodos } from "../HideCompletedTodos"
import { ShowCompletedTodos } from "../ShowCompletedTodos"
import { TodoCongrats } from "../TodoCongrats"
import { Modal } from '../Modal'
import { TodosError } from '../TodosError'
import { TodosLoading } from '../TodosLoading'
import { EmptyTodos } from '../EmptyTodos'


import './App.css';


function App() {  
  const {
    error, 
    loading, 
    searchedTodos, 
    toggleCompleteTodo, 
    deleteTodo,
    hideCompletedTodosFn,
    showCompletedTodosFn,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo
  }  = useTodos()
  return(
    <React.Fragment>
       <TodoHeader>
          <TodoCounter
             totalTodos={totalTodos}
             completedTodos={completedTodos}
           />    
           
           <TodoSearch
                 searchValue={searchValue}
                 setSearchValue={setSearchValue} 
            />
       </TodoHeader>
            <TodoList>
            { error && <TodosError error={error}/> }
            { loading && new Array(3).fill(1).map((a,i) => <TodosLoading key={i}/>) }
            { (!loading && !searchedTodos.length) && <EmptyTodos/> }
            {(!loading && completedTodos === totalTodos && totalTodos > 0) && <TodoCongrats/>}

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
         {!!openModal && (
            <Modal>
             <TodoForm
              addTodo={addTodo}
              setOpenModal={setOpenModal}
             />
            </Modal>
         )}
       <CreateTodoButton 
         setOpenModal={ setOpenModal }
       />      
       <HideCompletedTodos
        onHide={()=> hideCompletedTodosFn()}
       />      
       <ShowCompletedTodos 
         onShow={()=> showCompletedTodosFn()}
       />      
    </React.Fragment>
   )
}

export default App;
