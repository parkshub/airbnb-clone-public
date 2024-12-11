import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import connectDB from "@/utils/database";
// import User from "@/models/User";
// import { signIn } from "next-auth/react";


const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // callbacks: { async redirect({ url, baseUrl }) { return baseUrl }, }
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === 'google') {
                const { name, email } = user

                // if (email === process.env.ALLOWED_EMAIL_TEST || email === process.env.ALLOWED_EMAIL) {
                if (email === process.env.ALLOWED_EMAIL_TEST) {
                    return user
                } else {
                    return null
                }
            }
        // async redirect({ url, baseUrl }) {
        //     const redirectUrl = url.startsWith('/') ? new URL(url, baseUrl).toString() : url;
        //     console.log(`[next-auth] Redirecting to "${redirectUrl}" (resolved from url "${url}" and baseUrl "${baseUrl}")`);
        //     return redirectUrl;
        // },
        },    
    // },
    }
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}