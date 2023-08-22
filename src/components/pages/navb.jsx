import React from 'react'
import { Link } from 'react-router-dom'

function NavB() {
  return (
    <>
          <Link to='/'>
        <button onclick="buttonHandler()" title="Contact Sale"
        class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">&#8656;</button>
    </Link>
    </>
  )
}

export default NavB