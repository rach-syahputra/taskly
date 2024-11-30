import { Trash } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { getLocalStorage, setLocalStorage } from '@/hooks/local-storage'
import { todosKey } from '@/constants/todos'

export default function TodoItem({ todo }: { todo: string }) {
  const removeTodo = () => {
    const todos: string[] | null = getLocalStorage('todoist-todos')
    const filteredTodos = todos?.filter((item) => item !== todo)
    setLocalStorage(todosKey, filteredTodos)

    location.reload()
  }

  return (
    <div className='flex h-11 items-center justify-between'>
      <Checkbox className='h-3 w-3' />
      <p className='flex-1 px-4 text-sm md:text-base'>{todo}</p>
      <Trash size={16} onClick={removeTodo} className='cursor-pointer' />
    </div>
  )
}
