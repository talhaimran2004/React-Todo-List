import React from 'react'

import TodoItem from "../myComponents/TodoItem";
// import AddTodo from "../myComponents/AddTodo";


const Todos = (props) => {
    
    return (
        <div className='container'>

            {/* <AddTodo todos={props.todos} setTodos={props.setTodos} /> */}
            
            <h3 className='text-center m-4'>Todos List</h3>

            {props.todos.length === 0 ? 'No TODOs to show' :
                props.todos.map((todo) => {
                    return (
                        <>
                            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        </>
                    )
                })}
        </div>
    )
}

export default Todos
