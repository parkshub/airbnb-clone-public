import React from 'react';

import {
  Text,
  Image,
  Box,
  Flex,
  Grid,
  GridItem,
  Button,
  Link
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

import { ComponentHeader } from './ComponentHeader';

import { ComponentDesc } from './ComponentDesc';

// import Bubbles from './Bubbles';
import Bubbles from './Bubbles';

function AboutUs() {
  const text1 = "Embark on an extraordinary journey with two resilient teenagers from South Korea to sunny California. Their love story led to a vibrant family spanning across the US. From New York City's urban vibes to Texas' charm, each sibling ventured out, armed with values and love."
  
  const text2= "Today, the Peculiar Nest proudly offers six distinctive properties across the US, inviting you to experience the essence of each location. From bustling cityscapes to serene natural havens, join us to explore a world of stories, experiences, and a uniquely intriguing nest."


  return (
    // <section className="section">
    // <Box className="container" pb={['5rem', '5rem', '5rem', '5rem', '10rem', '10rem']}>
    <Box className="container" pb={'7rem'}>
      {/* <Flex
        mt={'5rem'}
        mb={{base: '5rem', md: '10rem'}}
        className='bubbles erase this'
        flexDirection={{base: 'column', md: 'row'}}
        gap={'1rem'}
        justifyContent={'center'}
        alignItems={'center'}
      ></Flex> */}

      <Bubbles/>

      <Box 
        // pt={{ base: '36', sm: '12' }} 
        className='content erase this'
      >
        <Grid
          gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          // py="4rem"
          columnGap={{ base: '6rem', xl: '12rem' }}
        >
          <GridItem mb={{base: '2rem', sm:'0'}}>
            <Flex direction="column" gap="2rem">

              <ComponentHeader text1={'STAYING WITH US'} text2={"Guiding You to Your Ideal Home Amidst Nature's Tranquility."} pb={0}/>

              <ComponentDesc text={text1}/>
              <ComponentDesc text={text2} mb={'3rem'}/>
              <Link href='/about'>
                <Button
                  border="2px"
                  borderRadius="12px"
                  size="lg"
                  p="8"
                  w="35%"
                  colorScheme="#1D4734"
                  variant="outline"
                >
                  <Text fontSize="2xl">About Us</Text>
                </Button>
              </Link>
            </Flex>
          </GridItem>
          
          <GridItem>
            <Grid gridTemplateColumns="1fr 1fr" columnGap="2rem">

              <GridItem>
                {/* <Box w="100%" pt="8rem"> */}
                <Box w="100%" pt={{base: '4rem', md: "8rem"}}>
                  <Image
                    borderRadius="25px"
                    src="Images\aboutUs\grid-image-42-min.png"
                    alt="palms tree over a lake partially covering the sun"
                  />
                </Box>
              </GridItem>

              <GridItem>
                <Flex direction="column" gap="2rem">
                  <Box w="100%">
                    <Image
                      borderRadius="25px"
                      src="Images\aboutUs\grid-image-24-min.png"
                      alt="a poarch with picnic tables and chairs with a view of a lake"
                    />
                  </Box>

                  <Box w="100%">
                    <Image
                      borderRadius="25px"
                      src="Images\aboutUs\grid-image-32-min.png"
                      alt="a well decorated cabin with a lot of windows for sunlight"
                    />
                  </Box>
                </Flex>
              </GridItem>
              
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </Box>
    // {/* </section> */}
  );
}

export default AboutUs;
