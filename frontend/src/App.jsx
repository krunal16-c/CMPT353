import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PostsContext from '@/contexts/PostsContext'
import Header from '@/components/Header'

import Home from '@/pages/Home'
import CreatePost from '@/pages/CreatePost'
import AllPosts from '@/pages/AllPosts'
import '@/App.css'

function App () {
  return (
    <div className='App'>
      <PostsContext>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CreatePost />} />
            <Route path='/posts' element={<AllPosts />} />
          </Routes>
        </BrowserRouter>
      </PostsContext>
    </div>
  )
}

export default App
