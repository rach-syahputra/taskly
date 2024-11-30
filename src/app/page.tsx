import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todo | Home',
  description: 'todo list app that uses localStorage for its functionality'
}

export default function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <p className='font-geistSans font-black text-primary hover:text-secondary'>
        Geist Sans
      </p>
      <p className='font-geistMono'>Geist Mono</p>
    </div>
  )
}
