'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion";

const faqs: { question: string, answer: string }[] = [
  {
    question: 'What is an AI Guest Experience Manager, and how can it benefit my short-term rental management company?',
    answer: 'Every guest asks pretty much the same questions - what\'s the wifi password, where is the key, how to turn hot water on, etc. It takes so much time that you either have no time for other things or have to hire someone to answer them. That\'s where our solution can help you. We help you answer these questions one last time and then use these answers to train AI model to handle these questions with your guests, saving you time and money, so you can focus on what\'s important - scailing your business'
  },
  {
    question: 'Can I customize the AI\'s responses to match the tone and style of my company\'s brand?',
    answer: 'Yes, we can "tell AI how to act" to match your expectations in tone and style of speaking'
  },
  {
    question: 'What happens if the AI encounters a new question that wasn\'t covered or a complex guest inquiry that it can\'t handle?',
    answer: 'We will save this question to our system and seamlessly forward conversation to your support team. Later, you can cover it in apartment data for future guests and mark the question as covered or reject the question (if it is a custom inquery that can\'t be covered)'
  },
  {
    question: 'What platforms and channels are you using for communication with guests?',
    answer: 'Depending on your Property Management Software (Hostaway, Lodgify, etc.) it can be directly in Airbnb (or any other platform) chat or through any messenger like WhatsApp or Facebook Messenger'
  },
  {
    question: 'Is the AI capable of handling multilingual communication with guests from different parts of the world?',
    answer: 'Yes, we save apartments info in English, but answers are generated in a language that was used to ask a question. If guest asks in Spanish, we will answer in Spanish'
  },
  {
    question: 'How does the web portal with analytics enhance my understanding of guest interactions and satisfaction?',
    answer: 'You can see the how many messages are coming, response ratio for the questions, which questions needs to be covered, info about every apartment and history of conversations. It will help you understand true value of the service and keep track of answers'
  },
  {
    question: 'Can the AI Guest Experience Manager integrate with my existing property management software or tools?',
    answer: 'We will try our best, but it depends on your software. Some tools just don\'t offer such possibility with no workarounds'
  },
  {
    question: 'How does your pricing structure work for your AI automation services and what\'s included?',
    answer: 'We usually take one-time setup fee and then monthly support fee. During setup process we clarify your requirements, develop solution for your needs, help you prepare apartment data and teach your staff how to use the system. Support fee includes all the expenses for the solutions, regular updating of apartments data, system improvements and teaching your new staff if needed'
  },
  {
    question: 'Is there a setup process, and how long does it usually take to get the AI up and running?',
    answer: 'It usually takes about 1 week. Developing on our end takes couple working days, then creating of aparmtent data along with a call with your team to show them how the system works'
  },
]

export default function Faq() {
  return (
    <div>
      <div className="text-3xl font-semibold text-center mb-5">
        Frequently Asked Questions
      </div>
      <Accordion variant="shadow">
        {faqs.map((f, idx) => (
          <AccordionItem key={idx} title={<div className="text-base">{f.question}</div>} aria-label={f.question}>
            {f.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}