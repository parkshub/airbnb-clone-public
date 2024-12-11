import React from 'react'
import HTMLReactParser from "html-react-parser";
import { Box } from '@chakra-ui/react'

const BlogContainer = ({ blog }) => {
  return (
    <Box 
      className='blogContent-container' 
      fontSize={['1.2rem', '1.5rem', '1,8rem', '2rem', '2rem', '2rem']}
      px={['0','0','8rem','15rem','15rem','20rem']}
      // lineHeight={['3.5rem', '3.5rem', '3.5rem', '3.5rem', '3.5rem', '3.5rem']}
      lineHeight={['2rem', '2.3rem', '2.5rem', '3.5rem', '3.5rem', '3.5rem']}
      fontFamily={'sans-serif'}
    >
      { HTMLReactParser(blog.content) }
    </Box>
  )
}


export default BlogContainer