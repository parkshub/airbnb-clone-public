'use client'

import React, { useEffect, useState, useRef, useMemo } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Image, Box, Button, Input, Text, Skeleton, useToast } from '@chakra-ui/react';
import HTMLReactParser from "html-react-parser";
import { editorConfig } from '@/utils/editorConfig';

import BlogContainer from '@/components/BlogContainer';

///////////////////////////
// Change html elements to chakra ui
///////////////////////////


///////////////////////////
// Since I'm not wrapping the html content in a separate container anymore
// fullcontent is redundant... get rid of/fix when you have time
///////////////////////////



const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });


const BlogEditor = ({ params }) => {

  // const { id } = params

  const toast = useToast()

  const id = params.id === undefined ? undefined : params.id[0]

  // console.log('this is params', params)
  // console.log('this is the id of updating blog', id)
  ///////////////////////////
  // comment this part out
  const { data: session, status } = useSession()
  const user = session?.user
  
  // uncomment this part
  // const status = 'authenticated'
  // const user = null
  // const user = 'someone'
  ///////////////////////////

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [fullContent, setFullContent] = useState("");
  const [title, setTitle] = useState("")
  const [titleImage, setTitleImage] = useState("")

  const [loaded, setLoaded] = useState(true)

  // console.log('this is content', content)
  // console.log('this is fullcontent', fullContent)
  
  const router = useRouter()
  

  const onContentChange = (newContent) => {
    console.log('content change is running')
    setContent(newContent)
    // setFullContent(`<div className='blogContent-container'>${newContent}</div>`)
    setFullContent(newContent)
  }

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const onFileChange = (e) => {
    const file = e.target.files[0];

    console.log('this is file name', file)
    
    const fileSize = e.target.files.item(0).size
    const fileMb = fileSize / 1024 ** 2

    if (fileMb > 10) {
      toast.error("file too large")
      document.querySelector("#titleImage").value = ""
    }
    else {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
          setTitleImage(reader.result)
      }
    }
  };

  // const onSave = (e) => {
    
  //   localStorage.setItem('blogContent', JSON.stringify({title, titleImage, content}))
  // }

  const onSubmit = async (e) => {

    setLoaded(false)

    localStorage.removeItem('blogContent')
    
    // const fullContent = `<div classN>${content}</div>`

    try {
      const response = await axios.post('/api/blog/create', JSON.stringify({title, titleImage, content: fullContent}))
      
      setLoaded(true)
      router.push('/blog')
      
      toast({
        title: `${response.data.message}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

    } catch (error) {
      setLoaded(true)

      toast({
        title: `${error.response.data.message}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })

    }
  }

///////////////////////////
// working on update function
///////////////////////////

  const onUpdate = async(e) => {

    setLoaded(false)
    // uncomment below after testing
    try {
      const response = await axios.put(`/api/blog/${id}`, {
        title, 
        titleImageURL: titleImage ? titleImage : "", 
        content: fullContent})

      setLoaded(true)
      router.push(`/blog/${id}`)
      toast({
        title: `${response.data.message}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch(error) {
      setLoaded(true)

      toast({
        title: `${error.response.data.message}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }    
  }
///////////////////////////
///////////////////////////



  useEffect(() => {
    if (!id || !user) {
      return
    }

    async function getBlog(id) {
      const response = await axios.get(`/api/blog/${id}`)
      const data = response.data
      console.log('this is the response', response.data)
      setTitle(data.title)
      setTitleImage(data.titleImageURL)
      setContent(data.content)
      setFullContent(data.content)
    }

    getBlog(id)
    
    
  }, [])

  useEffect(() => {

    if (!user) {
      return
    }
    const blogContentJSON = localStorage.getItem('blogContent')
    
    if (blogContentJSON !== null) {

      const blogContent = JSON.parse(blogContentJSON)
      setTitle(blogContent.title)
      setTitleImage(blogContent.titleImage)
      // setContent(blogContent.content)
      setContent(blogContent.content)
      setFullContent(blogContent.content)
      /////////////////////////////////////////////////////
      /////////////////////////////////////////////////////
      /////////////////////////////////////////////////////

    }
    
  },[])

  if (status === 'unauthenticated') {
    // toast.success('Successfully Logged in! Redirecting...')
    
    // toast.error('You do not have permission to view this page, redirecting to main page', {
    //   toastId: "123"
    // });

    toast({
      title: 'You do not have permission to view this page, redirecting to main page',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })

    setTimeout(() => {
      router.push('/') 
    }, 3000)
    
    return (
      <>
        {/* <div>no permission</div> */}
        {/* <Toaster/> */}
      </>

    )
  }


  // if (status === "loading") {
  //   return <p>Loading...</p>
  // }
  

  return (
    
      <Box justifyContent='center' display='flex'>
        <Box marginTop={'10%'}>
        
          <Skeleton isLoaded={loaded}>
          <Box>
            <Image src={ titleImage } className={ titleImage ? "CLASS NAME CHANGE LATER" : "hide" } width={ 300 }  alt="preview" />  
            <Text fontSize='3xl' fontWeight='bold'>{title}</Text>
          </Box>

          <form>
            <Box>
              <label htmlFor="titleImage">Select a title image less than 10MBs </label>
              <input id="titleImage" type="file" name="titleImage" onChange={ onFileChange }/>

              { titleImage !== "" &&               
                <Button 
                  bg="rgba(255, 0, 0, 0.2)" 
                  _hover={{ bg: "rgba(255, 0, 0, 0.3)" }}
                  // leftIcon={<FaFacebook />}
                  onClick={ ()=> setTitleImage("") }
                >
                  Delete Image
                </Button>
              }

            </Box>
          </form>

          <Input placeholder='Title' my='2rem' value={title} onChange={ onTitleChange }></Input>

          <JoditEditor
            ref={editor}
            value={content}
            config={editorConfig}
            // onBlur={(newContent) => setContent(newContent)}
            onBlur={(newContent) => onContentChange(newContent)}
          />

          <Box className='container'>
            <BlogContainer blog={{'content': content}}/>
            {/* <Text>{HTMLReactParser(content)}</Text> */}
          </Box>
          </Skeleton>

          {/* <Button onClick={onSave}>Save</Button> */}

          {
            !id 
              ? <Button m='2rem' isLoading={!loaded} onClick={onSubmit}>Submit</Button>
              : <Button m='2rem' isLoading={!loaded} onClick={onUpdate}>Update</Button>
          }
              


        </Box>
        {/* <Toaster/> */}
      </Box>
  )
}

export default BlogEditor