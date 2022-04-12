import React from "react";
import { AppUI } from "./AppUI"

import './App.css';

function useLocalStorage(itemName, initialValue){

  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(()=>{
    setTimeout(()=> {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
      
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = []
        } else{
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)
      } catch(error) {
        setError(error)
      }
    }, 1000 )
  }, [])

 


  const saveItem = (newItem) =>{
    try{
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)  
    } catch(error){
      setError(error)
    }
  }

  return{
    item,
    saveItem,
    error,
    loading
  }

}


function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])

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
      error={error}
      loading={loading}
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
