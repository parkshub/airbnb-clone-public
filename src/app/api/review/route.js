// const axios = require('axios');
import axios from 'axios';
import Review from '@/models/Review';
import connectDB from '@/utils/database';


const colors = require('colors')

export const GET = async(request, { params }) => {

    // console.log('this is a get request for reviews'.green.underline)

    // const session = await getServerSession(req, res, auth)
// 
    // DONT ERASE BELOW, THIS IS A REMINDER THAT YOU NEED TO SET PRODUCTION URL TO SOMETHING ELSE WHEN DEPLOYING TO HEROKU
    // const production  = 'https://examplePage.com'
    // const development = "http://localhost:3000"

    const url = (process.env.NODE_ENV === 'development' ? process.env.DEVELOPMENT : process.env.PRODUCTION)

    try {
        await connectDB()

        const dateTester = await Review.findOne()
        
        const dataDate = new Date(dateTester.updatedAt)
        const todayDate = new Date()

        ///////////////////////////////////////
        // INSTEAD OF HANDLING EVERYTHING HERE
        // IT MIGHT BE BETTER TO SEND TO FE FIRST
        // THEN THE FE CAN DETERMINE IF AN UPDATE IS NEEDED
        // THAT WAY YOU CAN GET SOMETHING INTO THE FE QUICKLY
        ///////////////////////////////////////


        ///////////////////////////////////////
        // ALSO MAKE SURE TO SAVE INTO LOCALSTORAGE
        // AFTER FETCHING DATA SO BACKING WON'T LOSE DATA
        ///////////////////////////////////////

        // if (dataDate.getMonth() < todayDate.getMonth()) {
            
        //     console.log('reviews are outdated, fetching from api')

        //     const response = await axios.post(`${url}/api/airbnb`, 'response');

        //     console.log('this is what im looking for', response.data)

        //     ///////////////////////////////////////
        //     // IF INFO IS OUTDATE AND A POST REQ IS MADE
        //     // DETERMINE HOW THE DATA IS RECEIVED HERE
        //     // SO YOU CAN RESPONSE WITH DATA
        //     ///////////////////////////////////////

        //     // return new Response(JSON.stringify(response.data), { status: 200 })
        //     return new Response(JSON.stringify('cool'), { status: 200 })
        // }

        // else {
            // console.log('reviews are up to date, fetching from database')
        
            const response = await Review.findOne()
            
            
            return new Response(JSON.stringify(response), { status: 200 })
        // }
    } catch (error) {
        return new Response(JSON.stringify({ message: error }), { status: 500 })
    }
}

export const POST = async(request, { params }) => {
    // REMEMBER TO CHANGE THIS TO A PUT REQUEST INSTEAD OF POST

    // const response = await request.json() don't need this for now, but I might need it later when I have to choose certain properties to get reviews for

    // console.log('this is a post request for reviews'.green.underline)


    try {
        await connectDB()

        const propertyIds = ['ETHEREAL', 'BIOPHILIA', 'BOHEMIA', 'DREAMY', 'SUBLIME', 'HERMITAGE']
        const allReviews = []

        
        // for (let i in [0,1,2,3,4,5]) {
        for (let i in [0, 1, 2, 3, 4, 5]) {
            var begin = new Date().getMilliseconds()
            
            
        // for (let property of propertyIds) // you can probably do this and make your code much shorter

            const property = propertyIds[i]
            const propertyId = process.env[property]

            const options = {
                method: 'GET',
                url: 'https://airbnb19.p.rapidapi.com/api/v1/getPropertyReviews',
                params: {
                    propertyId: propertyId
                },
                headers: {
                    'X-RapidAPI-Key': process.env.API_KEY,
                    'X-RapidAPI-Host': process.env.API_HOST
                }
            };

            const response = await axios.request(options);
            // console.log('this was the response', response.data)
            const reviews = response.data.data
            for (let review of reviews) {

                // if (review.rating > 4 && review.comments.length > 100 && review.comments.length < 240) { 
                if (review.rating > 4 && review.comments.length > 100) { 
                    allReviews.push({ ...review, property })
                }

        
            ///////////////////////////////////////
            // await Review.findOneAndUpdate({ property }, { reviews: {...response.data.data, property} })
            // when updating I dont need to add { property } anymore
            // since I'm adding it from the beginning
            ///////////////////////////////////////

            }
            var end = new Date().getMilliseconds()

            var timeSpent=(end-begin)
            // console.log(`this is timestpent  ${timeSpent}`.bgCyan.underline)

            const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            await sleep(1000)
        }
        
        allReviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        const reviews = allReviews.length > 20 ? allReviews.slice(0, 21) : allReviews

        ///////////////////////////////////////
        // THIS SHOULD BE AN UPDATE NOT CREATE
        // FIX WHEN READY
        ///////////////////////////////////////

        await Review.findOneAndUpdate({}, { reviews })

        return new Response(JSON.stringify({reviews, updatedAt: new Date()}), { status: 200 })

    } catch (error) {
        return new Response(JSON.stringify({ message: error }), { status: 500 })
    }
}