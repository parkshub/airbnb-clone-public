import React from 'react'

import { Box, Button, Heading, Text, Center, Grid, GridItem, Link } from '@chakra-ui/react'


const CallToAction = () => {
  return (
    <Box
        paddingx={'2rem'}
        mx={'auto'}
        maxWidth={'1280px'}
        width={'100%'}
        mt={{base: 0, lg: '7rem'}}
        mb={{base: 0, lg: '14rem'}}
    >
        <Grid 
            backgroundColor={'#2b9348'} 
            // borderRadius={'4rem'}
            borderRadius={{base: '', md: '4rem'}}
            px={['3.5rem', '4rem', '4rem', '4rem', '6rem', '6rem']} 
            py={['2.5rem', '3rem', '3rem', '3rem', '5rem', '5rem']}
            mx={'auto'}
            templateColumns='repeat(12, 1fr)' 
            templateRows='repeat(5, 1fr)'
            // gap={1}
        >
            <GridItem 
                // colSpan={9} 
                // rowSpan={2}
                colSpan={{base: 12, md:9}}
                rowSpan={{base:3, md:5}}
            >
                <Heading 
                    as={'h3'} 
                    fontSize={['3xl', '3xl', '3xl', '5xl', '5xl', '5xl']} 
                    color={'white'} 
                    pb={'1.3rem'} 
                    // letterSpacing={{base: '0.3rem', md: '0.3rem'}}
                    letterSpacing={{base:'0', sm:'0.3rem'}}
                >
                    Your Extraordinary Escape Awaits
                </Heading>
                <Text 
                    fontSize={['1.2rem', '1.2rem', '1.4rem', '1.6rem', '1.6rem', '1.6rem']}
                    color={'white'} 
                    // maxW={'60%'}
                    maxW={{base: '100%', md: '60%'}}
                >
                    Elevate your journey by reserving your spot at one of our captivating properties, where exceptional experiences come to life.
                </Text>
            </GridItem>

            <GridItem 
                // colSpan={3} 
                // rowSpan={2} 
                colSpan={{base: 12, md:3}}
                rowSpan={{base: 2, md:5}}

                display={'flex'}
            >
                <Link href={"https://www.airbnb.com/users/show/384003854"} isExternal alignSelf={'center'} >
                    <Button 
                        fontSize={['2xl', '2xl', '2xl', '4xl', '4xl', '4xl']} 
                        color={'#2b9348'} 
                        p={['2.2rem', '2.2em', '2.2rem', '2.8rem', '2.8rem', '2.8rem']} 
                        borderRadius={'1rem'} 
                        boxShadow={'xl'}
                    >
                        Book Your Retreat
                    </Button>
                </Link>
            </GridItem>
        </Grid>
        {/* </Box> */}

        

    </Box>
  )
}

export default CallToAction