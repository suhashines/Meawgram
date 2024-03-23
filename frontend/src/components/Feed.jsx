import { Box } from '@mui/material'
import React from 'react'
import PostCard from './PostCard'
import posts from '../api/post'

const Feed = () => {
  return (
    <Box p={2} flex={4}>
    {
      posts.map((item,index)=>{
        return (
          <PostCard key={index} posts={item}/>
        )
      })
    }
    
    
    
    </Box>
  )
}

export default Feed