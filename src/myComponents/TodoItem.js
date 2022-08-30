import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='container m-2 p-2'>
      <h5>{props.todo.title}</h5>
      <p>{props.todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={() => {props.onDelete(props.todo)}}>Delete</button>
      <hr />
    </div>
  )
}

export default TodoItem
