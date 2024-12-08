import { TaskProvider } from '@/context/task'
import Date from '../components/date'
import TodoList from '../components/todo-list'

export default function Home() {
  return (
    <TaskProvider>
      <main>
        <Date />
        <TodoList />
      </main>
    </TaskProvider>
  )
}
