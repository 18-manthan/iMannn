import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import CareersPage from './pages/CareersPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PageTransition from './components/PageTransition'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark overflow-x-hidden">
        <Navigation />
        <PageTransition isLoading={isLoading}>
          <Routes>
            <Route path="/" element={<HomePage setIsLoading={setIsLoading} />} />
            <Route path="/services" element={<ServicesPage setIsLoading={setIsLoading} />} />
            <Route path="/portfolio" element={<PortfolioPage setIsLoading={setIsLoading} />} />
            <Route path="/careers" element={<CareersPage setIsLoading={setIsLoading} />} />
            <Route path="/about" element={<AboutPage setIsLoading={setIsLoading} />} />
            <Route path="/contact" element={<ContactPage setIsLoading={setIsLoading} />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  )
}

export default App
