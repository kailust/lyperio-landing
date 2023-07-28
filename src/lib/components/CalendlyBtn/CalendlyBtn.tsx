'use client'

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

interface CalendlyBtnProps {
  className: string,
  text: string
}

export default function CalendlyBtn(props: CalendlyBtnProps) {
  const [element, setElement] = useState<HTMLElement | null>(null)

  let elem: null | HTMLElement = null
  useEffect(() => {
    setElement(document.getElementsByTagName("body").item(0))
  }, [props])

  return (
    <PopupButton
        className={props.className}
        rootElement={element as HTMLElement}
        text={props.text}
        url='https://calendly.com/lyperio/discovery-call'
      />
  )
}