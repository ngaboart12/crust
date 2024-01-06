"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


   
export default function RootLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };

    // Set initial window size
    handleResize();

    // Attach event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <html lang="en">
      <body className={inter.className}>
        <div className='w-full min-h-[100vh] flex items-center justify-center'>
          <h1 className='text-[18px]'>Sorry thers is no Android Version</h1>
        </div>
        </body>
    </html>
     
    );
  }
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
