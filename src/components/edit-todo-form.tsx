'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { Check, Plus, X } from 'lucide-react'
import { setLocalStorage } from '@/hooks/local-storage'
import { toast } from '@/hooks/use-toast'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ITodo, todosKey } from '@/constants/todos'
import BottomWrapper from './bottom-wrapper'
import { useTask } from '@/context/task'

interface EditTodoFormProps {
  todos: ITodo[] | null
  setTodos: Dispatch<SetStateAction<ITodo[] | null>>
}

export default function EditTodoForm({ todos, setTodos }: EditTodoFormProps) {
  const [todo, setTodo] = useState<string>('')
  const { onEdit, setOnEdit } = useTask()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (todo) {
      setOnEdit(false)

      const newTodo: ITodo = {
        id: Date.now().toString(),
        task: todo
      }

      if (todos === null) {
        setLocalStorage(todosKey, [newTodo])
        setTodos([newTodo])
      } else {
        setLocalStorage(todosKey, [...todos, newTodo])
        setTodos([...todos, newTodo])
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
          className={`${onEdit ? 'block' : 'hidden'} h-10 p-2 text-sm`}
        />

        {onEdit && (
          <BottomWrapper>
            <Button
              variant='outline'
              size='icon'
              className='h-14 w-14 rounded-full p-0'
              onClick={() => setOnEdit(false)}
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
          </BottomWrapper>
        )}
      </form>

      {!onEdit && (
        <BottomWrapper>
          <Button
            variant='outline'
            size='icon'
            className='flex h-14 w-14 gap-4 rounded-full p-0 lg:[&_svg]:size-6'
            type='button'
            onClick={() => setOnEdit(true)}
          >
            <Plus />
          </Button>
        </BottomWrapper>
      )}
    </>
  )
}
