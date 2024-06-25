import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='flex justify-between px-6 py-2 bg-blue-400'>
        <span className='text-white font-bold text-2xl'>iTask</span>
        <ul className='flex  gap-6 font-semibold'>
            <li className='hover:text-white cursor-pointer'>Home</li>
            <li className='hover:text-white cursor-pointer'>About</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
