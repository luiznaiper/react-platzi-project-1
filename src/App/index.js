import React from "react";
import { AppUI } from "./AppUI"

import './App.css';

function useLocalStorage(itemName, initialValue){
  
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = []
  } else{
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

  const saveItem = (newItem) =>{
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)  
  }

  return[
    item,
    saveItem
  ]

}


function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

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
