'use client'

import React from 'react'
import BlogCard from './BlogCard'
import { Flex } from '@chakra-ui/react'
import { Box, Grid, GridItem, Center, Text, Stack } from '@chakra-ui/react'
import axios from 'axios'
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

import { useEffect, useState } from 'react'
import { green } from 'colors'

import { ComponentHeader } from './ComponentHeader'

const BlogCardContainer = () => {

  const images = ['Images\\gallery\\image1.png', 'Images\\gallery\\image2.png', 'Images\\gallery\\image3.png', 'Images\\gallery\\image4.png', 'Images\\gallery\\image5.png', 'Images\\gallery\\image6.png']

  const [blogPosts, setBlogPosts] = useState([])

  const checkDate = (oldDate) => {
    return new Date(oldDate).getMonth() < new Date().getMonth()
  }

  // console.log('these are blogpost', blogPosts)

  useEffect(() => {

    const useStorage = localStorage.getItem('blogs') !== null 
      ? JSON.parse(localStorage.getItem('blogs'))
      : false

    if (useStorage) { 
      // console.log('using local storage for blogs')
      setBlogPosts(useStorage.blogs) 
    }
    if (!useStorage || checkDate(useStorage.updatedAt)) {
        // console.log('fetching new data for blogs')
        getPosts()
    }

    async function getPosts() {      
      const response = await axios.get('/api/blog')
      console.log('this is blog response from api', response.data)
      setBlogPosts(response.data)
      
      localStorage.setItem('blogs', JSON.stringify({blogs: response.data, updatedAt: new Date()}))
    }

    // getPosts()

  }, [])

  return (
    // <Box className='container' py={['5rem', '5rem', '5rem', '5rem', '10rem', '10rem']}>
    <Box className='container' py={'7rem'}>

      <ComponentHeader text1={"WHAT'S TRENDING"} text2={"Latest Blogs & Posts"} pb={'5rem'}/>

      <Box>
        <Swiper
          className="mySwiper blog-card-container"
          modules={[ Pagination ]}
          pagination={{ 
            clickable: true, 
            dynamicBullets: true, 
            dynamicMainBullets: 1,
          }}
          
          breakpoints={{
            300: { slidesPerView: 1 },
            480: { slidesPerView: 2},
            992: { slidesPerView: 3}
          }}
        >

          {
            blogPosts.map((blogPost, i) => {
            // comment or erase bottom section and uncomment the above
            // [...blogPosts, ...blogPosts, ...blogPosts].map((blogPost, i) => {
              return (                
                <SwiperSlide className='blog-card swiper-slide-blog' key={i}>
                  <BlogCard 
                    id={blogPost._id}
                    // image={images[i]}
                    image={blogPost.titleImageURL ? blogPost.titleImageURL : images.pop()} 
                    content={blogPost.content} 
                    title={blogPost.title} 
                    createdAt={blogPost.createdAt}
                  />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </Box>
    </Box>
  )
}

export default BlogCardContainer