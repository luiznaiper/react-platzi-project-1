import React from "react";
import { AppUI } from "./AppUI"

import './App.css';
const defaultTodos=[
  {text:'Cut Onion', completed:false, hide: false},
  {text:'Pray to god', completed:false, hide: false},
  {text:'Kill the killer', completed:false, hide: false},
  {text:'Feed the dogs', completed:false, hide: false},
  {text:'Go to the supermarket', completed:false, hide: false}
];
function App() {

  const [todos, setTodos] = React.useState(defaultTodos)
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
    setTodos(newTodos)
  }

  
  const deleteTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text == text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  const hideCompletedTodosFn =()=>{
    const completedTodos = todos.filter(todo => todo.completed)
    completedTodos.forEach(el => {
      el.hide = true
    })
    const newTodos = [...todos]
    setTodos(newTodos)
    
  }

  const showCompletedTodosFn =()=>{
    const completedTodos = todos.filter(todo => todo.completed)
    completedTodos.forEach(el => {
      el.hide = false
    })
    const newTodos = [...todos]
    setTodos(newTodos)
    
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
