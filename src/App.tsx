import * as React from 'react'
import { NewTodoForm } from './component/NewTodoForm'
import { TodoItem } from './component/TodoItem'
import { TODOS } from './constants'

interface todoItem {
  id: string
  title: string
  completed: boolean
}

export function App() {
  const [todos, setTodos] = React.useState<todoItem[]>(() => {
    const localValue = localStorage.getItem(TODOS)
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  React.useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos))
  }, [todos])

  function deleteTodo(id: string) {
    setTodos((currentValue) => {
      return currentValue.filter((todo) => todo.id !== id)
    })
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentValue) => {
      return currentValue.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        } else {
          return todo
        }
      })
    })
  }

  function addTodo(title: string) {
    setTodos((currentValue) => [
      ...currentValue,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ])
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className='header'>TodoList</h1>
      <ul className='list'>
        {todos.length === 0
          ? 'No Todo'
          : todos.map((item) => (
              <TodoItem
                {...item}
                key={item.id}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              ></TodoItem>
            ))}
      </ul>
    </>
  )
}
