import Image from 'next/image'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <Image
        src='/logo-s.svg'
        alt='lyperio-logo-s'
        width={50}
        height={32}
      />
      <p className='footer-text'>
        © 2023 Lyperio All rights reserved
      </p>
    </div>
  )
}