import { Input } from './ui/input'

export default function AddTodoForm() {
  return (
    <form>
      <Input
        type='text'
        placeholder='Add new task'
        className='h-10 p-2 text-sm'
      />
    </form>
  )
}
