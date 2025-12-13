import { ThemeToggler } from '@/components/ThemeToggler'
import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const PlaygroundHeader = () => {
  return (
    <div className='flex justify-between items-center p-4 shadow-xl dark:border-b border-gray-500'>
        <div className='flex gap-2 items-center'>
            <Image src={'/logo.svg'} alt='Logo' width={55} height={55} />
            <h1 className='font-bold text-2xl'>AutoBuild</h1>
        </div>

      <div className='flex gap-3'>
        <ThemeToggler />
        <Button className='cursor-pointer'>Save <Save /></Button>
      </div>
    </div>
  )
}

export default PlaygroundHeader
