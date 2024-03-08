import Image from 'next/image'
import logo from '../../../public/logo.svg'

export default function AboutUs() {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-4 my-2'>
      <div className='flex flex-col justify-center items-center gap-5 mx-4 md:mx-10'>
        <p className='text-3xl font-semibold text-center w-max'>About Us</p>
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt='KidX AI logo'
            width={120}
            height={40}
          />
          <p className="text-lg font-semibold">founded in 2021</p>
        </div>
      </div>
      <div className='leading-6'>
        <p className='mb-2'>
          KidX AI, founded in 2021 by a passionate team of developers, is dedicated to
          leveraging artificial intelligence to address challenges in various industries. Through
          innovative solutions and cutting-edge technology, we aim to revolutionize the way businesses
          operate and thrive in today's digital landscape.
        </p>
        <p>
          Our team combines expertise in machine learning, natural language processing, and data
          analytics to develop intelligent systems that empower organizations to make smarter
          decisions and achieve sustainable growth. With a focus on user-centric design and
          continuous improvement, KidX AI is committed to delivering value and driving innovation
          in the AI industry.
        </p>
      </div>
    </div>
  )
}
