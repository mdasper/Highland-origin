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
          <img src={estateHarvestImg} alt="About High Land Origin" />
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
                  High Land Origin Private Limited was founded with a clear, ambitious mission:
                  to bring the purest, highest-grade green coffee beans from India's lush highlands
                  directly to specialty roasters and international buyers worldwide.
                </p>
                <p className="about-text">
                  Our name reflects our identity — we source exclusively from highland regions
                  where altitude, rich volcanic soils, and ideal rainfall create exceptional coffee
                  profiles. From Chikmagalur and Coorg to Wayanad and the Nilgiris, we work closely
                  with dedicated estate growers to handpick premium lots that meet global export standards.
                </p>
                <p className="about-text">
                  Every consignment we prepare is backed by stringent quality testing, Q-grading
                  benchmarks, and transparent farm-to-port traceability — ensuring roasters receive
                  fresh, defect-free green beans with outstanding cup profiles.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="about-full-grid">
            <ScrollReveal direction="left">
              <div>
                <div className="section-label">Our Approach</div>
                <h2 className="section-title">Farm-First Philosophy</h2>
                <p className="about-text">
                  We believe the best coffee starts at the farm. That's why we maintain direct
                  relationships with over 2,000 farmer partners across the Western Ghats. Our
                  agronomy team regularly visits estates, providing guidance on sustainable
                  farming practices, optimal harvest timing, and post-harvest processing
                  techniques.
                </p>
                <p className="about-text">
                  This farm-first approach doesn't just ensure quality — it builds trust and
                  livelihood security for the communities that grow our coffee. We pay fair
                  premiums, offer advance financing during planting seasons, and invest in
                  community development programs that uplift the next generation of coffee growers.
                </p>
                <p className="about-text">
                  For our buyers, this translates into complete traceability, lot-specific
                  documentation, and the confidence that every shipment meets both quality
                  standards and ethical sourcing criteria.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="about-full-image">
                <img src={farmerImg} alt="Coffee farmer in plantation" />
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
                  To be recognized globally as India's most trusted and preferred green coffee
                  export partner — known for uncompromising quality, ethical sourcing, and the
                  ability to connect the world's finest roasters with the exceptional coffees
                  grown in India's highland regions.
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

      {/* Certifications */}
      <section className="certifications">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Trust & Compliance</div>
              <h2>Certifications & Standards</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="cert-grid">
              {[
                { icon: '🏅', name: 'ISO 22000' },
                { icon: '🌿', name: 'Organic Certified' },
                { icon: '🛡️', name: 'FSSAI Licensed' },
                { icon: '🌍', name: 'Rainforest Alliance' },
                { icon: '☕', name: 'Q-Grade Certified' },
                { icon: '📋', name: 'APEDA Registered' },
              ].map(cert => (
                <div key={cert.name} className="cert-item">
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-name">{cert.name}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
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
