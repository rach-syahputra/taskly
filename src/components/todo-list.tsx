import AddTodoForm from './add-todo-form'
import TodoItem from './todo-item'

export default function TodoList() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col'>
        <TodoItem todo='Learn coding at Purwadhika' />
        <TodoItem todo='Write a documentation' />
        <TodoItem todo='Look for a website design' />
      </div>
      <AddTodoForm />
    </div>
  )
}
