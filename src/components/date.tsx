export default function NowDate() {
  const date = new Date()

  const day = date.toLocaleDateString('en-US', { weekday: 'long' })
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <div className='flex flex-col items-center justify-center py-8 font-geistMono'>
      <h2 className=''>{day}</h2>
      <p className='text-[10px] text-gray-500'>{formattedDate}</p>
    </div>
  )
}
