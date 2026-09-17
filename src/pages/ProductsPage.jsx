import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

// Main Images
import arabicaImg from '../assets/images/arabica.jpg'
import robustaImg from '../assets/images/robusta.jpg'
import specialtyImg from '../assets/images/specialty.jpg'
import estateHarvestImg from '../assets/images/farmer.jpg'

// Sub-Product Images
import arabica_aaa from '../assets/images/arabica_aaa_1789668939338.jpg'
import arabica_aa from '../assets/images/arabica_aa_1789668951811.jpg'
import arabica_a from '../assets/images/arabica_a_1789668978286.jpg'
import arabica_pb from '../assets/images/arabica_pb_1789668993295.jpg'
import arabica_bulk from '../assets/images/arabica_bulk_1789669005693.jpg'

import robusta_aaa from '../assets/images/robusta_aaa_1789669046273.jpg'
import robusta_aa from '../assets/images/robusta_aa_1789669062571.jpg'
import robusta_a from '../assets/images/robusta_a_1789669074245.jpg'
import robusta_pb from '../assets/images/robusta_pb_1789669087404.jpg'
import robusta_bulk from '../assets/images/robusta_bulk_1789669100162.jpg'

import specialty_single from '../assets/images/specialty_single_1789669111835.jpg'
import specialty_high from '../assets/images/specialty_high_1789669123915.jpg'

export const productCategories = [
  {
    id: 'arabica',
    title: 'Arabica Plantation',
    image: arabicaImg,
    subProducts: [
      { title: 'AAA', desc: 'Superior quality Arabica beans with excellent size and uniform color.', image: arabica_aaa },
      { title: 'AA', desc: 'Premium grade Arabica known for its clean cup and balanced flavor.', image: arabica_aa },
      { title: 'A', desc: 'High-quality Arabica beans, perfect for single-origin roasting.', image: arabica_a },
      { title: 'PB', desc: 'Peaberry Arabica offering concentrated flavors and wine-like acidity.', image: arabica_pb },
      { title: 'BULK', desc: 'Bulk Arabica beans ideal for commercial blends and large-scale roasting.', image: arabica_bulk },
    ]
  },
  {
    id: 'robusta',
    title: 'Robusta Parchment',
    image: robustaImg,
    subProducts: [
      { title: 'AAA', desc: 'Top-tier washed Robusta with exceptional size and clean profile.', image: robusta_aaa },
      { title: 'AA', desc: 'Premium Robusta parchment, offering a smooth body and reduced bitterness.', image: robusta_aa },
      { title: 'A', desc: 'Standard high-grade Robusta, excellent for espresso blends.', image: robusta_a },
      { title: 'PB', desc: 'Robusta Peaberry with intense, bold characteristics and heavy crema.', image: robusta_pb },
      { title: 'BULK', desc: 'Bulk Robusta beans for strong, high-yield commercial coffee production.', image: robusta_bulk },
    ]
  },
  {
    id: 'specialty',
    title: 'Speciality Beans',
    image: specialtyImg,
    subProducts: [
      { title: 'Single Origin', desc: 'Micro-lot coffees from select estates showcasing unique terroir characteristics.', image: specialty_single },
      { title: 'High Grown', desc: 'Beans cultivated at extreme altitudes for denser structure and complex flavor profiles.', image: specialty_high },
    ]
  }
]

export default function ProductsPage() {
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

      {/* Main Categories Grid */}
      <section className="products-full">
        <div className="container">
          <div className="products-full-grid">
            {productCategories.map((category, i) => (
              <ScrollReveal key={category.id} delay={i * 0.1}>
                <Link to={`/products/${category.id}`} className="product-full-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="product-full-image">
                    <img src={category.image} alt={category.title} />
                  </div>
                  <div className="product-full-body">
                    <h3>{category.title}</h3>
                    <p style={{ marginTop: '10px' }}>Explore our range of premium {category.title} beans, carefully sourced and graded for global export.</p>
                    <div className="product-card-link" style={{ marginTop: '20px', color: 'var(--accent)', fontWeight: 'bold' }}>
                      <span>View Grades & Sub-categories</span>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </Link>
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
          <div className="process-grid">
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
