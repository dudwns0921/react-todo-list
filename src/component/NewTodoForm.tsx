import * as React from 'react'

interface NewTodoFormProps {
  addTodo: (title: string) => void
}

export function NewTodoForm({ addTodo }: NewTodoFormProps) {
  const [newItem, setNewItem] = React.useState('')
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addTodo(newItem)
    setNewItem('')
  }
  return (
    <form className='new-item-form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value)
          }}
          type='text'
          id='item'
        />
      </div>
      <button className='btn' type='submit'>
        Add
      </button>
    </form>
  )
}
