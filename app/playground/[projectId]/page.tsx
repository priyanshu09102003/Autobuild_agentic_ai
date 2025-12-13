"use client"

import React, { useEffect, useState } from 'react'
import PlaygroundHeader from '../_components/PlaygroundHeader'
import ChatSection from '../_components/ChatSection'
import WebsiteDesign from '../_components/WebsiteDesign'
import ElementSettings from '../_components/ElementSettings'
import { useParams, useSearchParams } from 'next/navigation'
import axios from 'axios'

export type Frame={
    projectId: string,
    frameId: string,
    designCode: string,
    chatMessages: Messages[]
}

export type Messages = {
    role: string,
    content: string
}

const PlaygroundPage = () => {
    const {projectId} = useParams();
    const params = useSearchParams();
    const frameId = params.get('frameId');
    console.log(frameId)
    console.log(projectId)

    const [frameDetail, setFrameDetail] = useState<Frame>()

    useEffect(() => {
        frameId && getFrameDetails();
    }, [frameId])

    const getFrameDetails = async() => {
        const result = await axios.get('/api/frames?frameId='+frameId+"&projectId="+projectId)
        console.log(result.data);
        setFrameDetail(result.data)

    }

    const SendMessage = (userInput: string) => {
        
    }

  return (
    <div>
      <PlaygroundHeader/>

        <div className='flex'>
        {/* Chats Section */}
        <ChatSection messages={frameDetail?.chatMessages??[]} onSend={(input : string) => SendMessage(input)} />


        {/* Website Design Section */}
        <WebsiteDesign />


        {/* Setting section */}

        {/* <ElementSettings /> */}


        </div>
    </div>
  )
}

export default PlaygroundPage
