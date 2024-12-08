export interface ITodo {
  id: string
  task: string
}

export const initialTodos: ITodo[] = [
  {
    id: '1',
    task: 'Learn coding at Purwadhika'
  },
  {
    id: '2',
    task: 'Write a documentation'
  },
  {
    id: '3',
    task: 'Look for a website design'
  }
]

export const todosKey = 'taskly-todos'
