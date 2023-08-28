'use client'

import { Button, ButtonProps } from "@nextui-org/button";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import { InlineWidget } from "react-calendly";

interface CalendlyBtnProps {
  children: React.ReactNode,
  classNames?: string,
  btnProps: ButtonProps
}

export default function CalendlyBtn(props: CalendlyBtnProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button {...props.btnProps} onPress={onOpen} className={props.classNames} >
        {props.children}
      </Button>
      <Modal placement="center" size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <InlineWidget url="https://calendly.com/lyperio/discovery-call"></InlineWidget>
        </ModalContent>
      </Modal>
    </>
  )
}