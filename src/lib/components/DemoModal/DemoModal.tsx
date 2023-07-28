'use client'

import { useEffect } from 'react'
import './DemoModal.css'
import { motion } from 'framer-motion'

interface DemoModalProps {
  isOpen: boolean,
  handleClose: () => void
}

const srcs = ['/IMG_7713.PNG', '/IMG_7714.PNG', '/IMG_7715.PNG', '/IMG_7716.PNG', '/IMG_7717.PNG']

export default function DemoModal(props: DemoModalProps) {
  useEffect(() => {
    document.addEventListener("keydown", event => {
      if (event.key == "Escape") {
        props.handleClose()
      }
    })
  }, [props])

  return (
    <motion.div
      className={'dm' + (props.isOpen ? '' : ' closed')}
      onClick={props.handleClose}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}

    >
      <div className='dm-body' onClick={(e) => e.stopPropagation()}>
        Demo of Guest Communication Chatbot in Whatsapp
        <div className='dm-images'>
          {srcs.map(value => <img src={value} width="350px" />)}
        </div>
      </div>
    </motion.div>
  )
}