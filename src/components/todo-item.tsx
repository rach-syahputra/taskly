import { Checkbox } from '@/components/ui/checkbox'
import { Trash } from 'lucide-react'

export default function TodoItem({ todo }: { todo: string }) {
  return (
    <div className='flex h-11 items-center justify-between'>
      <Checkbox className='h-3 w-3' />
      <p className='flex-1 px-4 text-sm md:text-base'>{todo}</p>
      <Trash size={16} />
    </div>
  )
}
