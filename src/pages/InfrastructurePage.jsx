import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import facilityImg from '../assets/images/facility.jpg'
import qualityLabImg from '../assets/images/quality_lab.jpg'
import warehouseImg from '../assets/images/warehouse.jpg'

export default function InfrastructurePage() {
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
          <img src={facilityImg} alt="Highland Origin Infrastructure" />
        </div>
        <div className="page-hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1>Infrastructure</h1>
          <p>World-class facilities powering premium coffee exports.</p>
        </motion.div>
      </section>

      {/* Processing Mill */}
      <section className="infra-section">
        <div className="container">
          <div className="infra-grid">
            <ScrollReveal direction="left">
              <div className="infra-image">
                <img src={facilityImg} alt="Coffee processing mill" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <div className="section-label">Processing Excellence</div>
                <h2 className="section-title">State-of-the-Art Milling Facility</h2>
                <p className="about-text">
                  Our centralized processing facility is equipped with advanced milling technology
                  that handles both washed and unwashed coffees with precision. Fully automated
                  processing lines ensure consistent quality output while maintaining the
                  distinct characteristics of each coffee lot.
                </p>
                <div className="infra-features">
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>Dual processing lines — 4 MT/hour (washed) and 10 MT/hour (unwashed)</p>
                  </div>
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>Advanced gravity separators, destoners, and electronic color sorters</p>
                  </div>
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>Controlled atmosphere storage with temperature and humidity monitoring</p>
                  </div>
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>ISO 22000 certified food safety management systems</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality Lab */}
      <section className="infra-section" style={{ background: 'var(--cream-dark)' }}>
        <div className="container">
          <div className="infra-grid" style={{ direction: 'rtl' }}>
            <ScrollReveal direction="right">
              <div style={{ direction: 'ltr' }}>
                <div className="section-label">Quality Assurance</div>
                <h2 className="section-title">In-House Quality Laboratory</h2>
                <p className="about-text">
                  Quality is monitored at every stage — from green bean intake to final shipment.
                  Our in-house lab is equipped for comprehensive physical and sensory analysis,
                  ensuring every lot meets both our internal benchmarks and international
                  export standards.
                </p>
                <div className="infra-features">
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>Professional SCA-standard cupping room with natural lighting</p>
                  </div>
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>Moisture meters, water activity analyzers, and screen graders</p>
                  </div>
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>Certified Q-graders performing daily cupping evaluations</p>
                  </div>
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>Pre-shipment sample approval process with digital lot tracking</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="infra-image" style={{ direction: 'ltr' }}>
                <img src={qualityLabImg} alt="Quality testing lab" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Warehousing */}
      <section className="infra-section">
        <div className="container">
          <div className="infra-grid">
            <ScrollReveal direction="left">
              <div className="infra-image">
                <img src={warehouseImg} alt="Coffee export warehouse and logistics" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <div className="section-label">Storage & Logistics</div>
                <h2 className="section-title">Warehousing & Shipping</h2>
                <p className="about-text">
                  Our dedicated warehousing facility provides climate-controlled storage,
                  ensuring your green coffee maintains optimal moisture levels and peak freshness
                  from processing to shipment. Strategic proximity to major export ports enables
                  efficient container loading and reliable dispatch.
                </p>
                <div className="infra-features">
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>Climate-controlled lot-wise segregated storage</p>
                  </div>
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>Multiple export packing options — Jute, GrainPro hermetic liners, HDPE bags (5–60 kg)</p>
                  </div>
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>Bulk container stuffing capability — up to 10 containers per day</p>
                  </div>
                  <div className="infra-feature">
                    <div className="infra-feature-dot" />
                    <p>Complete export documentation, phytosanitary certification, and logistics management</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <h2>See Our Facility in Action</h2>
            <p>Schedule a virtual or in-person tour of our processing facility.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
              <Link to="/products" className="btn btn-white">View Products</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
