import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

// Images
import heroImg from '../assets/images/export_hero_1789670415845.jpg'
import warehouseImg from '../assets/images/arabica_bulk_1789669005693.jpg'
import customPackingImg from '../assets/images/custom_packing.jpg'

export default function CoffeeExportPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="export-page"
    >
      {/* Page Hero */}
      <section className="page-hero" style={{ height: '70vh' }}>
        <div className="page-hero-bg">
          <img src={heroImg} alt="Ocean freighter at sunrise" />
        </div>
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(to right, rgba(10, 15, 10, 0.9), rgba(10, 15, 10, 0.4))' }} />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto 0 5%' }}
        >
          <div className="section-label" style={{ marginBottom: '15px', color: 'var(--accent)' }}>Global Distribution Network</div>
          <h1 style={{ fontSize: '4rem', lineHeight: '1.1' }}>Seamless Global Coffee Export</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '20px', maxWidth: '600px' }}>
            Delivering the finest Western Ghats green coffee to discerning roasters worldwide. Uncompromising quality, meticulous logistics, and absolute reliability.
          </p>
        </motion.div>
      </section>

      {/* Logistics Split Section */}
      <section className="export-split" style={{ padding: '100px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="export-grid-2">
            
            <ScrollReveal direction="left">
              <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <img src={warehouseImg} alt="Coffee export warehouse" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="section-label">Logistics Excellence</div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '25px', color: 'var(--primary-dark)' }}>
                  Your Trusted Global Export Partner
                </h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text)' }}>
                  We specialize in the export of premium Green Coffee and Roasted Coffee beans, committed to delivering the finest Indian coffee to global markets with unmatched reliability and dedication. Our export division is anchored by a team of experienced, professionally qualified personnel dedicated to handling customized orders and executing complex logistics with absolute precision.
                </p>
                <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: 'var(--text)' }}>
                  From meticulous planning to meeting exact client specifications, we ensure every shipment is completed safely and delivered well ahead of deadlines across multiple transport modalities.
                </p>
                
                <div className="export-grid-3">
                  <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '15px' }}>
                    <h4 style={{ color: 'var(--primary-dark)', marginBottom: '5px' }}>🚢 Sea Freight</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text)' }}>Via Mangalore, Cochin & Chennai Ports</span>
                  </div>
                  <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '15px' }}>
                    <h4 style={{ color: 'var(--primary-dark)', marginBottom: '5px' }}>✈️ Air Freight</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text)' }}>Expedited transit for premium micro-lots</span>
                  </div>
                  <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '15px' }}>
                    <h4 style={{ color: 'var(--primary-dark)', marginBottom: '5px' }}>🚛 Road Transport</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text)' }}>Seamless domestic and regional delivery</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Packaging Split Section */}
      <section className="export-split" style={{ padding: '100px 0', background: 'var(--primary-darkest)' }}>
        <div className="container">
          <div className="export-grid-2">
            
            <ScrollReveal direction="left">
              <div>
                <div className="section-label">Tailored Solutions</div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '25px', color: 'var(--cream)' }}>
                  Customized Packing & Protection
                </h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: 'var(--text-muted)' }}>
                  We provide tailored, export-grade packaging solutions designed to preserve the freshness, moisture content, and delicate flavor profiles of our green coffee beans during long ocean transits.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h4 style={{ color: 'var(--accent)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.5rem' }}>🌿</span> Eco-Friendly Jute Bags
                    </h4>
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>Natural, sustainable, and highly breathable. Our premium jute bags strictly meet international export criteria, ensuring optimal airflow and preserving bean quality.</p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h4 style={{ color: 'var(--accent)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.5rem' }}>📦</span> Packing Configurations
                    </h4>
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>We accommodate diverse buyer requirements by offering standard <strong>59 KG Jute Bags</strong> as well as <strong>25 KG Bulk Packs</strong>.</p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h4 style={{ color: 'var(--accent)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.5rem' }}>🚢</span> Container Loading
                    </h4>
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>Our logistical expertise ensures maximum efficiency. We expertly load up to <strong>19 Metric Tons (MT)</strong> in a standard 20-foot shipping container.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                <img src={customPackingImg} alt="Premium Jute Bag Packing" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                  <h3 style={{ color: '#fff', margin: 0, fontSize: '1.5rem' }}>Export Ready Packaging</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '5px', fontSize: '0.9rem' }}>Every consignment is meticulously packed and sealed for international transit.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Source Premium Indian Coffee?</h2>
            <p>Our export team is ready to assist you with custom orders, shipping logistics, and competitive quotes.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Export Division</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
