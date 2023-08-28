'use client'

import { Card, CardBody } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import Image from "next/image";
import dashboard from "../../../public/dashborad.png"

const benefits: { title: string, description: string }[] = [
  {
    title: '24/7 Availability',
    description: 'Cover three 8-hour shifts 7-days per week with one solution'
  },
  {
    title: 'Instant Reaction',
    description: 'Everything that has to be triggered triggers in seconds any time'
  },
  {
    title: 'Results Dashboard',
    description: 'Developed for your needs to keep track of how much we are helping you'
  },
  {
    title: 'Continuous improvement',
    description: 'We address any ideas on how to improve our solution as you use it'
  },
  {
    title: 'No Errors',
    description: 'Error-Free solutions after careful testing on development stage.'
  },
  {
    title: 'Continuous Learning',
    description: 'We continuously improve data used for AI based on usage'
  },
  {
    title: 'Imitate Human Behavior',
    description: 'Guests will not suspect that they are talking to AI'
  },
  {
    title: 'Seamless Switch to Human',
    description: 'When required, you can take conversation in your hands'
  },
]

export default function Benefits() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="flex items-center flex-col gap-6">
      <div className="font-semibold text-4xl text-center">
        Benefits of Implementing <span className="text-transparent bg-clip-text bg-gradient-primary">
          AI with Us
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
            alt="deashboard-example"
          />
        </ModalContent>
      </Modal>
    </div>
  )
}