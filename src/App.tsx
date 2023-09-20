


// import img3 from './assets/bg.png'

import './App.css'
import FAQContent from './components/FAQContent';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Introduction from './components/Introduction';
import Judging from './components/Judging';
import Timeline from './components/Timeline';
import MobileTimeline from './components/MobileTimeline';
import Rules from './components/Rules';
import Prize from './components/Prize';
import Partners from './components/Partners';

function App() {

  return (
    <>
      <main className=''>

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
      </main>
    </>
  )
}

export default App
