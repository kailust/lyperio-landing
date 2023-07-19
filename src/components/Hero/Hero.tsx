import Image from 'next/image'
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero-container' id='home'>
      <div className='hero'>
        <p className='hero-title'>AI Automation</p>
        <p className='hero-subtitle'>for Short Term Rent Companies</p>
        <p className='hero-description'>Maximize Efficiency, Delight Guests, and Boost Your Business</p>
      </div>
    </div>
  )
}