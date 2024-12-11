import Price from "@/models/Price"
import Detail from "@/models/Detail"
import connectDB from "@/utils/database"

export const GET = async(request, {params}) => {
    // console.log('this is a get request')
    try {
        await connectDB()
        const prices = await Detail.find().select('-_id -__v')
        // console.log('these are prices from get request')
        return new Response(JSON.stringify(prices), { status: 200 })
    } catch (error) {
        return new Response('asd')
    }
}

export const PUT = async(request, {params}) => {
    // console.log('this is put request')

    const update = await request.json()
    // console.log('this is the update', update)


    // const update = Object.fromEntries(Object.entries(response).filter(entry => JSON.stringify(entry[1]) !== JSON.stringify({})))
    // console.log('this is being updated', update)
    
    

    try {
        await connectDB()

        const response = await Detail.findOneAndUpdate({}, update)
        // console.log('this is the response from mongoose', response)
        return new Response(JSON.stringify('asdfasdf'), { status: 200 })

    } catch (error) {
        
    }
}

export const POST = async(request, {params}) => {
    // console.log('post request is made')
    
    const response = await request.json()
    // console.log('this is the response', response)

    try {
        await connectDB()
        const detail = await Detail.create(response)
        // console.log('this was created', detail)

        new Response(JSON.stringify({ message: 'cool' }), { status: 200 })

    } catch (error) {
        
    }
}