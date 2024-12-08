import { Trash } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { getLocalStorage, setLocalStorage } from '@/hooks/local-storage'
import { ITodo, todosKey } from '@/constants/todos'

export default function TodoItem({ id, task }: ITodo) {
  const removeTodo = () => {
    const todos: ITodo[] | null = getLocalStorage(todosKey)
    const filteredTodos = todos?.filter((todo) => todo.id !== id)
    setLocalStorage(todosKey, filteredTodos)

    location.reload()
  }

  return (
    <div className='flex h-11 items-center justify-between'>
      <Checkbox className='h-3 w-3' />
      <p className='flex-1 px-4 text-sm md:text-base'>{task}</p>
      <Trash size={16} onClick={removeTodo} className='cursor-pointer' />
    </div>
  )
}
