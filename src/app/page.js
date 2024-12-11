'use client';


import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';

import { ReviewsContainer } from '@/components/ReviewsContainer';
import BlogCardContainer from '@/components/BlogCardsContainer';
import CallToAction from '@/components/CallToAction';
import PropertiesContainer from '@/components/PropertiesContainer';
// import { ChakraProvider } from '@chakra-ui/react';
// import Properties from '@/components/Backup/Properties';
// import Navigation from '@/components/Navigation';
// import ApiTest from './user/page';
// import Image from 'next/image';
// import styles from './page.module.css';

import { Button } from '@chakra-ui/react';

export default function Home() {

  return (
    <>
      {/* <ChakraProvider> */}
      <Header/>
      <AboutUs />
      {/* <Properties /> */}
      <PropertiesContainer id={'here'}/>
      <ReviewsContainer />
      <BlogCardContainer />
      {/* </ChakraProvider> */}
      <CallToAction />
    </>
  );
}
