'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './Providers'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { ChakraProvider } from '@chakra-ui/react';
import Navigation from '@/components/Navigation'

// import Navigation from '@/components/NavigationTest'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Peculiar Nest',
//   description: 'Make your home in McAllen, Texas',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ChakraProvider>
      <Provider>
        <Navigation />
        {/* <Header /> */}
          {children}
        <Footer />
      </Provider>
      </ChakraProvider>
      </body>
    </html>
  )
}
