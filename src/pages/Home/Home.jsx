import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.scss'

function Home() {
    const navig = useNavigate()
  return (
    <div className='home'>
        <button onClick={()=>navig('/starter')}>Start!</button>
    </div>
  )
}

export default Home