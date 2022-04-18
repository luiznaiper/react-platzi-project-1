import React from "react"
import { useLocalStorage } from "./useLocalStorage"

const TodoContext = React.createContext()

function TodoProvider(props){
    
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
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        todos[todoIndex].completed = !newTodos[todoIndex].completed
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
        <TodoContext.Provider value={{ 
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            hideCompletedTodosFn,
            showCompletedTodosFn,
         }}>
            { props.children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }