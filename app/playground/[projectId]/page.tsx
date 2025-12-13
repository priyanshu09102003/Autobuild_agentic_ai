"use client"

import React from 'react'
import PlaygroundHeader from '../_components/PlaygroundHeader'
import ChatSection from '../_components/ChatSection'
import WebsiteDesign from '../_components/WebsiteDesign'
import ElementSettings from '../_components/ElementSettings'
import { useParams, useSearchParams } from 'next/navigation'

const PlaygroundPage = () => {
    const {projectId} = useParams();
    const params = useSearchParams();
    const frameId = params.get('frameId');
    console.log(frameId)
    console.log(projectId)

    

  return (
    <div>
      <PlaygroundHeader/>

        <div className='flex'>
        {/* Chats Section */}
        <ChatSection />


        {/* Website Design Section */}
        <WebsiteDesign />


        {/* Setting section */}

        {/* <ElementSettings /> */}


        </div>
    </div>
  )
}

export default PlaygroundPage
