import { Metadata } from 'next'
import Date from '../components/date'
import TodoList from '../components/todo-list'
import { appTitle } from '@/constants/app'

export const metadata: Metadata = {
  title: `${appTitle} | Home`,
  description: 'todo list app that uses localStorage for its functionality'
}

export default function Home() {
  return (
    <main>
      <Date />
      <TodoList />
    </main>
  )
}
