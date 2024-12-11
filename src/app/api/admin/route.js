
import User from "@/models/User";
import connectDB from "@/utils/database";
import bcryptjs from "bcryptjs"

// Getting admin data

export const POST = async (request, { params }) => {
    console.log('main POST request')

    const password = await request.json()

    try {
        await connectDB()

        const user = await User.findOne({username: 'admin'})

        if (!user || !await bcryptjs.compare(password, user.password)) {
            return new Response("Invalid credentials", { status: 404 })
        }
        
        return new Response(JSON.stringify(user.username), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}
