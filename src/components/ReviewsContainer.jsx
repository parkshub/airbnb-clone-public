import React, { useEffect, useState } from 'react'

import { Review } from '@/components/Review';
import { reviewsTest } from '@/utils/reviewsTest';

import { Box, Grid, GridItem, Center, Text, Stack, Button } from '@chakra-ui/react'

import axios from 'axios';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { ComponentHeader } from './ComponentHeader';


export const ReviewsContainer = () => {
    

    const [reviews, setReviews] = useState([])
    // const [reviews, setReviews] = useState(reviewsTest) // use this only for development

    const checkDate = (oldDate) => {
        return new Date(oldDate).getMonth() < new Date().getMonth()
        // return new Date(oldDate).getMonth() === new Date().getMonth() // this is only for testing purposes
    }

    
    useEffect(() => {

        const useStorage = localStorage.getItem('reviews') !== null 
            ? JSON.parse(localStorage.getItem('reviews'))
            : false

        // if (useStorage) { setReviews([...reviews.slice(0,2), ...useStorage.reviews]) }
        if (useStorage) { setReviews(useStorage.reviews) }
        
        
        if (!useStorage || checkDate(useStorage.updatedAt)) {
            // console.log('i ran')
            ///////////////////////////////////
            // comment this part out
            // if localstorage is missing or if localstorage data is outdated, fetch from database
            getReviews()
            ///////////////////////////////////
        }

        async function getReviews() {
            
            // fetch reviews from database and update state regardless of date
            const response = await axios.get('/api/review')
            const data = response.data
            const updatedAt = data.updatedAt
            const reviewsResponse = data.reviews
            

            localStorage.setItem('reviews', JSON.stringify({ reviews: reviewsResponse, updatedAt }))
            setReviews(reviewsResponse)

            // if data from database is outdated, update and return new values
            if(checkDate(updatedAt)) {
                // console.log('info is not up to date, need to fetch from api')
                const response = await axios.post('/api/review')
                const data = response.data
                const updatedAt = data.updatedAt
                const reviewsResponse = data.reviews

                localStorage.setItem('reviews', JSON.stringify({ reviews: reviewsResponse, updatedAt }))
                // keeping the first two reviews and adding onto the end so user doesn't notice the change
                // may not work as intended

                // setReviews([...reviews.slice(0,2), ...reviewsResponse])
                setReviews(reviewsResponse)
            }
        }

        // return () => {
        //     setReviews([])
        // }
    }, [])

    return (
        // <Box background='#EEF5ED' py={'7rem'}>
        //     <Box className='container'>

        <Box background='#EEF5ED' py={'7rem'}>
            <Box className='container'>

                <ComponentHeader text1={'TESTIMONIALS'} text2={'What People Are Saying About Us'} pb={['6rem', '8rem', '8rem', '8rem', '8rem', '8rem']}/>

                {/* <Box p='5rem'> */}
                <Box p={[1,1,1,5,5]}>
                {/* <Box p={[20]}> */}
                    <Swiper
                        className="mySwiper review-card-container"
                        navigation={true}
                        modules={[ Pagination, Navigation ]}
                        loop={true}
                        initialSlide={Math.floor(reviews.length/2)}
                        // simulateTouch={false}
                        pagination={{ 
                            clickable: true, 
                            dynamicBullets: true, 
                            dynamicMainBullets: 1,
                            // color: green
                          }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            992: { slidesPerView: 2 },
                        }}
                        style={{'overflowY': 'visible'}}
                    >
                    { reviews && reviews.map((review, i) => {
                        return (
                            <SwiperSlide 
                                className='swiper-slide-review' 
                                key={i}>
                                {/* <Box px='1rem'> */}
                                <Box px={['0rem', '0rem', '1rem', '1rem', '1rem', '1rem']}>
                                    <Review 
                                        firstName = { review.reviewer.firstName } 
                                        date = { review.createdAt }
                                        comment = { review.comments } 
                                        property = { review.property }
                                        profilePicture = { review.reviewer.userProfilePicture.baseUrl } 
                                        key = { review.reviewer.id }
                                    />
                                </Box>
                            </SwiperSlide>
                        )})
                    }
                    </Swiper>
                </Box>
            </Box>
        </Box>
    )
}
