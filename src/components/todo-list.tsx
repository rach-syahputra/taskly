'use client'

import AddTodoForm from './add-todo-form'
import TodoItem from './todo-item'
import { useTask } from '@/context/task'

export default function TodoList() {
  const { todos } = useTask()

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col'>
        {todos?.map((todo, index) => <TodoItem key={index} {...todo} />)}
      </div>
      <AddTodoForm />
    </div>
  )
}
