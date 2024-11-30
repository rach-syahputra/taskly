import { Metadata } from 'next'
import Date from '../components/date'
import TodoList from '../components/todo-list'
import AddTodoButton from '@/components/add-todo-button'
import Navbar from '@/components/navbar'
import { appTitle } from '@/constants/app'

export const metadata: Metadata = {
  title: `${appTitle} | Home`,
  description: 'todo list app that uses localStorage for its functionality'
}

export default function Home() {
  return (
    <main className='mx-auto max-w-[768px] px-4 font-geistSans'>
      <Navbar />
      <Date />
      <TodoList />
      <AddTodoButton />
    </main>
  )
}
