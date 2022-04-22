import React from "react"
import { useLocalStorage } from "./useLocalStorage"

function useTodos(){
    
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', [])
    
      const [searchValue, setSearchValue] = React.useState('')
      const [openModal, setOpenModal] = React.useState(false)

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
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        todos[todoIndex].completed = !newTodos[todoIndex].completed
        saveTodos(newTodos)
      }
    
      const addTodo = (text)=> {
        const newTodos = [...todos]
        newTodos.push({
          completed: false,
          text,
        })
        saveTodos(newTodos)
      }  
      
      const deleteTodo = (text)=> {
        const todoIndex = todos.findIndex(todo => todo.text === text)
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
    return(
        { 
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            addTodo,
            deleteTodo,
            hideCompletedTodosFn,
            showCompletedTodosFn,
            openModal,
            setOpenModal
         }
    )
}

export { useTodos }
