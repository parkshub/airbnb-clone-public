import User from "@/models/User";
import connectDB from "@/utils/database";
import bcryptjs from "bcryptjs"

// Updating admin password

export const PATCH = async(request, { params }) => {
    console.log('PATCH request')

    const { username, password, newPassword } = await request.json()

    try {
        const user = await User.findOne({username})

        if (!user || !await bcryptjs.compare(password, user.password)) {
            return new Response('Invalid credentials', { status: 404 })
        }

        if (await bcryptjs.compare(newPassword, user.password)) {
            return new Response('Enter a different password', { status: 404 })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(newPassword, salt)

        user.password = hashedPassword
        await user.save()

        return new Response('Password updated', { status: 200 })
        
    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}