import { Card, CardBody } from "@nextui-org/card";

const steps: { title: string, description: string }[] = [
  {
    title: 'Free Consultation',
    description: 'We begin with an in-depth discussion to understand your educational goals, current systems, and pain points. This helps us tailor our AI solutions to meet your specific needs and objectives.'
  },
  {
    title: 'Opportunity Identification',
    description: 'Leveraging our expertise in AI technology, we identify areas where AI can enhance learning experiences and streamline educational processes. We prioritize opportunities based on their potential impact and alignment with your educational vision.'
  },
  {
    title: 'Solution Design',
    description: 'Our team of AI experts designs customized solutions tailored to your educational requirements. This involves conceptualizing AI models, defining integration strategies, and ensuring scalability to support your growing needs.'
  },
  {
    title: 'Development & Testing',
    description: 'Using agile development methodologies, we build and test AI solutions to ensure they meet your standards of quality and functionality. Continuous communication and feedback loops are maintained throughout the process.'
  },
  {
    title: 'Implementation & Integration',
    description: 'Once developed, we seamlessly integrate AI solutions into your existing educational platforms and workflows. Our goal is to minimize disruption and ensure a smooth transition for educators and students alike.'
  },
  {
    title: 'Training & Support',
    description: 'We provide comprehensive training to educators and staff members on how to effectively utilize AI tools in the classroom. Additionally, our dedicated support team is available to assist with any technical issues or questions.'
  },
  {
    title: 'Review & Optimization',
    description: 'We continuously monitor the performance of AI solutions, gather feedback, and optimize them to better serve your educational goals. As technology evolves, we stay ahead of the curve, implementing the latest advancements in AI.'
  },
];

export default function Service() {
  return (
    <div className="flex items-center flex-col gap-6">
      <div className="font-semibold text-4xl text-center">
        Transform Education with <span className="text-transparent bg-clip-text bg-gradient-primary">AI</span>
      </div>
      <div className="text-center">
        KidX AI offers end-to-end AI solutions tailored to the unique needs of educational institutions. From enhancing learning experiences to automating administrative tasks, our AI solutions are designed to supercharge education.
      </div>
      <div className="flex gap-2 flex-col">
        <div className="font-semibold text-2xl text-center sticky top-20 mb-4">
          End-to-End Service
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
