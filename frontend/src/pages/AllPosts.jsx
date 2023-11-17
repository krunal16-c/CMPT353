import React, { useContext } from 'react'
import { MyContext } from '@/contexts/PostsContext'

import Post from '@/components/posts/post'
export default function AllPosts () {
  const { posts } = useContext(MyContext)

  return (
    <div className='w-11/12 border rounded-md mx-auto p-4'>
      {posts && posts.map(item => <Post key={item.id} post={item} />)}
    </div>
  )
}
