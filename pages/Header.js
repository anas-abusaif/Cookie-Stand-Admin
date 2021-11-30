import React from 'react'

export default function Header() {
  return (
    <div>
      <header className='top-0 flex items-center justify-between w-screen mb-10 bg-green-500'>
          <h1 className='p-4 text-3xl font-bold'>Cookie Stand Admin</h1>
          <a href='#' className='p-1 mr-5 bg-white rounded-md'>Overview</a>
        </header>
    </div>
  )
}
