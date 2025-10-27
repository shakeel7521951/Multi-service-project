import React from 'react'
import HeroSection from '../components/Community/HeroSection'
import UploadMusic from '../components/Community/UploadMusic'
import PostFeed from '../components/Community/PostFeed'
import CommunityCta from '../components/Community/CommunityCta'

const MusicCommunity = () => {
  return (
    <div>
      <HeroSection/>
      <UploadMusic/>
      <PostFeed/>
      <CommunityCta/>
    </div>
  )
}

export default MusicCommunity
