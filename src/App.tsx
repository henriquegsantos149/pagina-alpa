import BlackFridayNotice from './components/BlackFridayNotice';
import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemObjective from './components/ProblemObjective'
import Curriculum from './components/Curriculum'
import SkillsResults from './components/SkillsResults'
import PracticalApplications from './components/PracticalApplications'
import TargetAudience from './components/TargetAudience'
import Faculty from './components/Faculty'
import CourseInfo from './components/CourseInfo'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import StickyCTA from './components/StickyCTA'
import LeadModal from './components/LeadModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState('');

  const handleOpenModal = (url: string) => {
    setCheckoutUrl(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="w-full min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-secondary selection:bg-[var(--color-brand-primary)] selection:text-[var(--color-brand-dark)]">
      <BlackFridayNotice />
      <Header />
      <Hero onOpenModal={handleOpenModal} />
      <ProblemObjective />
      <Curriculum />
      <SkillsResults />
      <PracticalApplications />
      <TargetAudience />
      <Faculty />
      <CourseInfo />
      <Pricing onOpenModal={handleOpenModal} />
      <Testimonials />
      <FAQ />
      <CallToAction onOpenModal={handleOpenModal} />
      
      <StickyCTA onOpenModal={handleOpenModal} />

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        checkoutUrl={checkoutUrl} 
      />
      
      <footer className="bg-black/60 border-t border-white/5 py-10 text-center text-[var(--color-brand-light)]/40 text-sm">
        <div className="flex justify-center mb-6">
          <img src="/logo-ambientalpro.webp" alt="Ambiental Pro" className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity" />
        </div>
        <p className="font-secondary tracking-widest uppercase">© {new Date().getFullYear()} Pós-Graduação em Auditoria, Licenciamento e Perícia Ambiental. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default App
