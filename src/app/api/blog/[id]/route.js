import Blog from "@/models/Blog"
import connectDB from "@/utils/database"

import { parse } from 'node-html-parser';
import cloudinary  from "@/utils/cloudinary";


export const DELETE = async (request, {params}) => {
    // console.log('its a delete request!')
    const { id } = params

    try {
        await connectDB()

        const blog = await Blog.findOne({_id: id})

        const titleImageId = blog.titleImageId

        // uncomment this after testing
        if (titleImageId) {
            await cloudinary.uploader.destroy(titleImageId)
        }

        const root = parse(blog.content)
        const imageElements = root.querySelectorAll('img')
        
        for (let element of imageElements) {
            const imageId = element.getAttribute('id')
            await cloudinary.uploader.destroy(imageId)
        }

        // uncomment these this after testing
        await blog.deleteOne()
        
        return new Response(JSON.stringify({ message: 'Post Deleted' }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Internal Error' }), { status: 500 })
    }
}


export const GET = async (request, {params}) => {
    // console.log('its a get request! and the params are', params)
    const { id } = params

    try {
        await connectDB()
        const blog = await Blog.findOne({ _id: id })
        // console.log('this is the blog', blog)

        // return new Response(JSON.stringify({ _id: blog._id, title: blog.title, titleImage: blog.titleImageURL, content: blog.content }))
        return new Response(JSON.stringify({ _id: blog._id, title: blog.title, titleImageURL: blog.titleImageURL, content: blog.content, createdAt: blog.createdAt}))
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Internal Error' }), { status: 500 })
    }
}

export const PUT = async (request, {params}) => {
    // console.log('its an update request')
    
    const { id } = params
    const newBlog = await request.json()

    try {        
        await connectDB()

        const oldBlog = await Blog.findOne({_id: id})

        ///////////////////////////////////////////////////
        // condition for when there are no changes
        if (newBlog.title === oldBlog.title && 
            newBlog.content === oldBlog.content && 
            newBlog.titleImageURL === oldBlog.titleImageURL) {
            // newBlog.titleImage === oldBlog.titleImageURL) {
                // console.log('i am here because there are no changes')
            return new Response(JSON.stringify({ message: 'No Changes Made' }), { status: 200 })
        }
        ///////////////////////////////////////////////////




        ///////////////////////////////////////////////////
        // redefining title regardless
        oldBlog.title = newBlog.title
        ///////////////////////////////////////////////////


        ///////////////////////////////////////////////////
        // title image
        // condition for when title image has changed
        if (oldBlog.titleImageURL !== newBlog.titleImageURL) {
            // condition for when previous title image was not empty
            if (oldBlog.titleImageURL !== '') {
                // destory previous image from cloudinary
                await cloudinary.uploader.destroy(oldBlog.titleImageId)
            }

            // condition for when title image changes to another image
            if (newBlog.titleImageURL !== '') {
                // upload image to cloudinary
                const imageResponse = await cloudinary.uploader.upload(newBlog.titleImageURL, {
                    folder: 'airbnb'
                })

                oldBlog.titleImageURL = imageResponse.secure_url
                oldBlog.titleImageId = imageResponse.public_id

            // condition for when title image changes to nothing
            } else if (newBlog.titleImageURL === '') {
                oldBlog.titleImageURL = ''
                oldBlog.titleImageId = ''
            }
        }
        ///////////////////////////////////////////////////

        ///////////////////////////////////////////////////
        // redefining the content and uploading new images
        const newRoot = parse(newBlog.content)
        const newImages = new Map()

        for (let element of newRoot.querySelectorAll('img')) { // didn't use for each here because needed await
            const imageFile = element.getAttribute('src')

            if (imageFile.startsWith('data')) {
                newImages.set(element.getAttribute('src'), element.getAttribute('id'))

                const imageResponse = await cloudinary.uploader.upload(imageFile, { 
                    folder: "airbnb" })

                element.setAttribute('src', imageResponse.secure_url) 
                element.setAttribute('id', imageResponse.public_id)
            }

            newImages.set(element.getAttribute('src'), element.getAttribute('id'))
        }

        ///////////////////////////////////////////////////


        // just destroying the images in the previous content
        const oldRoot = parse(oldBlog.content)
        const oldImages = new Map()
        
        oldRoot.querySelectorAll('img').forEach(element => {
            oldImages.set(element.getAttribute('src'), element.getAttribute('id'))
        })

        for (let i of oldImages) {
            let link = i[0]
            let imgId = i[1]

            if (!newImages.has(link)) {
                await cloudinary.uploader.destroy(imgId)
            }
        }
        ///////////////////////////////////////////////////

        oldBlog.content = newRoot.toString()
        await oldBlog.save()

        return new Response(JSON.stringify({ message: 'Post Updated!' }), { status: 200 })
    } // put the catch block here again after testing
    
    catch (error) {
        return new Response(JSON.stringify({ message: 'Something went wrong please try again.' }), { status: 500 })
    }
}