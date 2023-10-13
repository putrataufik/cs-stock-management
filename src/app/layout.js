import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CS Stock Management',
  description: 'Manage Your Coffee Shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
      </head>
      <body className={`font-${inter.className} bg-gray-100`}>
        <header className="bg-blue-500 text-white py-4">
          <nav className="container mx-auto">
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/yourStock" className="hover:underline">Your Stock</a></li>
              <li><a href="/liststock" className="hover:underline">List Stock</a></li>
              <li><a href="/profile" className="hover:underline">Profile</a></li>
            </ul>
          </nav>
        </header>
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  )
}
