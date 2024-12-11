import React from 'react'

import { Grid, GridItem, Box, Flex, Text, Image,  } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';


export default function Bubbles () {

    const padding = [6,6,6,6,6,6]
    // const width = ['25rem', '25rem', '30rem', '30rem']
    const height = {base: '70px', md: '90px'}
    const width = {base: '100%', sm: '50%'}

  return (
        <Flex
            mt={'5rem'}
            mb={{base: '5rem', md: '10rem'}}
            className='bubbles'
            flexDirection={{base: 'column', sm: 'row'}}
            gap={'1rem'}
            justifyContent={'center'}
            // justifyContent={''}
            alignItems={'center'}
        >
            <Flex 
                width={width} 
                // justifyContent={'right'} 
                justifyContent={{base: 'center', sm:'right'}}
                className="flex-profiles-container">
            <Flex 
                className="flex-profiles-section"
                borderRadius="8rem"
                height={height}
                // background={'yellow.200'}
                boxShadow="lg"
                px={'2rem'}
                align="center"
            >
                <Flex 
                    className='flex-profiles-image-container'
                    width={{base:'60%', md:'60%'}}
                >
                    {Array.from({ length: 5 }, (_, i) => (
                        <Image
                            position="relative"
                            top="0"
                            // left={50 + -32.5 * i + '%'}
                            // left={{base: 5 + -15 * i + '%', md: 50 + -32.5 * i + '%'}}
                            left={{
                                base: 5 + -10 * i + '%', 
                                sm: 5 - 15 * i + '%', 
                                md: 60 + -35 * i + '%', 
                                lg: 65 + -37 * i + '%'}}
                            zIndex={i}
                            // src={`./reviews/user-${i + 1}.png`}
                            src={`./reviews/${i + 1}.png`}
                            width={'36px'}
                            height={'36px'}
                            key={i}
                            alt="a stack of profile pictures of reviewers"
                        />
                    ))}
                </Flex>

                <Flex 
                    fontSize={{ base: 'lg', md:'2xl' }}
                    // alignSelf={'right'}
                    // alignContent={'right'}
                    // width={'100%'}
                    // width={{base:'30%', md:'40%'}}
                    // justifyContent={'center'}
                    // textAlign={'center'}
                    // alignItems={'center'}
                >
                    <Flex 
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'right'}
                        textAlign={'center'}
                    >
                        <Text>⭐4.95</Text>
                        <Text>+783 reviews</Text>
                    </Flex>
                </Flex>
                {/* </Flex> */}
            </Flex>
            </Flex>

            <Flex 
                className="flex-properties-container"
                width={width} 
                justifyContent={{base: 'center', sm:'left'}}
            >
            <Flex
                // background={'yellow.200'}
                boxShadow="lg"  
                borderRadius="8rem"
                className="flex-properties-section"
                // width={width}
                height={height}
                // width={'fit-content'}
                px={'2rem'}

            >
                <Flex 
                    // p={padding}
                    alignItems={'center'}
                >
                    <Image
                        borderRadius="50%"
                        h="50px"
                        w="50px"
                        // src="./Images/gallery/image6.png"
                        src="./reviews/thumbnail.png"
                        alt="a serene picture of a cabin from across the lake"
                    />
                    <Flex width={'100%'}>
                        <Flex fontSize={{ base: 'lg', md:'2xl' }} width={''} textAlign={'center'} flexDirection={'column'} px='3rem'>
                            <Text>6+ Properties</Text> <Text>to choose from!</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            </Flex>

        </Flex>
    // </Box>
  )
}
