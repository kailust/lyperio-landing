import CalendlyBtn from '@/lib/components/CalendlyBtn/CalendlyBtn'
import './ContactUs.css'

export default function ContactUs() {
  return (
    <div className='contactus' id='contact-us'>
      <p className='contactus-name'>Contact Us</p>
      <p className='contactus-title'>
        Get Started With
        <span className='text-gradient'> AI Automation</span>
      </p>
      <p className='contactus-description'>
        Schedule a quick call, where we will discover, how we can help specifically
        your amazing company. No obligations.
      </p>
      <CalendlyBtn text='Book a Discovery Call' className='contactus-btn' />
      <p className='contactus-email'>
        <a href='mailto:denys@lyperio.com'>denys@lyperio.com</a>
      </p>
    </div>
  )
}