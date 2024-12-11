
import User from "@/models/User";
import connectDB from "@/utils/database";
import bcryptjs from "bcryptjs"

// Registering new admin

export const POST = async (request, { params }) => {
    console.log('POST request')
    
    const { username, password } = await request.json();

    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    try {
        await connectDB()

        const user = await User.create({
            username: 'admin',
            password: hashedPassword
        })

        return new Response('done!', { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}
