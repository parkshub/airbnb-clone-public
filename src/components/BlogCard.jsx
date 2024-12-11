import React from 'react'
import { Card, CardBody, CardFooter, Box, Image, Stack, Heading, Text, Spacer, Flex } from '@chakra-ui/react'
import HTMLReactParser from 'html-react-parser'
import { parse } from 'node-html-parser';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation';


// import s from '../../public/Images/gallery/'


const BlogCard = ({image, title, content, createdAt, id}) => {

  // console.log('this is what blogcard received', title, createdAt, id)

  const router = useRouter()
  const pathname = usePathname()

  let blogDate = new Date(createdAt).toDateString().split(' ')
  let month = blogDate[1]
  let year = "'" + blogDate[3].slice(2)

  const prasedContent = parse(content)

  for (let element of prasedContent.querySelectorAll('img')) {
    element.setAttribute('src', '')
    element.setAttribute('alt', '')
  }

  const onBlogClick = () => {
    // console.log('this is blogs id', id)
    // console.log('this is the path name', pathname === 'active')
    router.push(pathname + 'blog/' + id)
    // router.push('/dashboard', { scroll: false })
  }
  

  return (
    
    <>
{/* const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
}; */}
    {/* <Card maxW='md' variant='unstyled'> */}
    {/* <Card w={['sm', 'md', 'md', 'xl', 'xl', 'xl']} maxW='xl' variant='unstyled'> */}
  <Card maxW='4xl' variant='unstyled'>
      
    <CardBody border='none'>
        <Image
          // src='https://images.squarespace-cdn.com/content/v1/55383c3ee4b0caf82892540f/0ca4e6a4-0425-4a57-9572-993913483485/20221006_153252.jpg?format=2500w'
          src={image}
          alt='blog title picture'
          borderRadius='2rem'
          shadow='xl'
          width={'100%'}
          aspectRatio={{ base: "4/3", sm: "4/3"}}
          objectFit={'cover'}
        />

      <Box position='absolute' top='0' left='4.5rem' bg='white' borderBottomRadius='1.3rem' boxShadow='dark-lg' minW='4em'>
          <Flex 
            textAlign='center' 
            py={['0.8rem', '0.4rem', '0.4rem', '0.6rem', '0.6rem', '0.6rem']} 
            px={'1.2rem'}
            flexDirection='column'
            // gap={'0rem'}
          >
            {/* <Box> */}
              <Text 
                fontWeight='bold' 
                fontSize={['2xl', '2xl', '2xl','3xl', '3xl', '3xl']} 
                color='black' 
                lineHeight={{base: '1.7rem', lg: '2rem'}}
                pt={0.3}
              >
                {month}
              </Text>
              
              <Text 
                fontWeight='normal' 
                fontSize={['2xl', '2xl', '2xl','3xl', '3xl', '3xl']} 
                color='#808080' 
x                lineHeight={{base: '1.7rem', lg: '2rem'}}

                pb={0.3}
              >
                {year}
              </Text>
            {/* </Box> */}
          </Flex>
      </Box>

      <Stack pt='5rem' spacing='5'>
        <Heading 
          // size={['lg']}
          size={['xl']}

          noOfLines={{base:2, sm:1}}
        >
          {title}
        </Heading>

        <Box 
          noOfLines={{base:2, sm:1}}
          // noOfLines={2} 
          fontSize={'xl'} 
          fontFamily={'inherit'}
        >
          { HTMLReactParser(prasedContent.toString()) }
        </Box>
      </Stack>
    </CardBody>

    <CardFooter pt='1.5rem' pb='3rem'>
      <Image 
        src="/blog_arrow_icon.png" 
        alt="" ml={'0.1rem'} 
        width={['3.5rem', '3.5rem', '3.5rem', '3.5rem', '3.5rem', '3.5rem']} 
        height={['3.5rem', '3.5rem', '3.5rem', '3.5rem', '3.5rem', '3.5rem']}
        onClick={onBlogClick}
        borderRadius={"100%"}
        _hover={{cursor:'pointer', boxShadow:'outline'}}
      />
    </CardFooter>
  </Card>
  </>
  )
}

export default BlogCard
