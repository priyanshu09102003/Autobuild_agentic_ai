'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'
import { ReactNode } from 'react'

export function ClerkThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme()

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === 'dark' ? dark : undefined,
        layout: {
          logoImageUrl: '/logo.svg',
          logoPlacement: 'inside',
        },
        elements: {
          rootBox: 'flex items-center justify-center',
          card: 'shadow-xl',
        }
      }}
      localization={{
        signIn: {
          start: {
            title: 'Sign In to AutoBuild',
            subtitle: 'Sign in to access your workspace', 
          }
        },
        signUp:{
          start:{
            title: 'Sign Up to AutoBuild',
            subtitle: 'Create your account to start building',
          }
        }
      }}
    >
      {children}
    </ClerkProvider>
  )
}