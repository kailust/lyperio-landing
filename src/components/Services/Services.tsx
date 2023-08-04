import Image from 'next/image'
import './Services.css'

export default function Services() {
  return (
    <div className='services' id='services'>
      <div>
        <p className='serv-title'>Our Services</p>
        <p className='serv-description'>
          Every business is unique, with specific needs and challenges. We can address your individual requirements
          and drive optimal results. Here are some examples of how we are helping our current clients
        </p>
      </div>
      <div className='serv-items'>
        <Service
          iconSrc='/chat.svg'
          title='Onboarding Automation'
          description="Automate your onboarding process. From contract generation and invoicing to 
          communication setup. Reduce onboarding time and increase close rates"
        />
        <Service
          iconSrc='/chatgpt.svg'
          title='Website Chatbot'
          description="Engage website visitors and capture leads with an interactive chatbot. 
          Customize it to match your requirements and enhance conversion rates"
        />
        <Service
          iconSrc='/robot.svg'
          title='AI Automations'
          description="Leverage AI to automate tasks and eliminate human errors. Enjoy human-like interactions powered by AI, driving instant actions for your business."
        />        
      </div>
    </div>
  )
}

interface OneFunctionProps {
  iconSrc: string,
  title: string,
  description: string
}
function Service(props: OneFunctionProps) {
  return (
    <div className='serv-one'>
      <Image
          src={props.iconSrc}
          alt={props.title + '-icon'}
          width={50}
          height={50}
        />
      <p className='serv-one-title'>{props.title}</p>
      <p className='serv-one-description'>{props.description}</p>
    </div>
  )
}