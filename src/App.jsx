import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import LoadingScreen from './components/LoadingScreen'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import SustainabilityPage from './pages/SustainabilityPage'
import InfrastructurePage from './pages/InfrastructurePage'
import ContactPage from './pages/ContactPage'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="welcome-screen" />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/sustainability" element={<SustainabilityPage />} />
                <Route path="/infrastructure" element={<InfrastructurePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
            <Footer />
            <FloatingWhatsApp />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
