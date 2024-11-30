'use client'

import ThemeToggle from './theme-toggle'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-2'>
      <h1 className='text-xl font-black'>Taskly</h1>
      <ThemeToggle />
    </nav>
  )
}
