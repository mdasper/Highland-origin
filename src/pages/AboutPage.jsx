import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import farmerImg from '../assets/images/farmer.jpg'
import aboutImg from '../assets/images/about.jpg'
import estateHarvestImg from '../assets/images/green_beans.jpg'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src={estateHarvestImg} alt="About Highland Origin" />
        </div>
        <div className="page-hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1>Our Story</h1>
          <p>Rooted in heritage, driven by excellence, connecting Indian origin coffee to the world.</p>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="about-full">
        <div className="container">
          <div className="about-full-grid">
            <ScrollReveal direction="left">
              <div className="about-full-image">
                <img src={aboutImg} alt="Indian highland coffee plantation" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <div className="section-label">Who We Are</div>
                <h2 className="section-title">Built on Passion & Purity</h2>
                <p className="about-text">
                  Highland Origin Private Limited was founded with a clear and ambitious mission: to bring the finest green coffee beans from the majestic Western Ghats of India to specialty roasters and discerning buyers worldwide.
                </p>
                <p className="about-text">
                  Our name reflects our identity — rooted in the highland plantations of the Western Ghats, where mist-covered mountains, fertile soils, abundant rainfall, and unique microclimates come together to create exceptional coffee-growing conditions. From the renowned coffee estates of Chikmagalur, Coorg, and Wayanad to the scenic plantations of the Nilgiris and Kodaikanal Hills, we work closely with dedicated growers to source premium Arabica and Robusta coffee beans that embody the character of their origin.
                </p>
                <p className="about-text">
                  Every consignment we prepare reflects our commitment to quality, consistency, and traceability. Through careful sourcing, rigorous quality assessment, and transparent farm-to-port supply chains, we deliver export-ready green coffee beans that preserve the distinctive character of India's Western Ghats — from their rich aroma and balanced cup profiles to the unique terroir shaped by the mountains.
                </p>
                <p className="about-text">
                  At Highland Origin, we believe every coffee bean carries the story of its land, the dedication of its grower, and the natural richness of the Western Ghats. Our purpose is to connect that story with the world, one exceptional coffee lot at a time.
                </p>
              </div>
            </ScrollReveal>
          </div>


        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <ScrollReveal>
            <div className="section-label" style={{ justifyContent: 'center', color: '#C5A24D' }}>Our Purpose</div>
            <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '50px' }}>Vision & Mission</h2>
          </ScrollReveal>
          <div className="vm-grid">
            <ScrollReveal delay={0.1}>
              <div className="vm-card">
                <h3>Our Vision</h3>
                <p>
                  Our vision is to establish Highland Origin Private Limited as a successful merchant exporter and progressively expand into a manufacturing exporter with our own coffee processing and plantation operations. Through continuous investment in quality, technology, and sustainable agricultural practices, we aim to build a trusted global coffee brand that connects the rich heritage of India's Western Ghats with discerning buyers worldwide.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="vm-card">
                <h3>Our Mission</h3>
                <p>
                  To source, process, and export the highest quality Indian green coffee while
                  fostering sustainable livelihoods for farming communities. We are committed to
                  innovation in processing, excellence in quality control, and building long-term
                  partnerships that create value for every stakeholder in the coffee supply chain.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <h2>Want to Know More?</h2>
            <p>Get in touch with our team to learn about partnership opportunities.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/products" className="btn btn-white">View Products</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
