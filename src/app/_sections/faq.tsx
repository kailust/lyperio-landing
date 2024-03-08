'use client'

import { Accordion, AccordionItem } from "@nextui-org/accordion";

const faqs: { question: string, answer: string }[] = [
  {
    question: 'What is KidX AI and how can it benefit my child\'s learning experience?',
    answer: 'KidX AI is an educational platform designed to enhance your child\'s learning journey. It offers personalized learning experiences tailored to your child\'s needs and preferences. By leveraging AI technology, KidX AI provides interactive lessons, adaptive learning paths, and continuous feedback to support your child\'s academic growth and development.'
  },
  {
    question: 'Can I customize the content to align with my child\'s learning goals and interests?',
    answer: 'Yes, KidX AI allows parents to customize the learning content to match their child\'s learning objectives and interests. Whether your child is interested in STEM subjects, language learning, or arts and humanities, KidX AI offers a wide range of customizable learning modules to cater to your child\'s unique needs.'
  },
  {
    question: 'What happens if my child encounters a challenging concept or question while using KidX AI?',
    answer: 'KidX AI provides comprehensive support for children encountering challenging concepts or questions. In such cases, KidX AI offers step-by-step guidance, additional resources, and real-time assistance to help your child overcome obstacles and continue their learning journey.'
  },
  {
    question: 'What platforms and devices are compatible with KidX AI?',
    answer: 'KidX AI is accessible on a variety of platforms and devices, including desktop computers, laptops, tablets, and smartphones. Whether your child prefers to learn at home or on the go, KidX AI offers a seamless learning experience across different devices and operating systems.'
  },
  {
    question: 'Is KidX AI capable of supporting multilingual learning for children from diverse backgrounds?',
    answer: 'Yes, KidX AI offers multilingual support for children from diverse linguistic backgrounds. Whether your child speaks English, Spanish, French, or any other language, KidX AI provides learning content in multiple languages to ensure accessibility and inclusivity.'
  },
  {
    question: 'How does the parent portal with analytics enhance my understanding of my child\'s learning progress and performance?',
    answer: 'The parent portal with analytics provides valuable insights into your child\'s learning progress and performance. You can track your child\'s engagement, monitor their mastery of concepts, and identify areas for improvement. Additionally, the analytics dashboard offers personalized recommendations and resources to support your child\'s academic success.'
  },
  {
    question: 'Can KidX AI integrate with my child\'s school curriculum or other educational resources?',
    answer: 'Yes, KidX AI offers seamless integration with your child\'s school curriculum and other educational resources. Whether your child attends a traditional school, homeschool, or online learning program, KidX AI can complement existing educational initiatives and enhance your child\'s learning experience.'
  },
  {
    question: 'How does the pricing structure work for KidX AI\'s educational content and what\'s included?',
    answer: 'KidX AI typically offers subscription-based pricing plans for access to its educational content. The pricing plans may include access to interactive lessons, personalized learning modules, real-time feedback, and parental monitoring tools. Additionally, KidX AI may offer tiered pricing options with varying levels of access and features to accommodate different budgetary and educational needs.'
  },
  {
    question: 'Is there a setup process for KidX AI, and how long does it usually take to get started?',
    answer: 'The setup process for KidX AI is simple and straightforward. Upon signing up for a subscription, you will receive login credentials to access the platform. From there, you can customize your child\'s learning profile, set learning goals, and explore the available learning content. The setup process typically takes only a few minutes, allowing your child to start learning and exploring KidX AI\'s educational offerings right away.'
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
