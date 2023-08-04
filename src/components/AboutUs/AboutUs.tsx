import Image from 'next/image'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <div className='aboutus' id='about-us'>
      <div className='aboutus-left'>
        <p className='aboutus-title'>About Us</p>
        <Image
          src='/logo.svg'
          alt='lyperio-logo'
          width={120}
          height={40}
        />
      </div>

      <div className='aboutus-content'>
        <p>
          Lyperio, founded in 2023 by a passionate software developer, is on a mission to
          solve challenges in the marketing industry through AI automation. Leveraging
          expertise in no-code, low-code, and custom-coded solutions, we develop robust automation
          tools, imitating human behavior to unlock efficiency.
        </p>
        <p>
          As a small yet dedicated team, we drive innovation and help clients thrive in the
          dynamic world of marketing. Our unique approach blends various automation techniques,
          creating stable, complex solutions using AI algorithms, empowering clients to overcome
          obstacles and achieve success.
        </p>
      </div>
    </div>
  )
}