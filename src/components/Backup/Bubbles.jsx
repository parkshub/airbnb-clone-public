import React from 'react'

import { Grid, GridItem, Box, Flex, Text, Image,  } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';


export default function Bubbles () {

    const padding = [6,6,6,6,6,6]
    const width = ['25rem', '25rem', '30rem', '30rem']

  return (
    <Grid
        gap={{ base: '1rem', md: 12 }}
        mt={'5rem'}
        mb={{base: '5rem', md: '10rem'}}
        className='bubbles erase this'
        templateColumns={'repeat(12, 1fr)'}
        templateRows={'repeat(2, 1fr)'}
      >
        <GridItem 
            className="bubbles profiles"
            // colSpan={{ base: 10, sm: 8, md: 5, lg: 4, xl: 3}}
            colEnd={{ base: '', sm: 11, md: 7, lg: 7, xl: 7 }}
            rowSpan={{base: 1, sm: 1, md: 2 }}
            colStart={{base: 4}}
            // colSpan={{ base: 10, sm: 8, md: 5, lg: 4, xl: 3}}
            // colEnd={{ base: 12, sm: 11, md: 7, lg: 8, xl: 7 }}
            // rowSpan={{base: 1, sm: 1, md: 2 }}
            width={width}

        >
            <Flex
                bg="#fff"
                boxShadow="lg"
                p={padding}
                borderRadius="40"
                align="center"
                // justifyContent={'space-around'}
                background={'yellow.200'}
            >
                <Flex>
                    {Array.from({ length: 5 }, (_, i) => (
                    <Image
                        position="relative"
                        top="0"
                        left={50 + -32.5 * i + '%'}
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
                    // ml="-12" 
                    ml={{base: "-20", lg: "-12"}}
                    fontSize={{ base: 'lg', md:'2xl' }}
                    // flexGrow={10}
                    // justifyContent={'space-between'}
                >
                    <Flex 
                        gap="1" 
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'right'}
                        textAlign={'center'}
                    >
                        <Text>⭐4.95</Text>
                        <Text>+783 reviews</Text>
                    </Flex>
                </Flex>
            </Flex>
        </GridItem>

        <GridItem
            background={'yellow.200'}
            boxShadow="lg"  
            gap={"3rem"}
            borderRadius="40"
            className="bubbles properties"
            display={'flex'}
            // colSpan={{base: 10, sm: 8, md: 5, lg: 4, xl: 3 }}
            colStart={{ base: 4, sm: 11, md: 7, lg: 7, xl: 7 }}
            rowSpan={{base: 1, sm: 1, md: 2 }}
            // colSpan={{base: 10, sm: 8, md: 5, lg: 4, xl: 3 }}
            // colEnd={{base: 12, sm: 11, md: 12, lg: 11, xl: 10 }}
            // rowSpan={{base: 1, sm: 1, md: 2 }}
            width={width}
            // px={'1rem'}
        >
            <Flex 
                p={padding}
                alignItems={'center'}
            >
                <Image
                    borderRadius="50%"
                    h="45px"
                    w="45px"
                    // src="./Images/gallery/image6.png"
                    src="./reviews/thumbnail.png"
                    alt="a serene picture of a cabin from across the lake"
                />
                <Flex fontSize={{ base: 'lg', md:'2xl' }} width={'50%'} ml={'4rem'} textAlign={'center'} flexGrow={1}>
                    <Text>6+ Properties to choose from!</Text>
                </Flex>
            </Flex>

        </GridItem>
      </Grid>
  )
}
