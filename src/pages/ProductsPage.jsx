import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import arabicaImg from '../assets/images/arabica.jpg'
import robustaImg from '../assets/images/robusta.jpg'
import greenBeansImg from '../assets/images/green_beans.jpg'
import monsoonedImg from '../assets/images/monsooned.jpg'
import specialtyImg from '../assets/images/specialty.jpg'
import estateHarvestImg from '../assets/images/farmer.jpg'

const allProducts = [
  {
    id: 1, category: 'arabica', badge: 'Premium',
    title: 'Arabica Plantation A', origin: 'Chikmagalur, Karnataka',
    desc: 'Clean cup with medium body, bright acidity, and notes of milk chocolate, citrus, and caramel. Ideal for filter brewing and single-origin roasts.',
    image: arabicaImg,
    specs: { altitude: '900–1,400m', process: 'Washed', screen: '17/18', moisture: '10–12%' },
  },
  {
    id: 2, category: 'arabica', badge: 'Specialty',
    title: 'Arabica Plantation PB', origin: 'Bababudangiris',
    desc: 'Peaberry selection with concentrated flavors — sweet, complex, with wine-like acidity and a lingering finish of dark berries and spice.',
    image: greenBeansImg,
    specs: { altitude: '1,000–1,500m', process: 'Washed', screen: 'PB', moisture: '10–11%' },
  },
  {
    id: 3, category: 'robusta', badge: 'Best Seller',
    title: 'Robusta Cherry AB', origin: 'Coorg & Wayanad',
    desc: 'Full-bodied with excellent crema potential. Strong, earthy flavor with notes of dark chocolate and woody undertones — the backbone of great espresso blends.',
    image: robustaImg,
    specs: { altitude: '600–900m', process: 'Natural', screen: 'AB', moisture: '11–12%' },
  },
  {
    id: 4, category: 'robusta',
    title: 'Robusta Parchment AB', origin: 'Kerala & Karnataka',
    desc: 'Washed Robusta offering a cleaner profile with reduced bitterness and smooth body. Excellent for blending with Arabica for balanced espresso.',
    image: greenBeansImg,
    specs: { altitude: '600–800m', process: 'Washed', screen: 'AB', moisture: '10–12%' },
  },
  {
    id: 5, category: 'monsooned', badge: 'Signature',
    title: 'Monsooned Malabar AA', origin: 'Malabar Coast, Mangalore',
    desc: 'India\'s legendary specialty — beans exposed to monsoon winds for 12–16 weeks in open warehouses. Produces an intensely mellow, low-acid cup with a golden hue and notes of spice, tobacco, and earth.',
    image: monsoonedImg,
    specs: { altitude: 'Coastal', process: 'Monsooned', screen: 'AA', moisture: '12–14%' },
  },
  {
    id: 6, category: 'specialty', badge: 'Micro-lot',
    title: 'Single Estate Selection', origin: 'Nilgiris, Tamil Nadu',
    desc: 'Micro-lot coffees from select estates, scored 82+ by certified Q-graders. Each lot showcases unique terroir characteristics — floral, fruity, and exceptionally complex.',
    image: specialtyImg,
    specs: { altitude: '1,200–1,800m', process: 'Honey / Natural', screen: '16+', moisture: '10–11%' },
  },
]

const categories = [
  { key: 'all', label: 'All Coffee' },
  { key: 'arabica', label: 'Arabica' },
  { key: 'robusta', label: 'Robusta' },
  { key: 'monsooned', label: 'Monsooned' },
  { key: 'specialty', label: 'Specialty' },
]

export default function ProductsPage() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? allProducts : allProducts.filter(p => p.category === active)

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
          <img src={estateHarvestImg} alt="Our Premium Coffee Products" />
        </div>
        <div className="page-hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1>Our Coffee</h1>
          <p>Premium green coffee beans, sourced from India's finest highland estates.</p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="products-full">
        <div className="container">
          <ScrollReveal>
            <div className="products-filter">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  className={`filter-btn ${active === cat.key ? 'active' : ''}`}
                  onClick={() => setActive(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="products-full-grid">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.1}>
                <div className="product-full-card">
                  <div className="product-full-image">
                    <img src={p.image} alt={p.title} />
                    {p.badge && <span className="product-full-badge">{p.badge}</span>}
                  </div>
                  <div className="product-full-body">
                    <h3>{p.title}</h3>
                    <div className="product-full-origin">{p.origin}</div>
                    <p>{p.desc}</p>
                    <div className="product-specs">
                      <div className="product-spec">
                        <span className="product-spec-label">Altitude</span>
                        <span className="product-spec-value">{p.specs.altitude}</span>
                      </div>
                      <div className="product-spec">
                        <span className="product-spec-label">Process</span>
                        <span className="product-spec-value">{p.specs.process}</span>
                      </div>
                      <div className="product-spec">
                        <span className="product-spec-label">Screen Size</span>
                        <span className="product-spec-value">{p.specs.screen}</span>
                      </div>
                      <div className="product-spec">
                        <span className="product-spec-label">Moisture</span>
                        <span className="product-spec-value">{p.specs.moisture}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Grading Info */}
      <section className="process">
        <div className="container">
          <ScrollReveal>
            <div className="process-header">
              <div className="section-label" style={{ justifyContent: 'center' }}>Quality Standards</div>
              <h2>Our Grading Process</h2>
              <p className="section-subtitle">Every lot is evaluated through a rigorous multi-step quality assurance protocol.</p>
            </div>
          </ScrollReveal>
          <div className="why-grid">
            {[
              { icon: '🔬', title: 'Physical Analysis', desc: 'Screen size distribution, moisture content measurement, defect count per 300g sample, and color assessment using industry-standard equipment.' },
              { icon: '☕', title: 'Cupping Evaluation', desc: 'SCA protocol cupping by certified Q-graders evaluating fragrance, aroma, flavor, aftertaste, acidity, body, balance, uniformity, and overall score.' },
              { icon: '📊', title: 'Lot Documentation', desc: 'Complete traceability documentation including origin region, estate name, altitude, varietal, processing method, harvest date, and storage conditions.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="why-card">
                  <div className="why-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <h2>Need a Custom Blend or Specific Grade?</h2>
            <p>We offer tailored solutions to match your exact specifications.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Samples</Link>
              <Link to="/contact" className="btn btn-white">Get Custom Quote</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
