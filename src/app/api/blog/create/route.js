import Blog from "@/models/Blog"
import connectDB from "@/utils/database"
import cloudinary from "@/utils/cloudinary"
import { parse } from 'node-html-parser';

export const POST = async (request, {params}) => {
    const { title, titleImage, content } = await request.json()

    // console.log('this is title, titleimage, and content', title, titleImage, content)
    
    try {
        const root = parse(content);
        const imgElements = root.querySelectorAll('img')
        let titleImageURL = ''
        let titleImageId = ''

        if (titleImage) {
            const imageResponse = await cloudinary.uploader.upload(titleImage, {
                    folder: "airbnb",
                })
            
            titleImageURL = imageResponse.secure_url
            titleImageId = imageResponse.public_id
        }

        for (let element of imgElements) {

            const imageFile = element.getAttribute('src')

            const imageResponse = await cloudinary.uploader.upload(imageFile, { 
                folder: "airbnb" 
            })

            const imageURL = imageResponse.secure_url
            const imageId = imageResponse.public_id

            element.setAttribute('src', imageURL)
            element.setAttribute('id', imageId)
        }

        await connectDB()
        await Blog.create({title, titleImageURL, titleImageId, content: root.toString()})
        
        return new Response(JSON.stringify({message:'Successfully Posted'}), { status: 200})

    } catch (error) {
        return new Response(JSON.stringify({message:'An error occured. Please save and refresh the page'}), { status: 500})
    }
}
