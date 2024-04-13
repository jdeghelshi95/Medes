import React from 'react'
import Header from '../components/Header'
import BodyMain from '../components/BodyMain'
import YoutubePlayer from '../components/YoutubePlayer'
import VideoHeader from "../components/VideoHeader"
const Home = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <BodyMain/>
      </div>
      <div>
      <VideoHeader/>
      </div>
      <div>
        <YoutubePlayer/>
      </div>
    </div>
  )
}

export default Home