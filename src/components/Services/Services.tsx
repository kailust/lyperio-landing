import './Services.css'

export default function Services() {
  return (
    <div className='services' id='services'>
      <p className='serv-title'>Services</p>
      <div className='serv-content'>
        <OneService
          title='Guest Communication Chatbot - Instant Answers 24/7'
          content="Enhance guest experiences and streamline communication with our advanced Guest Communication Chatbot. Our chatbot operates 24/7, providing instant answers to your guests' inquiries. Each guest receives a unique security code granting access to their specific apartment for their stay. By providing customized text with answers to common questions for each apartment, our chatbot utilizes AI algorithms to generate accurate and human-like responses. In cases where the bot cannot provide an answer, it seamlessly connects guests to a human representative while capturing the unanswered questions for future optimization. Elevate guest satisfaction and save valuable time with our intuitive chatbot solution."
          points={['24/7 availability for instant guest support',
            'Customized responses based on apartment-specific information',
            'Seamless handoff to human representatives when needed',
            'Continuous improvement through captured unanswered questions']}
        />
        <OneService
          title='Automations - Minimize Time Wasting, Maximize Efficiency'
          content="Unlock efficiency and minimize human error by automating repetitive tasks with our comprehensive automation services. We identify areas in your operations that can benefit from automation, allowing you to streamline processes and optimize resource allocation. Our automation solutions are tailored to your specific needs, eliminating time-consuming manual tasks and reducing the likelihood of human errors. From sending automated emails and messages to users during crucial stages of their stay to synchronizing data across multiple programs and tables, we provide reliable and intelligent automation solutions to enhance your short-term rental business."
          points={[
            'Minimize time wastage and improve productivity',
            'Enhance accuracy and reduce human errors',
            'Streamline operations and improve resource allocation',
            'Create personalized and timely guest interactions',
          ]}
        />
        <OneService
          title='Website Bot - Engage Potential Clients Instantly'
          content="Engage potential clients and capture leads with our cutting-edge Website Bot. This intelligent bot resides on your landing page, effortlessly interacting with visitors and providing real-time answers to their questions. The Website Bot acts as a virtual sales representative, offering personalized experiences and driving customer engagement. By leveraging AI-driven technology, the Website Bot empowers you to deliver exceptional customer service and convert website visitors into loyal customers. Elevate your online presence and leverage the power of AI to enhance customer satisfaction and drive business growth."
          points={[
            'Instantly engage and assist website visitors',
            'Provide accurate and personalized information',
            'Capture leads and nurture potential clients',
            'Increase conversion rates and drive business growth',
          ]}
        />
        <OneService
          title='Customized Solutions - Tailored to Your Unique Needs'
          content="At Lyperio, we understand that every short-term rental business is unique, with specific needs and challenges. That's why we offer Customized Solutions to address your individual requirements and drive optimal results. Our team of experts will collaborate closely with you to develop tailored strategies and implement AI automation solutions that align with your business goals."
        />
      </div>
    </div>
  )
}

interface OneFunctionProps {
  title: string,
  content: string,
  points?: string[]
}
function OneService(props: OneFunctionProps) {
  return (
    <div className='serv-one'>
      <p className='serv-one-title'>{props.title}</p>
      <p className='serv-one-content'>{props.content}</p>
      {props.points && <ul>
        {props.points.map(value => <li>{value}</li>)}
      </ul>}
    </div>
  )
}