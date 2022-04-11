import React from "react";
import { AppUI } from "./AppUI"

import './App.css';


function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else{
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []
  if(!searchValue.length >= 1){
    searchedTodos = todos
  } else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const saveTodos = (newTodos) =>{
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringifiedTodos)
    setTodos(newTodos)  
  }

  const toggleCompleteTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text == text)
    const newTodos = [...todos]
    todos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  
  const deleteTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text == text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  const hideCompletedTodosFn =()=>{
    const completedTodos = todos.filter(todo => todo.completed)
    completedTodos.forEach(el => {
      el.hide = true
    })
    const newTodos = [...todos]
    saveTodos(newTodos)
    
  }

  const showCompletedTodosFn =()=>{
    const completedTodos = todos.filter(todo => todo.completed)
    completedTodos.forEach(el => {
      el.hide = false
    })
    const newTodos = [...todos]
    saveTodos(newTodos)
    
  }


  return (
   <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
      hideCompletedTodosFn={hideCompletedTodosFn}
      showCompletedTodosFn={showCompletedTodosFn}
   />
  )
}

export default App;
