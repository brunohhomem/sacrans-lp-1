import './App.css'
import { BandsSection } from './components/BandsSection'
import { DonationsSection } from './components/DonationsSection'
import { FinalCallSection } from './components/FinalCallSection'
import { HeroSection } from './components/HeroSection'
import { RevealsSection } from './components/RevealsSection'
import { SiteFooter } from './components/SiteFooter'

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-zinc-100">
      <HeroSection />
      <BandsSection />
      <DonationsSection />
      <RevealsSection />
      <FinalCallSection />
      <SiteFooter />
    </main>
  )
}

export default App
