'use client'

import { Card, CardBody } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import Image from "next/image";
import dashboard from "../../../public/dashborad.png"

const benefits: { title: string, description: string }[] = [
  {
    title: '24/7 Learning Support',
    description: 'KidX AI provides round-the-clock assistance for children, ensuring continuous learning opportunities.'
  },
  {
    title: 'Interactive Lessons',
    description: 'With KidX AI, children can engage in interactive lessons, making learning fun and engaging.'
  },
  {
    title: 'Voice AI Assistance',
    description: 'KidX AI utilizes voice AI technology to provide personalized assistance and support for children.'
  },
  {
    title: 'Adaptive Learning',
    description: 'KidX AI adapts to the learning pace and preferences of each child, providing a tailored educational experience.'
  },
  {
    title: 'No Errors',
    description: 'KidX AI solutions undergo rigorous testing to ensure error-free performance, providing reliable support for children.'
  },
  {
    title: 'Continuous Improvement',
    description: 'KidX AI continuously enhances its educational offerings based on feedback and evolving learning needs.'
  },
  {
    title: 'Child-Friendly Interaction',
    description: 'KidX AI mimics human interaction in a child-friendly manner, fostering a comfortable learning environment for children.'
  },
  {
    title: 'Seamless Transition to Human Assistance',
    description: 'KidX AI allows for a smooth transition to human assistance whenever needed, ensuring children receive the support they require.'
  },
]

export default function Benefits() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="flex items-center flex-col gap-6">
      <div className="font-semibold text-4xl text-center">
        Benefits of Implementing <span className="text-transparent bg-clip-text bg-gradient-primary">
          KidX AI Education with Us
        </span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {benefits.map((ben, idx) => (
          <Card key={idx} shadow="sm" className="min-w-[160px] md:min-w-[260px] w-min flex-1">
            <CardBody className="flex flex-col items-center">
              <div className="font-semibold text-center mb-1">
                {ben.title}
              </div>
              <div className="text-center text-sm">
                {ben.description}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <Button onPress={onOpen} className="border-black" variant="bordered" radius="sm" size="md">
        See example dashboard
      </Button>
      <Modal placement="center" shouldBlockScroll size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <Image
            src={dashboard}
            alt="dashboard-example"
          />
        </ModalContent>
      </Modal>
    </div>
  )
}
