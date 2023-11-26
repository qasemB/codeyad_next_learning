import Footer from '@/components/layout/Footer'
import Head from '@/components/layout/Head'
import Navbar from '@/components/layout/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Car Store',
  description: 'This is my Car store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body className={inter.className}>

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  )
}
