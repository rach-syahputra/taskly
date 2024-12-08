'use client'

import AddTodoForm from './add-todo-form'
import TodoItem from './todo-item'
import { useTask } from '@/context/task'

export default function TodoList() {
  const { isLoading, todos } = useTask()

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col'>
        {isLoading ? (
          <p className='text-gray-500'>Loading tasks...</p>
        ) : todos && todos.length > 0 ? (
          todos.map((todo, index) => <TodoItem key={index} {...todo} />)
        ) : (
          <p className='text-gray-500'>No tasks</p>
        )}
      </div>
      <AddTodoForm />
    </div>
  )
}
