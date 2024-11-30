import { Dispatch, SetStateAction, useState } from 'react'
import { Check, Plus, X } from 'lucide-react'
import { setLocalStorage } from '@/hooks/local-storage'
import { toast } from '@/hooks/use-toast'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { todosKey } from '@/constants/todos'

export default function AddTodoForm({
  onAdd,
  setOnAdd,
  todos,
  setTodos
}: {
  onAdd: boolean
  setOnAdd: Dispatch<SetStateAction<boolean>>
  todos: string[] | null
  setTodos: Dispatch<SetStateAction<string[] | null>>
}) {
  const [todo, setTodo] = useState<string>('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (todo) {
      setOnAdd(!onAdd)

      if (todos === null) {
        setLocalStorage(todosKey, [todo])
        setTodos([todo])
      } else {
        setLocalStorage(todosKey, [...todos, todo])
        setTodos([...todos, todo])
      }

      setTodo('')

      toast({
        title: 'Success',
        description: 'New task has been successfully added.'
      })
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          type='text'
          placeholder='Add new task'
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setTodo(e.currentTarget.value)
          }
          value={todo}
          className={`${onAdd ? 'block' : 'hidden'} h-10 p-2 text-sm`}
        />

        {onAdd && (
          <div className='fixed bottom-5 right-5 flex gap-4 lg:bottom-10 lg:right-10'>
            <Button
              variant='outline'
              size='icon'
              className='h-14 w-14 rounded-full p-0'
              onClick={() => setOnAdd(false)}
            >
              <X />
            </Button>
            <Button
              variant='outline'
              size='icon'
              type='submit'
              className='h-14 w-14 rounded-full p-0'
              disabled={!Boolean(todo)}
            >
              <Check />
            </Button>
          </div>
        )}
      </form>

      {!onAdd && (
        <Button
          variant='outline'
          size='icon'
          className='fixed bottom-5 right-5 flex h-14 w-14 gap-4 rounded-full p-0 lg:bottom-10 lg:right-10 lg:[&_svg]:size-6'
          type='button'
          onClick={() => setOnAdd(true)}
        >
          <Plus />
        </Button>
      )}
    </>
  )
}
