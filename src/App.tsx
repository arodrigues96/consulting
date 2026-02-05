import Hero from './sections/Hero'
import Consultants from './sections/Consultants'
import Certifications from './sections/Certifications'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Consultants />
      <Certifications />
      <Skills />
      <Projects />
      <Clients />
      <Footer />
    </div>
  )
}

export default App
