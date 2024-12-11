import Blog from "@/models/Blog"
import connectDB from "@/utils/database"

export const GET = async(request, {param}) => {

    try {
        await connectDB()

        const blogPosts = await Blog.find().sort({ createdAt: -1 })

        return new Response(JSON.stringify(blogPosts), { status: 200 })

    } catch (error) {
        return new Response(JSON.stringify({message: 'Something went wrong. Please refresh the page.'}), { status: 500 })
    }
}