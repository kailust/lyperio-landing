import './ContactUs.css'

export default function ContactUs() {
  return (
    <div className='contactus' id='contact-us'>
      <p className='contactus-title'>Contact Us</p>
      <div className='contactus-content'>
        <p className='contactus-text'>
          Ready to step ahead of your competitors by automating huge part of your company’s workflow? You can schedule a quick call, where we will discover, how we can help specifically your amazing company. No obligations.
        </p>
        <div className='contactus-contacts'>
          <p className='contactus-email'>Email CEO: <a href='mailto:denys@lyperio.com'>denys@lyperio.com</a></p>
          <a href='https://calendly.com/lyperio/automation-discovery-call' target='_blank' className='contactus-callbtn'>
            Schedule Discovery Call
          </a>
        </div>
      </div>
    </div>
  )
}