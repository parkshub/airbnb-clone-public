'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HTMLReactParser from "html-react-parser";
import { Button, Box, Text, Image, Link, Heading, Divider, useToast, Skeleton, Flex } from '@chakra-ui/react';
import SecondPageHeader from '@/components/SecondPageHeader';
// import content from '@/utils/blogHtmlTest'
import { useSession } from 'next-auth/react';
import { ArrowUpIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import BlogContainer from '@/components/BlogContainer';

import { useRouter } from 'next/navigation';

///////////////////////////////////
// Can probably erase second page header component
///////////////////////////////////


const BlogPage = ({ params }) => {

  // console.log('this is content', content)
  const router = useRouter()
  const toast = useToast()
  const { id } = params

  const [blogPosts, setBlogPosts] = useState([])
  const [loaded, setLoaded] = useState(false)
  
  const [prev, setPrev] = useState(null)
  const [next, setNext] = useState(null)

  // console.log('this is prev and next', prev, next)


  // const [blogPosts, setBlogPosts] = useState(content)
  
  // console.log('this is blogposts', blogPosts)
  
  ///////////////////////////////////
  // comment this part out
  const { status, data: session } = useSession()
  const user = session?.user
  ///////////////////////////////////
  
  ///////////////////////////////////
  // for testing uncomment this
  // const status = 'authenticated'
  const checkDate = (oldDate) => {
    return new Date(oldDate).getMonth() < new Date().getMonth()
  }


  const onDelete = async (e) => {

    const response = await axios.delete(`/api/blog/${e.target.id}`)
    // const response = axios.delete(`/api/blog/${e.target.id}`)
    
    if (!id) {
      setBlogPosts(blogPosts.filter(x => x._id !== e.target.id))
    } else {
      router.push('/')
    }

    toast({
      title: 'Blog Post Deleted',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  const onClickPost = (blogId) => (e) => {
    ///////////////////////////////////
    // HERE YOU SHOULD ROUTE TO THE SPECIFIC BLOG
    // DOESN'T SEEM ALL THAT USEFUL, BUT...
    ///////////////////////////////////
    router.push(`/blog/${blogId}`)
  }

  const onClickNav = (idx) => {
    // console.log('this is the posts idx', idx)
    const blogId = JSON.parse(localStorage.getItem('blogs')).blogs[idx]._id
    router.push(`/blog/${blogId}`)
  }


  ///////////////////////////////////
  // scroll to top functionality
  // combine with other useefffect after responsiveness
  ///////////////////////////////////
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  ///////////////////////////////////


  useEffect(() => {
    setLoaded(false)

    const useStorage = localStorage.getItem('blogs') !== null 
      ? JSON.parse(localStorage.getItem('blogs'))
      : false

    // if (useStorage) { 
    //   console.log('using local storage for blogs')
    //   setBlogPosts(useStorage.blogs)
    // }


    if (!useStorage || checkDate(useStorage.updatedAt)) {
      // console.log('fetching new data for blogs')
      getPosts()
    }

    if (id) {
      const blogs = JSON.parse(localStorage.getItem('blogs')).blogs

      const idx = blogs.findIndex(x => x._id === id[0])

      if (idx == 0) {
        setNext(idx + 1)
      }
      else if (idx == blogs.length - 1) {
        setPrev(idx - 1)
      }
      else {
        setPrev(idx - 1)
        setNext(idx + 1)
      }
        
      setBlogPosts([blogs[idx]])
    }
    else {
      setBlogPosts(JSON.parse(localStorage.getItem('blogs')).blogs)
    }

    // id ? getPost(id) : getPosts()

    setLoaded(true)

    async function getPosts() {
      const response = await axios.get('/api/blog')
      // setBlogPosts(response.data)
      localStorage.setItem('blogs', JSON.stringify({blogs: response.data, updatedAt: new Date()}))
    }

    // async function getPost(id) {
    //   // const response = await axios.get(`/api/blog/${id}`)
    //   setBlogPosts([response.data])
    // }

  },[])

  return (
    <>
      <main className='section'>
        <div className='container'>    

    {/* https://stackoverflow.com/questions/20101994/how-to-git-pull-from-master-into-the-development-branch */}
    { isVisible && (
        <Box
          onClick={scrollToTop}
          position='fixed'
          bottom='20px'
          right={['16px', '84px']}
          zIndex={3}
        >
          <Button
            size={'md'}
            rightIcon={<ArrowUpIcon/>}
            color={'white'}
            backgroundColor={'#1d4734'}
            _hover={{ backgroundColor:'#1d791d' }}
            variant='solid'
          >
            Scroll To Top
          </Button>
        </Box>
      )}

      {
        blogPosts.length &&
          blogPosts.map((blog, i) => {
            // console.log('this is blog posts', blog, typeof(blog))
            return (
              <Box 
                // border='solid 1px black'
                mb="2rem" 
                px={'5rem'} 
                className='blog-container' 
                key={i}
              >
                <Box my="2rem" display="flex" alignItems="center">
                  { status === 'authenticated' &&
                    <>
                      <Button
                        id={blog._id}
                        onClick={onDelete}
                        bg="rgba(255, 0, 0, 0.2)"
                        _hover={{ bg: "rgba(255, 0, 0, 0.3)" }}
                      >
                        Delete
                      </Button>
                      <Link
                        ml="1rem"
                        py="0.5rem"
                        px="1rem"
                        fontWeight={500}
                        borderRadius="4px"
                        bg="rgba(128, 128, 128, 0.2)" // Set the background color to a light gray
                        _hover={{ bg: "rgba(128, 128, 128, 0.3)" }}
                        href={`/blogEditor/${blog._id}`}
                      >
                        Update
                      </Link>
                    </>
                  }
                </Box>

                {/* MAKE SURE TO GET RID OF THE CLASSNAMES LATER IN CSS */}

                  { blog.titleImageURL !== ''  &&
                    <Image
                      src={blog.titleImageURL}
                      alt={`${blog.title} image`}
                      width={"90%"}
                      height="auto"
                      borderRadius={'75px'}
                      objectFit={'cover'}
                      mx={'auto'}
                      mb={'6rem'}
                      // className='big-image'
                    />
                  }


                <Skeleton isLoaded={loaded}>
                <Box mb={['4rem', '4rem', '4rem', '6rem', '6rem', '6rem']} textAlign={'center'}>
                  <Heading 
                    as='h3' 
                    fontSize={['2rem', '3.5rem', '3.5rem', '4.1rem', '4.1rem', '4.1rem']}
                    color={'#1d4734'}
                    lineHeight={'110%'}
                    mb={['4rem', '4rem', '4rem', '6rem', '6rem', '6rem']}
                    // className='second__sub-title'
                    _hover={!id && {
                      color:'#1d791d', 
                      cursor:'pointer'
                    }}
                    onClick={onClickPost(blog._id)}
                  >
                    { blog.title }
                  </Heading>

                  <Text fontSize={['lg', 'xl', 'xl', '2xl', '2xl', '2xl']} fontWeight='bold'>
                    { new Date(blog.createdAt)
                        .toLocaleString('default', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })
                    }
                  </Text>
                </Box>
                </Skeleton>

                <Skeleton isLoaded={loaded}>
                  <BlogContainer blog={blog}/>
                </Skeleton>

                <Flex mt={'2rem'} justifyContent={'space-between'}>
                  { 
                    prev !== null && 
                        <Button
                          p={'1rem'} 
                          color={'#1d4734'}
                          leftIcon={<ChevronLeftIcon/>}
                          onClick={() => onClickNav(prev)}
                        >
                          prev
                        </Button>
                  }

                  {
                    next !== null && 
                      <Box>
                        <Button 
                          p={'1rem'}
                          color={'#1d4734'}
                          rightIcon={<ChevronRightIcon/>}
                          onClick={() => onClickNav(next)}
                        >
                          next
                        </Button>
                      </Box>
                  }
                </Flex>
                
                <Divider 
                  my={'10rem'} 
                  mx={'auto'}
                  width={'70%'}
                  borderWidth={'0.1rem'} 
                  borderColor={'#1d4734'} 
                  display={blogPosts.length - 1 == i ? 'none': ""}
                />

              </Box>
              )
            })
          }
        </div>
      </main>
    </>
  )
}

export default BlogPage