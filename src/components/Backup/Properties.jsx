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

import DetailModal from '../DetailModal';
import { detailsTest } from '@/utils/detailsTest';
import { useSession } from 'next-auth/react';

import { Text, Stack, Image } from '@chakra-ui/react';

import { ComponentHeader } from '../ComponentHeader';

export default function App() {


  ///////////////////////////////////
  // comment this part out
  // const { status, data: session } = useSession()
  // const user = session?.user

  // uncomment this part
  const status = 'authenticated'
  ///////////////////////////////////


  // const router = useRouter();

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

  const [propertyInfo, setPropertyInfo] = useState(detailsTest);

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
    <section className="section properties">
      <div className="container">

        <ComponentHeader text1={'CHECK OUT OUR PROPERTIES'} text2={'Properties Owned By Us'} pb={'0.5rem'}/>

        <Text 
          // className="section__paragraph" 
            maxW={'580px'}
            fontSize={['1.2rem', '1.2rem', '1.4rem', '1.6rem', '1.6rem', '1.6rem']}
            lineHeight={['1.6rem', '1.6rem', '1.8rem', '2rem', '2rem', '2rem']}
            color={'#808080'}
            mb={status === 'authenticated' ? "0": "3rem"}
        >
          Discover a collection of uniquely enchanting properties, each a
          testament to our passion for creating memorable experiences.
        </Text>

        {
          status === 'authenticated' && 
            <DetailModal 
              propertyInfo={propertyInfo}
              setPropertyInfo={setPropertyInfo}
              testObj={testObj}
            />
        }

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          setWrapperSize={true}
          init={true}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[Autoplay]}
        >
          <SwiperSlide className="property-cart">
            <div className="property-cart__container">
              <div className="image">
                <Image
                  src="/properties/peculair_nest.png"
                  alt="peculair nest property image"
                  width="320"
                  heigh="320"
                />
                <div className="option">
                  <Image
                    src="/properties/icons/icon_fire_.svg"
                    alt="fire icon popular property"
                    width="20"
                    heigh="22"
                  />
                  <span>Popular</span>
                </div>
              </div>

              <div className="price-reviews ETHEREAL">
                <h5>
                  <b>$ {propertyInfo.Ethereal.price}</b> night
                </h5>
                <p className="reviews">
                  ⭐{propertyInfo.Ethereal.rating} ·{' '}
                  {propertyInfo.Ethereal.reviews} reviews
                </p>
              </div>
              <h4 className="property-title">
                Ethereal:
                <br />
                {propertyInfo.Ethereal.desc}
              </h4>
              <p className="address">McAllen, Texas, United States</p>
              <div className="property-details">
                <div className="detail">
                  <Image src="/properties/icons/icon_bed_.svg" alt="bed icon" />
                  <p className="detail-title">1 Bedroom</p>
                </div>
                <div className="detail">
                  <Image
                    src="/properties/icons/icon_bathroom_.svg"
                    alt="bathroom icon"
                  />
                  <p className="detail-title">1 Bath</p>
                </div>
                <div className="detail">
                  <Image src="/properties/icons/bx-wifi.svg" alt="wifi icon" />
                  <p className="detail-title">27 Mbps</p>
                </div>
              </div>
            </div>
          </SwiperSlide>



          <SwiperSlide className="property-cart">
            <div className="image">
              <Image
                src="/properties/BiophiliaPrivat.png"
                alt="Biophilia Privat property image"
                width="320"
                heigh="320"
              />
              <div className="option">
                <Image
                  src="/properties/icons/icon_home_.svg"
                  alt="eco icon eco property"
                  width="20"
                  heigh="22"
                />
                <span>Eco</span>
              </div>
            </div>

            <div className="price-reviews BIOPHILIA">
              <h5>
                <b>$ {propertyInfo.Biophilia.price}</b> night
              </h5>
              <p className="reviews">
                ⭐{propertyInfo.Biophilia.rating} ·{' '}
                {propertyInfo.Biophilia.reviews} reviews
              </p>
            </div>
            <h4 className="property-title">
              Biophilia:
              <br />
              {propertyInfo.Biophilia.desc}
            </h4>
            <p className="address">McAllen, Texas, United States</p>
            <div className="property-details">
              <div className="detail">
                <Image src="/properties/icons/icon_bed_.svg" alt="bed icon" />
                <p className="detail-title">1 Queen Bed</p>
              </div>
              <div className="detail">
                <Image
                  src="/properties/icons/icon_bathroom_.svg"
                  alt="bathroom icon"
                />
                <p className="detail-title">1 Private bathroom</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="property-cart">
            <div className="image">
              <Image
                src="/properties/Room_in_farm.png"
                alt="Biophilia Privat property image"
                width="320"
                heigh="320"
              />
              <div className="option">
                <Image
                  src="/properties/icons/icon_fire_.svg"
                  alt="fire icon popular property"
                  width="20"
                  heigh="22"
                />
                <span>Popular</span>
              </div>
            </div>

            <div className="price-reviews BOHEMIA">
              <h5>
                <b>$ {propertyInfo.Bohemia.price}</b> night
              </h5>
              <p className="reviews">
                ⭐{propertyInfo.Bohemia.rating} · {propertyInfo.Bohemia.reviews}{' '}
                reviews
              </p>
            </div>
            <h4 className="property-title">
              Bohemia:
              <br />
              {propertyInfo.Bohemia.desc}
            </h4>
            <p className="address">McAllen, Texas, United States</p>
            <div className="property-details">
              <div className="detail">
                <Image src="/properties/icons/icon_bed_.svg" alt="bed icon" />
                <p className="detail-title">1 Bed</p>
              </div>
              <div className="detail">
                <Image
                  src="/properties/icons/icon_bathroom_.svg"
                  alt="bathroom icon"
                />
                <p className="detail-title">1 bathroom</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="property-cart">
            <div className="image">
              <Image
                src="/properties/grand_estate.png"
                alt="Biophilia Privat property image"
                width="320"
                heigh="320"
              />
              <div className="option">
                <Image
                  src="/properties/icons/icon_fire_.svg"
                  alt="fire icon popular property"
                  width="20"
                  heigh="22"
                />
                <span>Popular</span>
              </div>
            </div>

            <div className="price-reviews DREAMY">
              <h5>
                <b>$ {propertyInfo.Dreamy.price}</b> night
              </h5>
              <p className="reviews">
                ⭐{propertyInfo.Dreamy.rating} · {propertyInfo.Dreamy.reviews}{' '}
                reviews
              </p>
            </div>
            <h4 className="property-title">
              Dreamy:
              <br />
              {propertyInfo.Dreamy.desc}
            </h4>
            <p className="address">103 Wright CourtBurien, WA 98168</p>
            <div className="property-details">
              <div className="detail">
                <Image src="/properties/icons/icon_bed_.svg" alt="bed icon" />
                <p className="detail-title">4 Bed</p>
              </div>
              <div className="detail">
                <Image
                  src="/properties/icons/icon_bathroom_.svg"
                  alt="bathroom icon"
                />
                <p className="detail-title">3 bathroom</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="property-cart">
            <div className="image">
              <Image
                src="/properties/Sublime.png"
                alt="Sublime property image"
                width="320"
                heigh="320"
              />
              <div className="option">
                <Image
                  src="/properties/icons/icon_fire_.svg"
                  alt="fire icon popular property"
                  width="20"
                  heigh="22"
                />
                <span>Popular</span>
              </div>
            </div>

            <div className="price-reviews SUBLIME">
              <h5>
                <b>$ {propertyInfo.Sublime.price}</b> night
              </h5>
              <p className="reviews">
                ⭐{propertyInfo.Sublime.rating} · {propertyInfo.Sublime.reviews}{' '}
                reviews
              </p>
            </div>
            <h4 className="property-title">
              Sublime:
              <br />
              {propertyInfo.Sublime.desc}
            </h4>
            <p className="address">McAllen, Texas, United States</p>
            <div className="property-details">
              <div className="detail">
                <Image src="/properties/icons/icon_bed_.svg" alt="bed icon" />
                <p className="detail-title">2 beds</p>
              </div>
              <div className="detail">
                <Image
                  src="/properties/icons/icon_bathroom_.svg"
                  alt="bathroom icon"
                />
                <p className="detail-title">1 Private bathroom</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="property-cart">
            <div className="image">
              <Image
                src="/properties/Hermitage.png"
                alt="Hermitage property image"
                width="320"
                heigh="320"
              />
              <div className="option">
                <Image
                  src="/properties/icons/icon_fire_.svg"
                  alt="fire icon popular property"
                  width="20"
                  heigh="22"
                />
                <span>Popular</span>
              </div>
            </div>

            <div className="price-reviews HERMITAGE">
              <h5>
                <b>$ {propertyInfo.Hermitage.price}</b> night
              </h5>
              <p className="reviews">
                ⭐{propertyInfo.Hermitage.rating} ·{' '}
                {propertyInfo.Hermitage.reviews} reviews
              </p>
            </div>
            <h4 className="property-title">
              Hermitage:
              <br />
              {propertyInfo.Hermitage.desc}
            </h4>
            <p className="address">McAllen, Texas, United States</p>
            <div className="property-details">
              <div className="detail">
                <Image src="/properties/icons/icon_bed_.svg" alt="bed icon" />
                <p className="detail-title">1 Bed</p>
              </div>
              <div className="detail">
                <Image
                  src="/properties/icons/icon_bathroom_.svg"
                  alt="bathroom icon"
                />
                <p className="detail-title">1 Attached bathroom</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
