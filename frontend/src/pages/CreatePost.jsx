import React, { useContext, useState } from 'react'
import { MyContext } from '@/contexts/PostsContext'

export default function CreatePost () {
  const { submitPost } = useContext(MyContext)

  const [topic, setTopic] = useState('')
  const [data, setData] = useState('')
  const createPost = e => {
    e.preventDefault()
    submitPost({ topic, data })
  }
  return (
    <div className='w-11/12 border rounded-md mx-auto'>
      <form onSubmit={createPost}>
        <h2 className='my-3 mx-2 text-2xl'>Create New Post</h2>
        <div className='flex w-full flex-col'>
          <input
            className='border py-2 my-1 mx-2 rounded-md px-2'
            type='text'
            name='topic'
            id='topic'
            placeholder='post topic'
            value={topic}
            onChange={e => setTopic(e.target.value)}
          />
          <textarea
            className='border py-2 my-1 mx-2 rounded-md px-2'
            name='data'
            id='data'
            cols='30'
            rows='10'
            placeholder='post content'
            value={data}
            onChange={e => setData(e.target.value)}
          ></textarea>
          <button
            className='px-3 py-2 bg-gray-400 rounded-md mx-auto my-3 text-white font-bold'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
