

import FAQContent from '../components/FAQContent';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Introduction from '../components/Introduction';
import Judging from '../components/Judging';
import Timeline from '../components/Timeline';
import MobileTimeline from '../components/MobileTimeline';
import Rules from '../components/Rules';
import Prize from '../components/Prize';
import Partners from '../components/Partners';
import Privacy from '../components/Privacy';
import Footer from '../components/Footer';

function HomePage() {

  return (
    <>
      <main className='overflow-x-hidden'>

    <Header />
   
    <HeroSection />
    <Introduction />
    <Rules />
    <Judging />
    <FAQContent />
    <Timeline />
    <MobileTimeline />
    <Prize />
    <Partners />
        <Privacy />
        <Footer />
      </main>
    </>
  )
}

export default HomePage
