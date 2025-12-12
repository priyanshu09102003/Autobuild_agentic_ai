import { ThemeToggler } from '@/components/ThemeToggler'
import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const AppHeader = () => {
  return (
    <div className='flex justify-between items-center p-4 shadow-xl dark:border-b border-gray-500'>
        <SidebarTrigger className='cursor-pointer h-10 w-10' />
        <div className='[&_button]:h-10 [&_button]:w-10'>
          <ThemeToggler />
        </div>
    </div>
  )
}

export default AppHeader