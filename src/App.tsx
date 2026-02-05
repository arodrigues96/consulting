import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import ScrollIndicator from './components/ScrollIndicator'
import Hero from './sections/Hero'
import Consultants from './sections/Consultants'
import Certifications from './sections/Certifications'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <ScrollIndicator />
        <Consultants />
        <Certifications />
        <Skills />
        <Projects />
        <Clients />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
