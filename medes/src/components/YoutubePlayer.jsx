import React from 'react'
import ReactPlayer from 'react-player'

const YoutubePlayer = () => {
  return (
    <div>
       <div className="flex justify-center w-auto p-6 ">
      <ReactPlayer url='https://www.youtube.com/watch?v=jwA7tLqVoBI' /> 
      </div>
    </div>
  )
}

export default YoutubePlayer
