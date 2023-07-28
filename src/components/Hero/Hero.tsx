'use client'

import Image from 'next/image'
import './Hero.css'
import CalendlyBtn from '@/lib/components/CalendlyBtn/CalendlyBtn'
import DemoModal from '@/lib/components/DemoModal/DemoModal'
import { useState } from 'react'
import { motion } from 'framer-motion';

export default function Hero() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <motion.div className='hero' id='home'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <p className='hero-title'>
        Unlock Your Rental Business's Potential with <span className='text-gradient'>AI Automation</span>
      </p>
      <p className='hero-subtitle'>
        Experience the power of automation for your short-term rental business. Save time and money by
        automating everything - from repetitive tasks and data synchronization to AI-driven Guest and
        Host communication.<br />Maximize productivity and focus on business growth.
      </p>
      <div className='hero-buttons'>
        <CalendlyBtn className='hero-btn-call' text='Book a Discovery Call' />
        <button className='hero-btn-demo' onClick={() => setIsOpen(true)}>
          <div className='hero-btn-demo-logo'>
            <Image
              src='/watch.svg'
              alt='watch-demo-icon'
              fill
            />
          </div>
          Watch a Demo
        </button>
      </div>
      <DemoModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </motion.div>
  )
}