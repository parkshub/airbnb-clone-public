'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, ModalCloseButton, Button } from '@chakra-ui/react';

import { detailsTest } from '@/utils/detailsTest';
import { useSession } from 'next-auth/react';

import { Text, Stack, Image, Heading, Box } from '@chakra-ui/react';


import PropertiesModal from './PropertiesModal';

import {detailObject} from '../utils/propertiesDetail'


export default function Properties({propertyInfo}) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  // const detailObject = {
  //   Ethereal: 
  //     { detail: [
  //       [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">2 Beds</Text></>],
  //       [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text >1 Bathroom</Text></>],
  //       [<><Image src="/properties/icons/room.svg" alt="room icon" /><Text >1 Room</Text></>]

  //     ],
  //     tag: 
  //       <>
  //         <Image
  //           src="/properties/icons/luxury.svg"
  //           alt="sparkle icon denoting luxury property"
  //           width={{base: "12px", md:"16px"}}
  //         /><Text >Luxury</Text>
  //       </>,
  //     image: "/properties/peculair_nest.png"
  //     },

  //   Biophilia: 
  //     { detail: [
  //       [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">1 Queen Bed</Text></>],
  //       [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text className="detail-title">1 Private Bathroom</Text></>]
  //     ],
  //     tag:         
  //       <>
  //         <Image
  //           src="/properties/icons/economy.svg"
  //           alt="leaf icon denoting eco property"
  //           width={{base: "12px", md:"16px"}}
  //         /><Text >Eco</Text>
  //       </>,
  //     image: "/properties/BiophiliaPrivat.png"
  //     }, 
  //   Bohemia: 
  //     { 
  //       detail: [
  //         [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">1 Queen Bed</Text></>],
  //         [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text className="detail-title">1 Private Bathroom</Text></>]
  //       ],
  //       tag: 
  //         <>
  //           <Image
  //             src="/properties/icons/icon_fire_.svg"
  //             alt="fire icon denoting popular property"
  //             width={{base: "12px", md:"16px"}}
  //           /><Text >Popular</Text>
  //         </>,
  //       image: "/properties/Room_in_farm.png"
  //     },
  //   Sublime: 
  //     { 
  //       detail: [
  //         [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">2 Beds</Text></>],
  //         [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text className="detail-title">1 Bathroom</Text></>],
  //         [<><Image src="/properties/icons/room.svg" alt="room icon" /><Text >1 Room</Text></>]
  //       ],
  //       tag: 
  //         <>
  //           <Image
  //             src="/properties/icons/icon_fire_.svg"
  //             alt="fire icon denoting popular property"
  //             width={{base: "12px", md:"16px"}}
  //           /><Text >Popular</Text>
  //         </>,
  //       image: "/properties/Sublime.png"
  //     },
  //   Dreamy: 
  //     { 
  //       detail: [
  //         [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">2 Beds</Text></>],
  //         [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text className="detail-title">1 Bathroom</Text></>],
  //         [<><Image src="/properties/icons/room.svg" alt="room icon" /><Text >1 Room</Text></>],
  //         // [<><Image src="/properties/icons/guest.svg" width={'inherit'} alt="wifi icon" /><Text >4 Guests</Text></>]
  //         // add another one for 4 guests
  //       ],
  //       tag: 
  //         <>
  //           <Image
  //             src="/properties/icons/icon_fire_.svg"
  //             alt="fire icon denoting popular property"
  //             width={{base: "12px", md:"16px"}}
  //           /><Text >Popular</Text>
  //         </>,
  //       image: "/properties/grand_estate.png"
  //     },

  //   Hermitage: 
  //     { 
  //       detail: [
  //         [<><Image src="/properties/icons/icon_bed_.svg" alt="bed icon" /><Text className="detail-title">1 Bed</Text></>],
  //         [<><Image src="/properties/icons/icon_bathroom_.svg" alt="bathroom icon"/><Text className="detail-title">1 Private Bathroom</Text></>]
  //       ], 
  //       tag:         
  //         <>
  //           <Image
  //             src="/properties/icons/economy.svg"
  //             alt="leaf icon denoting eco property"
  //             width={{base: "12px", md:"16px"}}
  //           /><Text >Eco</Text>
  //         </>,
  //       image: "/properties/Hermitage.png"
  //     }

  // }


  ///////////////////////////////////
  // comment this part out
  // const { status, data: session } = useSession()
  // const user = session?.user

  // uncomment this part
  const status = 'authenticated'
  ///////////////////////////////////


  // const router = useRouter();

  const tester = (e) => {
    onOpen
    // console.log(isOpen)
  }

  return (
          // <SwiperSlide className="property-cart">
            // <Box className="property-cart__container">
            <Box>
              <Box 
                // className="image"
                width={"100%"}
                position={"relative"}
                marginBottom={"1.2rem"}
                display= {"flex"}
                justifyContent= {"center"}
                // scale feature, it is not closing correctly
                  overflow={"hidden"}
                  borderRadius={{base: "2rem", md: "3rem"}}
                // related to the scale feature
              >
                <Image
                  // src="/properties/peculair_nest.png"
                  src={detailObject[propertyInfo[0]].image}
                  alt="peculair nest property image"
                  display={"block"}
                  // width={"100%"}
                  width={{base: '95%', md: "100%"}}
                  // height={"300px"}
                  aspectRatio={'1/1'}
                  objectFit={"cover"}
                  //borderRadius={"3rem"}
                  borderRadius={{base: "2rem", md: "3rem"}}
                  transform={"scale(1)"}
                  transition="all 0.3s"
                  _hover={{
                    cursor:'pointer',
                    // opacity:"0.9", // this is the previous feature
                    // scale feature, it is not closing correctly
                      transform: "scale(1.1)",
                    // related to the scale feature
                  }}
                  _active={{
                    cursor: 'grabbing'
                  }}
                  onClick={onOpen}
                />

                <PropertiesModal isOpen={isOpen} onClose={onClose} property={propertyInfo[0]} propertyId={detailObject[propertyInfo[0]].propertyId}/>

                <Box
                  // className="option"
                  position= {"absolute"}
                  bottom= {"3rem"}
                  left= {"4rem"}
                  backgroundColor= {"#e8fccf"}
                  padding= {"1rem 2.4rem"}
                  display= {"flex"}
                  alignItems= {"center"}
                  gap= {"1rem"}
                  borderRadius= {"2rem"}
                  fontSize={{base: '1.3rem', md: '1.6rem'}}

                  >
                  {detailObject[propertyInfo[0]].tag}
                </Box>
              </Box>

              <Box 
                // width={"85%"} 
                width={{base: '90%', md: "100%"}}
                mx={'auto'}
              >

                <Box 
                  // className="price-reviews ETHEREAL"
                  // className='somethincool'
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  marginBottom={{base: "0.6rem", md: "1.2rem"}}
                >
                  <Text fontSize={{base: '1.8rem', md: '2.2rem'}}>
                    <b>$ {propertyInfo[1].price}</b> night
                  </Text>
                  <Text 
                    // className="reviews" 
                    // fontSize={'1.4rem'}
                    fontSize={['1.2rem', '1.2rem', '1.4rem', '1.6rem', '1.6rem', '1.6rem']}
                  >
                    ⭐{propertyInfo[1].rating} ·{' '}
                    {propertyInfo[1].reviews} reviews
                  </Text>
                </Box>

                <Text 
                  // className="property-title"   
                  // fontSize= {'1.6rem'}
                  fontSize={['1.2rem', '1.2rem', '1.4rem', '1.6rem', '1.6rem', '1.6rem']}
                  // marginBottom={'1rem'}
                  marginBottom={{base: "0.5rem", md: "1rem"}}

                >
                  {propertyInfo[0]}:
                  <br />
                  {propertyInfo[1].desc}
                </Text>

                
                <Text 
                  // className="address"
                  fontSize={['1.2rem', '1.2rem', '1.4rem', '1.6rem', '1.6rem', '1.6rem']}

                  // fontSize= {'1.4rem'}
                  color= {'#808080'}
                  // mb={'1.5rem'}
                  marginBottom={{base: "0.75rem", md: "1.5rem"}}

                >
                  McAllen, Texas, United States
                </Text>

                <Box 
                  // className="property-details"
                  display={"flex"}
                  gap={"1.3rem"}
                >
                  {
                    detailObject[propertyInfo[0]].detail.map((detail, i) => {
                      return (
                        <Box 
                          // className="detail"
                          display= {"flex"}
                          alignItems= {"center"}
                          gap= {"1rem"}
                          // fontSize= {"1.4rem"}
                          fontSize={['1rem', '1rem', '1.2rem', '1.4rem', '1.4rem', '1.4rem']}
                          key={i}
                        >
                          {detail}
                        </Box> 
                    )})
                  } 
                </Box>
              </Box>
            </Box>
  );
}
