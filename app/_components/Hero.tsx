"use client";

import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { ArrowUp, HomeIcon, ImagePlusIcon, Key, LayoutDashboard, Loader2Icon, User } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

const suggestions = [
  {
    label: 'Dashboard',
    prompt: 'Create a modern analytics dashboard for a SaaS application to track customer metrics and revenue data. Include interactive charts, key performance indicators (KPIs), data tables with sorting and filtering, a clean sidebar navigation, and a responsive layout optimized for both desktop and mobile views.',
    icon: LayoutDashboard
  },
  {
    label: 'SignUp Form',
    prompt: 'Create a modern and elegant sign up form with email and password input fields, real-time validation, Google and Github OAuth login buttons with icons, a terms and conditions checkbox with a link, smooth animations on focus and hover states, error handling messages, and a clean responsive design that works on all screen sizes.',
    icon: Key
  },
  {
    label: 'Hero',
    prompt: 'Create a stunning hero section for a modern productivity SaaS landing page. Include a bold headline with gradient text effect, an engaging subtitle, a compelling call-to-action button, a secondary button for feature announcement, high-quality hero image or illustration, smooth scroll animations, subtle background patterns or gradients, and full responsive design that looks professional on all devices.',
    icon: HomeIcon
  },
  {
    label: 'User Profile Card',
    prompt: 'Create a modern and interactive user profile card component for a social media website. Include a profile picture with hover effects, user name and bio, follower and following counts, social media links with icons, an edit profile button, activity statistics, a clean card layout with shadows and rounded corners, smooth hover animations, and fully responsive design.',
    icon: User
  }
]

const generateRandomFrameNumber = () => {
  const num = Math.floor(Math.random()*10000)
  return num;
}

const Hero = () => {

    const [userInput , setUserInput] = useState<string>()
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { isSignedIn } = useUser();


    const createNewProject = async () => {
      setLoading(true);
      const projectId = uuidv4();
      const frameId = generateRandomFrameNumber();
      const messages = [
        {
          role: 'user',
          content: userInput
        }
      ]
      try {

        const result = await axios.post('/api/projects', {
          projectId: projectId,
          frameId: frameId,
          messages: messages
        })

        console.log(result.data);
        toast.success('Project created successfully!')

        //Navigate to playground
        router.push(`/playground/${projectId}?frameId=${frameId}`)
        setLoading(false);
        
      } catch (error) {
        console.log(error);
        toast.error('Internal Server Error')
        setLoading(false)
      }
    }
  return (
    <div className='flex flex-col items-center h-[85vh] justify-center'>
      
      <h2 className='font-bold text-6xl holographic'>
        What should we Build?
      </h2>
      <p className='text-lg text-gray-400 mt-4'>
        Build with <b className='font-semibold holographic'>Prompts</b>, Polish with <b className='font-semibold holographic'>Clicks</b>
      </p>

      {/* Input Box */}

    <div className='w-full max-w-2xl p-5 border mt-5 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-800'>
        <textarea 
            placeholder='Describe your vision...' 
            className='w-full h-24 focus:outline-none focus:ring-0 resize-none bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-500' 
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
        />

        <div className='flex justify-between items-center'>
            <Button variant={"ghost"} className='cursor-pointer'><ImagePlusIcon size={4} /></Button>
            
            {isSignedIn && (
              <Button className='cursor-pointer' disabled={!userInput || loading} onClick={createNewProject}>
                {loading? <Loader2Icon size={4} className='animate-spin'/> : <ArrowUp size={4} />}
              </Button>
            )}

        </div>
    </div>

      {/* Suggestions List */}

      <div className='mt-5 flex gap-3'>
        {suggestions.map((suggestion, index)=> (
            <Button key={index} variant={"outline"} className='cursor-pointer'
            onClick={() => setUserInput(suggestion.prompt)}
            >
                <suggestion.icon />
                {suggestion.label}
                
            </Button>
        ))}
      </div>


    </div>
  )
}

export default Hero