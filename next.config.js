/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
    env: {
        ETHEREAL: process.env.ETHEREAL
        // API_KEY: process.env.API_KEY,
      },
}

module.exports = nextConfig
