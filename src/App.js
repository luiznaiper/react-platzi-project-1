import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import { ClearCompletedButton } from './ClearCompletedButton'

import './App.css';

const defaultTodos = [
  { text: 'Cut onion', completed: false },
  { text: 'Take react course', completed: false },
  { text: 'Cry horrible', completed: false },
  { text: 'Sex with god', completed: false },
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  const completedTodos = todos.filter( todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text)=> {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  const deleteCompletedTodos = ()=> {
    alert('Delete tasks')
  }

  return (
    <React.Fragment>
      <TodoCounter
        total={ totalTodos }
        completed={ completedTodos }
      />
      <TodoSearch
        searchValue={ searchValue }
        setSearchValue={ setSearchValue }
      />
      <TodoList>
        { searchedTodos.map(todo => (
          <TodoItem
             key={ todo.text }
             text={ todo.text }
             completed={ todo.completed }
             onComplete={ ()=> completeTodo(todo.text) }
             onDelete={ ()=> deleteTodo(todo.text) }
           />
        ))}
      </TodoList>
      <CreateTodoButton/> 
      <ClearCompletedButton
        deleteCompletedTodos={ ()=> deleteCompletedTodos()}
      />
    </React.Fragment>   
  )
}

export default App;
