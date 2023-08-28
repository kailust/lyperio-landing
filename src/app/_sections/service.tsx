import { Card, CardBody } from "@nextui-org/card"

const steps: { title: string, description: string }[] = [
  {
    title: 'Free Consultation',
    description: 'We begin with an exploratory discussion where we aim to understand your business, its operations, existing technology stack, and key pain points. We also delve into your strategic goals to ensure our solutions align with your long-term vision.'
  },
  {
    title: 'Opportunity Identification',
    description: 'Using our deep understanding of your business, we identify areas where AI and automation can bring significant value. We prioritize opportunities based on potential impact, feasibility, and alignment with your business goals.'
  },
  {
    title: 'Solution Design',
    description: 'Once opportunities are identified, our team of AI experts and developers get to work on designing the right solution. This involves conceptualizing the AI model or automation system, defining how it integrates with existing processes, and planning for scalability.'
  },
  {
    title: 'Development & Testing',
    description: 'We employ agile development practices to ensure rapid and quality solution delivery. Throughout the process, we maintain regular communication with you. Thorough testing is performed to guarantee the functionality and robustness of the solution.'
  },
  {
    title: 'Implementation & Integration',
    description: 'After the solution is fine-tuned and approved, we proceed with its implementation. We ensure seamless integration with your existing systems and workflows, minimizing disruption to your ongoing operations.'
  },
  {
    title: 'Training & Support',
    description: 'We provide comprehensive training to your team, equipping them to effectively use and manage the new tools. Furthermore, we offer ongoing support and maintenance services to ensure your solution continues to deliver optimal results.'
  },
  {
    title: 'Review & Optimization',
    description: 'As your business evolves, so should our solutions. We continuously monitor the performance of our solutions, gather feedback, and optimize them to better serve your needs, in addition to implementating the latest AI technologies as they become available.'
  },
]

export default function Service() {
  return (
    <div className="flex items-center flex-col gap-6">
      <div className="font-semibold text-4xl text-center">
        Supercharge Your Business with <span className="text-transparent bg-clip-text bg-gradient-primary">
          AI
        </span>
      </div>
      <div className="text-center">
        At Lyperio, we offer full-stack AI development, setup and manage end-to-end AI services tailored
        to your specific business needs. From creating scalable AI systems to automating workflows, we
        prioritize your business efficiency.
      </div>
      <div className="flex gap-2 flex-col">
        <div className="font-semibold text-2xl text-center sticky top-20 mb-4">
          We provide End-to-End Service
        </div>
        {steps.map((step, idx) => (
          <Card shadow="none" className="border-gray-200 border-1 max-w-2xl sticky" style={{top: `${9.5 + idx * 0.5}rem`}}>
            <CardBody className="flex flex-col items-center">
              <div className="flex gap-4">
                <div className="flex items-center justify-center rounded-full border-1 border-black text-lg h-10 w-10">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1">
                    {step.title}
                  </div>
                  <div className="text-sm">
                    {step.description}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}