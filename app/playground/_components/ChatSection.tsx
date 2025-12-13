"use client"

import React, { useState } from 'react'
import { Messages } from '../[projectId]/page'
import { ArrowUp, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Props={
    messages: Messages[]
    onSend: any
}

const ChatSection = ({messages, onSend} : Props) => {
    const [input, setInput] = useState<string>();
    const handleSend = () => {
        if(!input?.trim()) return;

        onSend(input);
        setInput('')
    }
  return (
    <div className='w-96 h-[90vh] shadow-xl dark:border-r border-gray-200 dark:border-gray-800 p-5 flex flex-col'>
      
      {/* Message Section */}
      <div className='flex-1 overflow-y-auto space-y-4 mb-4'>

        {messages?.length === 0 ? (
            <div className='flex flex-col items-center justify-center h-full text-center'>
              <Bot className='w-12 h-12 text-gray-400 dark:text-gray-600 mb-3' />
              <p className='text-sm text-gray-500 dark:text-gray-400'>No messages yet</p>
            </div>
        ) : (
            messages.map((msg,index) => (
                <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse': 'flex-row'}`}>
                    
                    {/* Avatar */}
                    <div className='flex-shrink-0'>
                      {msg.role === 'user' ? (
                        <div className='w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center'>
                          <User className='w-5 h-5 text-white' />
                        </div>
                      ) : (
                        <div className='w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center'>
                          <Bot className='w-5 h-5 text-white' />
                        </div>
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div className={`flex flex-col ${msg.role === 'user' ? 'items-end': 'items-start'} max-w-[75%]`}>
                      <div className={`p-3 rounded-2xl ${msg.role === 'user' ? 
                          "bg-blue-600 dark:bg-blue-500 text-white rounded-tr-sm" : 
                          "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-tl-sm shadow-sm"
                      }`}>
                        <p className='text-sm leading-relaxed'>{msg.content}</p>
                      </div>
                    </div>
                </div>
            ))
        )}

      </div>


      {/* Footer Input Section */}

      <div className='flex items-end gap-2 p-3 border rounded-2xl bg-gray-100 dark:bg-gray-900/50 border-gray-300 dark:border-gray-800'>

        <textarea
        value={input}
        placeholder='Prompt AI...'
        rows={2}
        className='flex-1 focus:outline-none focus:ring-0 resize-none bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-500 text-sm'
        onChange={(event)=>setInput(event.target.value)}
        />

        <Button size="icon" className='cursor-pointer flex-shrink-0'><ArrowUp className='w-4 h-4'/></Button>

      </div>
    </div>
  )
}

export default ChatSection