import * as React from 'react'

interface TodoItemProps {
  title: string
  id: string
  completed: boolean
  toggleTodo: (id: string, completed: boolean) => void
  deleteTodo: (id: string) => void
}

export function TodoItem({
  title,
  id,
  completed,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li>
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={(e) => {
            toggleTodo(id, e.target.checked)
          }}
        />
        {title}
      </label>
      <button
        className='btn btn-danger'
        onClick={() => {
          deleteTodo(id)
        }}
      >
        Delete
      </button>
    </li>
  )
}
