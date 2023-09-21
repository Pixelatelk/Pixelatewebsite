import React from 'react'
import videoBg from '../assets/pexels.mp4';

const Video = () => {
  return (
    <div className='banner'>
        <video src={videoBg} autoPlay loop muted />
        <div className='content'>
            <h1>Welcome</h1>
        </div>
    </div>
  )
}

export default Video

