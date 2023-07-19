import Image from 'next/image'
import './Toolbar.css'

export default function Toolbar() {
  return (
    <div className='tb'>
      <div className='tb-logo'>
        <Image
          src='/logo.svg'
          alt='lyperio-logo'
          fill
        />
      </div>
      <div className='tb-sections'>
        <a href='#home'>Home</a>
        <a href='#services'>Serivces</a>
        <a href='#about-us'>About Us</a>
      </div>
      <a href='#contact-us' className='tb-btn'>
        Contact Us
      </a>
    </div>
  )
}