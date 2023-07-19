import Toolbar from '@/components/Toolbar/Toolbar'
import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import AboutUs from '@/components/AboutUs/AboutUs'
import ContactUs from '@/components/ContactUs/ContactUs'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Toolbar />
      <Hero />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />

      <div>
        <div className={styles.blur1} />
        <div className={styles.blur2} />
      </div>
    </main>
  )
}
