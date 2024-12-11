'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import DetailModal from './DetailModal';
import { detailsTest } from '@/utils/detailsTest';
import { useSession } from 'next-auth/react';

import { Text, Stack, Image, Heading, Box } from '@chakra-ui/react';

import { ComponentHeader } from './ComponentHeader';
import Properties from './Properties';
import { ComponentDesc } from './ComponentDesc';

export default function PropertiesContainer() {


  ///////////////////////////////////
  // comment this part out
  const { status, data: session } = useSession()
  const user = session?.user

  // uncomment this part
  // const status = 'authenticated'
  // const status = ''
  ///////////////////////////////////


  // const router = useRouter();

  const [propertyInfo, setPropertyInfo] = useState(detailsTest);

  const testObj = {
    Ethereal: {
      price: 123,
      rating: 4.96,
      reviews: 200,
      desc: 'Peculiar Nest Lakeside Sanctuary',
    },

    Bohemia: {
      price: 123,
      rating: 4.95,
      reviews: 154,
      desc: 'Room in a farm stay hosted',
    },

    Biophilia: {
      price: 123,
      rating: 4.98,
      reviews: 64,
      desc: 'Biophilia Private garden suite',
    },
    Sublime: {
      price: 123,
      rating: 4.99,
      reviews: 171,
      desc: 'Sublime Lake Conception',
    },
    Dreamy: {
      price: 123,
      rating: 4.95,
      reviews: 154,
      desc: 'Grand Estate on the Hilltop',
    },
    Hermitage: {
      price: 123,
      rating: 4.98,
      reviews: 54,
      desc: 'Hermitage /King bed/Garden Room',
    },
  };

  const text1 = "Discover a collection of uniquely enchanting properties, each a testament to our passion for creating memorable experiences."


  useEffect(() => {

    const storage = JSON.parse(localStorage.getItem('propertyDetail'))
    // console.log('this is storage right now', storage)

    ///////////////////////////////////
    // comment this part out
    // storage === null ? getPropertyInfo() : setPropertyInfo(storage)
    ///////////////////////////////////


    async function getPropertyInfo() {
        const response = await axios.get('/api/detail')
        // console.log('this is data from useeffect', response.data[0])
        localStorage.setItem('propertyDetail', JSON.stringify(response.data[0]))
        setPropertyInfo(response.data[0])
    }

    // getPropertyInfo()
  }, []);

  return (
    // <section className="section properties">
      // <Box className="container" py={['5rem', '5rem', '5rem', '5rem', '10rem', '10rem']}>
      <Box className="container" py={'7rem'} id="properties">

        {/* <ComponentHeader text1={'THIS IS A TEST'} text2={'THIS IS A TEST'} pb={'0.5rem'}/> */}
        <ComponentHeader text1={'CHECKOUT OUR PROPERTIES'} text2={'Properties Owned By Us'} pb={'0.5rem'}/>
        <ComponentDesc text={text1} mb={status === 'authenticated' ? "2rem": "5rem"}/>

        {
          status === 'authenticated' && 
            <DetailModal 
              propertyInfo={propertyInfo}
              setPropertyInfo={setPropertyInfo}
              testObj={testObj}
            />
        }

        <Box display={['block', 'block', 'none']}>
          { Object.entries(propertyInfo).map((info, i) => {
            let arr = Object.keys(propertyInfo).length - 1 == i ? ['0rem'] : ['4rem']
            return (
              <Box mb={arr} key={i}>
                <Properties propertyInfo={info}/>
              </Box>
              )})
          }
        </Box>

        <Box display={['none', 'none', 'flex']}>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            setWrapperSize={true}
            // init={true}
            // freeMode={true}
            // loop={true}
            className="mySwiper"
            modules={[Autoplay]}
            speed={350}
            autoplay={{
              delay: 1500,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
              waitForTransition: true
            }}
          >
            { Object.entries(propertyInfo).map(info => {
              return (
                <Box key={info[0]} width={'340px'}>
                  <SwiperSlide className="property-cart" style={{width: '340px'}}>
                    <Properties propertyInfo={info}/>
                  </SwiperSlide>
                </Box>
                )})
            }
          </Swiper>
        </Box>
      </Box>
    // </section>
  );
}
