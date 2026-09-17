import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { productCategories } from './ProductsPage'

export default function CategoryPage() {
  const { categoryId } = useParams()
  
  const category = productCategories.find(c => c.id === categoryId)

  if (!category) {
    return (
      <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2>Category Not Found</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Products</Link>
      </div>
    )
  }

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
          <img src={category.image} alt={category.title} />
        </div>
        <div className="page-hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div style={{ marginBottom: '20px' }}>
            <Link to="/products" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold' }}>
              ← Back to All Coffee
            </Link>
          </div>
          <h1>{category.title}</h1>
          <p>Explore our premium grades and sub-categories.</p>
        </motion.div>
      </section>

      {/* Sub Products Grid - Centered Flexbox */}
      <section className="products-full">
        <div className="container">
          <div className="sub-products-flex-grid">
            {category.subProducts.map((sub, i) => (
              <ScrollReveal key={sub.title} delay={i * 0.1}>
                <div className="product-full-card">
                  <div className="product-full-image">
                    <img src={sub.image} alt={sub.title} />
                  </div>
                  <div className="product-full-body">
                    <h3>{sub.title}</h3>
                    <p style={{ marginTop: '10px' }}>{sub.desc}</p>
                    <div className="product-card-link" style={{ marginTop: '20px' }}>
                      <Link to="/contact" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold' }}>
                        Inquire About {sub.title} <span className="arrow">→</span>
                      </Link>
                    </div>
                  </div>
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
            <h2>Ready to Order?</h2>
            <p>Contact us to request a quote or order samples for cupping.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Samples</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
