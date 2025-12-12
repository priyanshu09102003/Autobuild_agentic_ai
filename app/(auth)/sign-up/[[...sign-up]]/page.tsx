'use client'

import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export default function Page() {
  const { theme } = useTheme()

  return (

    <div className='flex items-center justify-center h-screen'>
        <SignUp
        appearance={{
            baseTheme: theme === 'dark' ? dark : undefined,
            layout: {
            logoImageUrl: '/logo.svg', 
            logoPlacement: 'inside', 
            },
            elements: {
            rootBox: 'flex items-center justify-center min-h-screen'
            }
        }}
        />
    </div>
  )
}