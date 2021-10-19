import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <h3>{props.todo.sno}</h3>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className="btn btn-danger" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
    </div>
  )
}

export default Todo;