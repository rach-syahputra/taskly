export interface ITodo {
  id: string
  task: string
  complete: boolean
}

export const initialTodos: ITodo[] = [
  {
    id: '1',
    task: 'Learn coding at Purwadhika',
    complete: false
  },
  {
    id: '2',
    task: 'Write a documentation',
    complete: false
  },
  {
    id: '3',
    task: 'Look for a website design',
    complete: false
  }
]

export const todosKey = 'taskly-todos'
