'use client'

import { useEffect, useState } from 'react'
import AddTodoForm from './add-todo-form'
import TodoItem from './todo-item'
import { getLocalStorage } from '@/hooks/local-storage'
import { ITodo, todosKey } from '@/constants/todos'

export default function TodoList() {
  const [todos, setTodos] = useState<ITodo[] | null>([])
  const [onAdd, setOnAdd] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const todosFromLocalStorage: ITodo[] | null = getLocalStorage(todosKey)

      if (todosFromLocalStorage) {
        setTodos(todosFromLocalStorage)
      }
    }
  }, [])

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col'>
        {todos?.map((todo, index) => <TodoItem key={index} {...todo} />)}
      </div>
      <AddTodoForm
        onAdd={onAdd}
        setOnAdd={setOnAdd}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}
