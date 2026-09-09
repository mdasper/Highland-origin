import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import aboutImg from '../assets/images/about.jpg'
import sustainabilityFarmImg from '../assets/images/green_beans.jpg'

export default function SustainabilityPage() {
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
          <img src={aboutImg} alt="Sustainability at Highland Origin" />
        </div>
        <div className="page-hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1>Sustainability</h1>
          <p>Growing coffee responsibly, preserving our planet for generations to come.</p>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="sustainability-intro">
        <div className="container">
          <div className="sustainability-grid">
            <ScrollReveal direction="left">
              <div className="sustainability-image">
                <img src={sustainabilityFarmImg} alt="Sustainable organic green coffee beans" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <div className="section-label">Our Commitment</div>
                <h2 className="section-title">Coffee That Cares for the Earth</h2>
                <p className="about-text">
                  At High Land Origin, sustainability isn't a marketing buzzword — it's the
                  foundation of everything we do. We believe that the finest coffee can only come
                  from healthy ecosystems and thriving farming communities. That's why we invest
                  deeply in practices that protect biodiversity, conserve water, enrich soil
                  health, and improve farmer livelihoods.
                </p>
                <p className="about-text">
                  Our sustainability program spans the entire supply chain — from providing
                  shade-tree saplings and organic compost to our farmer partners, to implementing
                  energy-efficient processing at our mills, to reducing packaging waste in our
                  export operations. We measure, report, and continuously improve our
                  environmental footprint.
                </p>
                <p className="about-text">
                  When you partner with Highland Origin, you're not just sourcing exceptional
                  coffee — you're supporting a movement toward a more equitable, environmentally
                  conscious coffee industry.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="sustainability-practices">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div className="section-label" style={{ justifyContent: 'center', color: '#C5A24D' }}>How We Do It</div>
              <h2 style={{ color: '#fff' }}>Our Sustainable Practices</h2>
            </div>
          </ScrollReveal>
          <div className="practices-grid">
            {[
              { icon: '🌳', title: 'Shade-Grown Coffee', desc: 'We promote shade-grown cultivation under native forest canopy, preserving biodiversity habitats for birds, pollinators, and wildlife while producing naturally richer, more complex beans.' },
              { icon: '💧', title: 'Water Conservation', desc: 'Our processing facilities employ closed-loop water recycling systems, reducing freshwater consumption by 60%. We also train farmers in eco-pulping techniques that minimize water usage at farm level.' },
              { icon: '🌱', title: 'Organic & Natural Methods', desc: 'We support organic farming practices using vermicompost, bio-fertilizers, and integrated pest management. Our certified organic lots meet the strictest EU and USDA standards.' },
              { icon: '👨‍🌾', title: 'Farmer Empowerment', desc: 'Fair premiums, advance financing, and technical training programs help our 2,000+ farmer partners improve yields, quality, and income stability across generations.' },
              { icon: '♻️', title: 'Waste-to-Value', desc: 'Coffee cherry pulp and parchment husk — traditionally waste products — are converted into organic compost and biomass fuel at our processing facility, creating a circular economy.' },
              { icon: '📈', title: 'Continuous Improvement', desc: 'We track key sustainability metrics annually — carbon footprint, water usage, farmer income growth, and biodiversity indices — publishing transparent reports for our partners.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="practice-card">
                  <div className="practice-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Verified Standards</div>
              <h2>Certifications We Hold</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="cert-grid">
              {[
                { icon: '🌿', name: 'Organic Certified' },
                { icon: '🌍', name: 'Rainforest Alliance' },
                { icon: '🤝', name: 'Fair Trade' },
                { icon: '🏅', name: 'UTZ Certified' },
                { icon: '📋', name: 'ISO 14001 Environment' },
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
            <h2>Partner with Purpose</h2>
            <p>Join us in building a sustainable future for Indian coffee.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
              <Link to="/products" className="btn btn-white">Explore Our Coffee</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
