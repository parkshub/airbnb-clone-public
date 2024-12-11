import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {Image} from '@chakra-ui/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function PropertySlide({property}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 propertry-image-slide"
      >
        {[1,2,3,4,5,6,7].map(i =>
          <SwiperSlide key={Math.random(0,100)}>
            <Image 
              src={`properties/${property}/${property.toLowerCase()}${i}.webp`}
              alt='a picture of one of the properties'
              width={'100%'}
              aspectRatio={'4/3'}
              objectFit={'contain'}
            />
          </SwiperSlide>)}

      </Swiper>
      <br></br>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {[1,2,3,4,5,6,7].map(i =>
          <SwiperSlide key={Math.random(0,100)}>
            <Image 
              src={`properties/${property}/${property.toLowerCase()}${i}.webp`}
              alt='a small preview picture of one of the properties'
              width={'100%'}
              // height={'100%'}
              aspectRatio={'1/1'}
              objectFit={'cover'}
            />
          </SwiperSlide>)}
      </Swiper>
    </>
  );
}
