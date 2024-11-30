'use client'

import { useEffect, useState } from 'react'
import AddTodoForm from './add-todo-form'
import TodoItem from './todo-item'
import { getLocalStorage, setLocalStorage } from '@/hooks/local-storage'
import { todos as todoList } from '@/constants/todos'

export default function TodoList() {
  const [todos, setTodos] = useState<string[] | null>(todoList)
  const [onAdd, setOnAdd] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const todos: string[] | null = getLocalStorage('todoist-todos')

      if (todos) {
        setTodos(todos)
      } else {
        setLocalStorage('todoist-todos', todoList)
      }
    }
  }, [])

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col'>
        {todos?.map((todo, index) => <TodoItem key={index} todo={todo} />)}
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