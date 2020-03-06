import React from 'react'

function TodoItem(props) {
  console.log(props)
  return (
    <div className="todo-item">
      <input type="checkbox" />
      {props.todo.text}
      {props.todo.type}
    </div>
)
}

export default TodoItem
