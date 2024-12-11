import React, { useState } from 'react'
import { Card, Flex, CardBody, Text, CardFooter, Box, Divider, Image, Spacer, VStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'


export const Review = ({ comment, date, firstName, profilePicture, property }) => {

    date = new Date(date)
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate()
    const year = date.getFullYear()

  return (
    // <Card borderRadius='1.5rem' shadow='xl' py='5rem' px={['5rem', '5rem']} pb='0'>
    // <Card borderRadius='1.5rem' shadow='xl' p='5rem' pb='0'>
    <Card borderRadius='1.5rem' shadow='xl' px='5rem' pb='0' pt={{base: '4rem', sm: '6rem'}}>
    
        
        {/* <CardBody minH='20rem'> */}
        <CardBody h={['8rem', '10rem', '12rem', '15rem']} display={'flex'} flexDirection={'column'}>
        {/* <CardBody h={['1rem', '1rem', '20rem']}> */}
            <Image
                boxShadow={'2xl'}
                src={profilePicture} 
                height={['80px', '100px', '100px', '100px', '100px']}
                width={['80px', '100px', '100px', '100px', '100px']}
                borderRadius='100%' 
                position='absolute' 
                top={['-15%', '-15%', '-15%', '-15%', '-15%']}
                left={['10%', '6%', '6%', '6%', '6%']}
                alt=""
            />
                
            {/* <Box height={'15rem'}> */}
                {/* <VStack height={'15rem'}> */}
                    <Text 
                        fontSize={['md', 'xl', '2xl', '2xl','2xl','2xl']} 
                        lineHeight={['2rem', '2.5rem', '2.5rem', '3rem','3rem','3rem']} 
                        fontWeight='medium'
                        height={'inherit'} 
                        overflowY={'auto'}
                        // className='swiper-no-swiping'
                    >
                        { comment }
                    </Text>

                    <Text fontSize={['sm', 'sm', 'md', 'md','md','md']} alignSelf={'flex-end'} pt={'2rem'}>
                        Review of { property } 
                        {/* - { month.length > 4 ? month.slice(0,3) + '.' : month } {day + ', ' + year} */}
                    </Text>
                {/* </VStack> */}
            {/* </Box> */}
        </CardBody>
        
        <Divider/>

        <CardFooter py='3.2rem'>                
                <Box width='30%' alignSelf={'center'}>
                    <Text fontSize={['md', 'xl', '2xl', '2xl','2xl','2xl']} fontWeight='normal' noOfLines='1'>{ firstName }</Text>
                </Box>

                <Spacer/>

                <Flex 
                    width='8rem' 
                    alignItems='center' 
                    justifyContent='space-around' 
                    fontSize={{base: '1.2rem', lg: '1.5rem'}}>
                    ⭐⭐⭐⭐⭐
                        {/* {[1,2,3,4,5].map((x, i) => <StarIcon color='#DA9A3B' boxSize={['1rem', '1rem' ,'1.3rem', '1.3rem','1.3rem']} key={i}/>)} */}
                </Flex>
        </CardFooter>
    </Card>
  )
}
