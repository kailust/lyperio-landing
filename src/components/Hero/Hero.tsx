import './Hero.css'
import CalendlyBtn from '@/lib/components/CalendlyBtn/CalendlyBtn'

export default function Hero() {
  return (
    <div className='hero' id='home'>
      <p className='hero-title'>
        Unlock Your Marketing Company's Potential with <span className='text-gradient'>AI Automation</span>
      </p>
      <p className='hero-subtitle'>
      Experience the power of automation for your marketing company. Save time and money by automating 
      everything - from repetitive tasks to AI-driven Lead Capturing and Clients Onboarding.<br/>
      Maximize productivity and focus on business growth.
      </p>
      <div className='hero-buttons'>
        <CalendlyBtn className='hero-btn-call' text='Book a Discovery Call' />
      </div>
    </div>
  )
}