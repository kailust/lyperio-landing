import Image from 'next/image'
import logo from '../../../public/logo.svg'

export default function AboutUs() {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-4 my-2'>
      <div className='flex flex-col justify-center items-center gap-5 mx-4 md:mx-10'>
        <p className='text-3xl font-semibold text-center w-max'>About Us</p>
        <Image
          src={logo}
          alt='lyperio-logo'
          width={120}
          height={40}
        />
      </div>
      <div className='leading-6'>
        <p className='mb-2'>
          Lyperio, founded in 2023 by a passionate software developer, is on a mission to
          solve challenges in the short term rental industry through AI automation. Leveraging
          expertise in no-code, low-code, and custom-coded solutions, we develop robust automation
          tools, imitating human behavior to unlock efficiency.
        </p>
        <p>
          As a small yet dedicated team, we drive innovation and help clients thrive in the
          dynamic world of real estate. Our unique approach blends various automation techniques,
          creating stable, complex solutions using AI algorithms, empowering clients to overcome
          obstacles and achieve success.
        </p>
      </div>
    </div>
  )
}