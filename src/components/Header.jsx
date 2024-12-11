'use client';
import React from 'react';
import Link from 'next/link';
import { Box, Flex, Image, Text, Button, background, Stack } from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';

import { usePathname } from 'next/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// comment this part out //
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
/////////////////////////

// break points 1440px 1280px 1024px 768px 480px 320px

function Header({Test}) {
  // comment this part out //
  // const { status, data: session } = useSession()
  // const [ data, setData ] = useState('')
  // const user = session?.user
  ////////////////////////////

  // get the current link
  const currentRoute = usePathname();
  // show and hide the menu in small screens
  const [showMenu, setShowMenu] = useState(false);

  //  const signInUser = async () => {
  //       await signIn("google", {redirect: false })
  //   }

  // const Test = () => {
  //   location.href='#here'
  // }

  return (
    <Box
      position="relative"
      // h={{ base: '95vh', lg: '103vh', xl: '100vh'}}
      // h={{ base: '95vh', lg: '80vh' }}
      h={{ base: '95vh', md: '100vh'}}
      maxHeight={{md: '750px', lg: '900px'}}

      // maxH="999px"
      // top="-10rem"
      // mb={'-3rem'}
      // m={0}
    >
      <Box position="absolute" h="100%" w="100%" bg="#0006" zIndex="2"></Box>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1250}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="header--swiper"
      >
        <SwiperSlide
          className="header--swiper-slide"
        >
          <Image
            src="Images/hero/hero.png"
            alt='a large picture of a cabin in the woods'
            width={'100%'}
            height={'100%'}
            // objectFit={'fill'}
            objectFit={'cover'}
          />
          Slide 1
        </SwiperSlide>

        <SwiperSlide
          className="header--swiper-slide"
        >
          <Image
            src="Images/hero/hero-2.png"
            alt='a large picture of the lake in front of the property'
            width={'100%'}
            height={'100%'}
            objectFit={'cover'}
          />
          Slide 2
        </SwiperSlide>

        {/* <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
      
      <div className="container">
        <Flex
          // ml="10%"
          maxW="575px"
          direction="column"
          height="100%"
          justify="center"
          color="#fff"
          // color="yellow"
          // gap={{ base: '2rem' }}
          gap={{ base: '2rem', lg:'2.5rem' }}
          zIndex="2"
          position="absolute"
          top="0"
        >

          <Stack spacing='10'>
            <Text color='white' fontSize={['xl', 'xl', '2xl', '3xl', '3xl', '3xl']} fontWeight='550'>
              MAKING OUR HOME IN SOUTH TEXAS
            </Text>
            <Text 
              color='white' 
              fontSize={['3rem', '3rem', '4rem', '5.2rem', '5.2rem', '5.2rem']} 
              as='b'
              lineHeight={['3.5rem', '3.5rem', '4rem', '5rem', '5rem', '5rem']}
              w={['80%', '80%', '100%', '100%', '100%']} // 100 for full width
            >
              {/* Peculiar Nest Lakeside Sanctuary */}
              A Lakeside Sanctuary
            </Text>
          </Stack>

          <Text 
          // className="section__paragraph"
          // '580px'
            maxW={['80%', '80%','80%','70%','70%','70%',]}
            fontSize={['1.2rem', '1.2rem', '1.4rem', '1.6rem', '1.6rem', '1.6rem']}
            lineHeight={['2rem', '1.6rem', '1.8rem', '2rem', '2rem', '2rem']}
            color={'white'}
            // mb="5rem"
        >
            Immerse yourself in the beauty of lakeside living. Peculiar Nest
            offers a harmonious blend of comfort and nature, inviting you to
            experience a tranquil stay like no other.
        </Text>

          <Flex gap="2rem" align="center">
            {/* <Link href={'https://www.airbnb.com/users/show/384003854'}> */}

              <Button
                bg="#1D4734"
                border="2px solid #1D4734"
                _hover={{ bg: '#296349', borderColor: '#296349' }}
                padding="1.5rem 2rem"
                size="lg"
                borderRadius="12px"
                w="25%"
                // p="2rem"
                p={{ base: '1.8rem', sm:'2rem' }}
              >
                <Link href={"https://www.airbnb.com/users/show/384003854"} isExternal>
                <Text color="#fff"

                // fontSize={{ base: '1.6rem', sm:'rem' }}
                  fontSize={{ base: '1.2rem', sm:'1.6rem' }}
                >
                  Book Now
                </Text>
                </Link>
              </Button>

            {/* </Link> */}

            <Link href={'#properties'}>
              <Button
                border="2px"
                borderRadius="12px"
                // borderRadius={{ base: '1.8rem', sm:'12px' }}
                size="lg"
                w="100%"
                // p="2rem"
                colorScheme="#1D4734"
                variant="outline"
                p={{ base: '1.8rem', sm:'2rem' }}
              >
                  <Text 
                    fontSize={{ base: '1.2rem', sm:'1.6rem' }}
                  >
                    See More
                  </Text>
              </Button>
            </Link>

            
          </Flex>
        </Flex>
      </div>
    </Box>
  );
}

export default Header;