'use client'

import { ITodo, todosKey } from '@/constants/todos'
import { getLocalStorage, setLocalStorage } from '@/hooks/local-storage'
import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'

export interface ITodoContext {
  todos: ITodo[] | null
  setTodos: React.Dispatch<SetStateAction<ITodo[] | null>>
  isLoading: boolean
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
  onAdd: boolean
  setOnAdd: React.Dispatch<SetStateAction<boolean>>
  onEdit: boolean
  setOnEdit: React.Dispatch<SetStateAction<boolean>>
  onEditId: string
  setOnEditId: React.Dispatch<SetStateAction<string>>
}

const TaskContext = createContext<ITodoContext | undefined>(undefined)

const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [todos, setTodos] = useState<ITodo[] | null>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [onAdd, setOnAdd] = useState<boolean>(false)
  const [onEdit, setOnEdit] = useState<boolean>(false)
  const [onEditId, setOnEditId] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const todosFromLocalStorage: ITodo[] | null = getLocalStorage(todosKey)

      if (todosFromLocalStorage) {
        setTodos(todosFromLocalStorage)
      }

      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    setLocalStorage(todosKey, todos)
  }, [todos])

  return (
    <TaskContext.Provider
      value={{
        todos,
        setTodos,
        isLoading,
        setIsLoading,
        onAdd,
        setOnAdd,
        onEdit,
        setOnEdit,
        onEditId,
        setOnEditId
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

const useTask = (): ITodoContext => {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error('useTask must be used within a TaskProvider')
  }
  return context
}

export { TaskContext, TaskProvider, useTask }
