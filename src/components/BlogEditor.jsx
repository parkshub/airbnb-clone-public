'use client'

import React, { useEffect, useState, useRef, useMemo } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Image, Box, Button, Input, Text } from '@chakra-ui/react';
import HTMLReactParser from "html-react-parser";
import { editorConfig } from '@/utils/editorConfig';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });


const BlogEditor = () => {

  const { data: session, status } = useSession()

  // console.log('these are props', JoditEditor.defaultoptions)

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("")
  const [titleImage, setTitleImage] = useState("")
  
  const router = useRouter()

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const onFileChange = (e) => {
    const file = e.target.files[0];

    // console.log('this is file name', file)
    
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

  const onSave = (e) => {
    localStorage.setItem('blogContent', JSON.stringify({title, titleImage, content}))
  }

  const onSubmit = async (e) => {
    localStorage.removeItem('blogContent')

    try {
      const response = await axios.post('/api/blog/create', JSON.stringify({title, titleImage, content}))  
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    const blogContentJSON = localStorage.getItem('blogContent')
    
    if (blogContentJSON !== null) {

      const blogContent = JSON.parse(blogContentJSON)
      setTitle(blogContent.title)
      setTitleImage(blogContent.titleImage)
      setContent(blogContent.content)
    }
    
  },[])

  if (status === "loading") {
    return <p>Loading...</p>
  }
  
  if (status === "unauthenticated") {

    setTimeout(() => {
      router.push('/')
    }, 2)
    return <p>Access Denied</p>
    // might want to create a separate page for this
  }

  return (
    <Box justifyContent='center' display='flex'>
      <Box marginTop={'10%'}>

        <form>
          <div>
            <label htmlFor="titleImage">Select a title image less than 10MBs</label>
            <input id="titleImage" type="file" name="titleImage" onChange={ onFileChange }/>
          </div>
        </form>

        <Input placeholder='Title' my='2rem' value={title} onChange={onTitleChange}></Input>

        <JoditEditor
          ref={editor}
          value={content}
          config={editorConfig}
          onBlur={(newContent) => setContent(newContent)}
        />

        <div>
          <div>
            <Image src={ titleImage } className={ titleImage ? "CLASS NAME CHANGE LATER" : "hide" } width={ 300 }  alt="preview" />
          </div>
          <Text fontSize='3xl' fontWeight='bold'>{title}</Text>
          <Text>{HTMLReactParser(content)}</Text>
        </div>

        <Button onClick={onSave}>Save</Button>
        <Button m='2rem' onClick={onSubmit}>Submit</Button>

      </Box>
      <Toaster/>
    </Box>
  )
}

export default BlogEditor