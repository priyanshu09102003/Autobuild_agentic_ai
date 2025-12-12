import { ThemeToggler } from '@/components/ThemeToggler'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MenuOptions = [
   { name: 'Pricing',
    path: '/pricing'
    },

    {
        name: 'Contact Us',
        path: '/'
    }
]

const Header = () => {
  return (
    <div className='flex items-center justify-between p-4 shadow-xl dark:border-b border-gray-500'>
        {/* Logo */}
        <div className='flex gap-2 items-center'>
            <Image src={'/logo.svg'} alt='Logo' width={55} height={55} />
            <h1 className='font-bold text-2xl'>AutoBuild</h1>
        </div>


        {/* Menu Options */}

        <div className='flex gap-3'>
            {MenuOptions.map((menu , index)=> (
                <Button variant={"ghost"} key={index} className='cursor-pointer'>{menu.name}</Button>
            ))}
        </div>


        {/* Buttons - Create Workspace and toggle theme */}

        <div className='flex gap-3'>
            <ThemeToggler />
            <Button className='cursor-pointer'>Create Workspace <Plus/></Button>  
        </div>
    </div>
  )
}

export default Header
