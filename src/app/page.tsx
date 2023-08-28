import AboutUs from './_sections/aboutus'
import Benefits from './_sections/benefits'
import ContactUs from './_sections/contactus'
import Faq from './_sections/faq'
import Footer from './_sections/footer'
import Hero from './_sections/hero'
import Nav from './_sections/nav'
import Service from './_sections/service'

export default function Home() {
  return (
    <div>
      <Nav />
      <main className='my-4 max-w-6xl mx-auto px-2 md:px-4 flex flex-col gap-6'>
        <Hero />
        <Benefits />
        <Service />
        <AboutUs />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}
