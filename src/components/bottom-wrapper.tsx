import React from 'react'

export default function BottomWrapper({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='fixed bottom-6 flex w-full justify-end pr-8 md:max-w-screen-md md:pr-0 lg:bottom-10'>
      {children}
    </div>
  )
}
