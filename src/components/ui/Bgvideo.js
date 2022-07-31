import React from 'react'
import videoBg from '../../img/BBtrailer.mp4'

const Bgvideo = () => {
  return (
    <div className='videoBg'>
    <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted/>
    </div>
  )
}

export default Bgvideo