import React from 'react'
import './ClearCompletedButton.css'

function ClearCompletedButton(props){

    return (
        <h4 className='ClearCompletedButton'
        onClick={props.deleteCompletedTodos}
        >
            Clear Completed Tasks
        </h4>
    )
}

export { ClearCompletedButton }