import React from 'react'
import { Link } from 'react-router-dom'
export default function header () {
  return (
    <div className='bg-white w-full py-5'>
      <div className='w-11/12 mx-auto flex justify-between'>
        <Link to='/'>
          <p className='text-4xl text-gray-500'>Social Posts</p>
        </Link>
        <div>
          <Link to='/posts'>
            <button className='bg-gray-500 px-3 py-2 rounded-md text-white font-bold mx-1'>
              All Posts
            </button>
          </Link>
          <Link to='create'>
            <button className='bg-gray-500 px-3 py-2 rounded-md text-white font-bold mx-1'>
              Create Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
