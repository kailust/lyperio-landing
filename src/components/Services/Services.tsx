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
          iconSrc='/chatgpt.svg'
          title='Guest Communication Chatbot'
          description="Let your guests ask questions to our Chatbot, while you answer only 
            specific questions, which then can be covered. Secure access via security token"
        />
        <Service
          iconSrc='/chat.svg'
          title='Website Chatbot'
          description="Provide instant answers to your website visitors, enhancing 
            chances of booking your apartments. Custom logic for your needs"
        />
        <Service
          iconSrc='/robot.svg'
          title='AI Automations'
          description="Save countless hours by automating any task. Eliminate human errors
            with automation. Use AI for human imitation. Benefit from instant actions"
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