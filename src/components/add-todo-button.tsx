'use client'

import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export default function AddTodoButton() {
  return (
    <Button
      variant='outline'
      size='icon'
      className='fixed bottom-5 right-5 h-14 w-14 rounded-full p-0 lg:bottom-10 lg:right-10'
    >
      <Plus />
    </Button>
  )
}
