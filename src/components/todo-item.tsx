'use client'

import { Save, SquarePen, Trash, X } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { getLocalStorage, setLocalStorage } from '@/hooks/local-storage'
import { ITodo, todosKey } from '@/constants/todos'
import { useTask } from '@/context/task'
import { useState } from 'react'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import { toast } from '@/hooks/use-toast'

export default function TodoItem({ id, task }: ITodo) {
  const [editedTodo, setEditedTodo] = useState<string>(task)
  const { setTodos, onEdit, setOnEdit, onEditId, setOnEditId } = useTask()

  const onCancelEdit = () => {
    setOnEditId('')
    setEditedTodo(task)
  }

  const handleEditTodo = (id: string) => {
    if (!onEdit) {
      setOnEdit(true)
      setOnEditId(id)
    } else {
      if (onEditId === id) {
        setTodos((prevTodos) =>
          prevTodos!.map((todo) =>
            todo && todo.id === id ? { ...todo, task: editedTodo } : todo
          )
        )
        setOnEdit(false)
        setOnEditId('')

        toast({
          title: 'Success',
          description: 'Task has been successfully updated.'
        })
      } else {
        setOnEditId(id)
      }
    }
  }

  const removeTodo = () => {
    const todos: ITodo[] | null = getLocalStorage(todosKey)
    const filteredTodos = todos?.filter((todo) => todo.id !== id)
    setLocalStorage(todosKey, filteredTodos)

    location.reload()
  }

  return (
    <div className='flex h-11 items-center justify-between gap-2'>
      <Checkbox className='h-3 w-3' />
      {onEdit && onEditId === id ? (
        <form className='flex-1'>
          <Input
            type='text'
            value={editedTodo}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEditedTodo(event.target.value)
            }
            className='px-2 py-1 text-sm md:text-base'
          />
        </form>
      ) : (
        <p className='flex-1 px-2 py-1 text-sm md:text-base'>{task}</p>
      )}
      <div className='flex gap-4'>
        {onEdit && onEditId === id ? (
          <>
            <Save
              size={16}
              onClick={() => handleEditTodo(id)}
              className={cn('cursor-pointer', {
                'opacity-60': task === editedTodo
              })}
            />
            <X size={16} onClick={onCancelEdit} className='cursor-pointer' />
          </>
        ) : (
          <>
            <SquarePen
              size={16}
              onClick={() => handleEditTodo(id)}
              className='cursor-pointer'
            />
            <Trash size={16} onClick={removeTodo} className='cursor-pointer' />
          </>
        )}
      </div>
    </div>
  )
}
