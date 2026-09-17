import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import heroImg from '../assets/images/about.jpg'
import aboutImg from '../assets/images/about.jpg'
import arabicaImg from '../assets/images/arabica.jpg'
import robustaImg from '../assets/images/robusta.jpg'
import monsoonedImg from '../assets/images/monsooned.jpg'
import specialtyImg from '../assets/images/specialty.jpg'
import facilityImg from '../assets/images/facility.jpg'
import qualityLabImg from '../assets/images/quality_lab.jpg'
import warehouseImg from '../assets/images/warehouse.jpg'
import plantationHillsImg from '../assets/images/sourcing.jpg'
import { productCategories } from './ProductsPage'

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          let start = 0
          const step = target / 60
          const timer = setInterval(() => {
            start += step
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 25)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

function Particles() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${3 + Math.random() * 5}px`,
    duration: `${8 + Math.random() * 15}s`,
    delay: `${Math.random() * 10}s`,
    opacity: 0.15 + Math.random() * 0.2,
  }))

  return (
    <div className="hero-particles">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}



const processSteps = [
  {
    num: '01',
    title: 'Sourcing & Procurement',
    subtitle: 'Direct Highland Estate Partnerships',
    desc: 'Our sourcing team works directly with estate farmers across Karnataka, Kerala, and Tamil Nadu, hand-selecting the finest single-origin lots at high altitudes during peak harvest.',
    image: plantationHillsImg,
    imageAlt: 'Highland coffee plantation sourcing in Western Ghats',
    highlights: ['900m–1500m Elevation', 'Direct Farmer Partnerships', '100% Traceable Lots'],
  },
  {
    num: '02',
    title: 'Processing & Milling',
    subtitle: 'Modern Wet & Dry Precision Milling',
    desc: 'State-of-the-art processing infrastructure with eco-pulpers, density separators, and advanced color sorters ensures uniform screen sizing, pristine hulling, and polishing.',
    image: facilityImg,
    imageAlt: 'Modern coffee processing mill',
    highlights: ['Washed & Natural Methods', 'Optical Color Sorting', 'Uniform Screen Sizing'],
  },
  {
    num: '03',
    title: 'Quality Grading & Cupping',
    subtitle: 'Certified Q-Grader Evaluation',
    desc: 'Every batch undergoes rigorous SCA cupping protocols, screen analysis, and moisture level optimization (10–12%) in our advanced quality testing lab before approval.',
    image: qualityLabImg,
    imageAlt: 'Coffee cupping laboratory testing',
    highlights: ['SCA Protocol Cupping', 'Moisture & Screen Analysis', 'Zero Defect Verification'],
  },
  {
    num: '04',
    title: 'Hermetic Packing & Export',
    subtitle: 'Preserved Freshness for Global Shipment',
    desc: 'Custom export packing in GrainPro hermetic liners and traditional jute sacks, complete phytosanitary certification, and rapid dispatch directly to major global export ports.',
    image: warehouseImg,
    imageAlt: 'Coffee export warehouse packaging',
    highlights: ['GrainPro Hermetic Liners', 'Phytosanitary Certified', 'Direct Port Dispatch'],
  },
]

const whyItems = [
  { icon: '◉', title: 'Competitive Global Pricing', desc: 'Our strategic sourcing network and efficient processing enable us to offer premium quality at globally competitive prices.' },
  { icon: '⬡', title: 'Timely & Reliable Delivery', desc: 'Proximity to major Indian ports ensures on-time shipments with real-time tracking and seamless documentation.' },
  { icon: '✦', title: 'Sustainable & Ethical', desc: 'Our farmer partnerships prioritize fair wages, shade-grown methods, and organic practices that protect both people and planet.' },
  { icon: '⬢', title: 'Custom Solutions', desc: 'From custom blends to specific screen sizes, moisture levels, and packing — we tailor every order to your exact specifications.' },
]

const testimonials = [
  { text: 'Highland Origin has been our go-to partner for Indian specialty coffees. Their consistency and quality control is exceptional — every shipment arrives exactly as promised.', name: 'Marcus Weber', role: 'Head of Procurement, Hamburg Roasters GmbH', initial: 'M' },
  { text: 'The Monsooned Malabar we source from Highland Origin is simply the best we have found. Our customers in Japan absolutely love the unique flavor profile.', name: 'Yuki Tanaka', role: 'Director, Tokyo Coffee Imports', initial: 'Y' },
  { text: 'Working with Highland Origin feels like a true partnership. They understand our needs, provide transparent pricing, and always deliver on time. Highly recommended.', name: 'Sarah Mitchell', role: 'Sourcing Manager, Melbourne Blend Co.', initial: 'S' },
]

const countries = [
  'Germany', 'Italy', 'Japan', 'South Korea', 'USA', 'UK', 'Australia',
  'UAE', 'Saudi Arabia', 'Turkey', 'Belgium', 'Russia', 'Sweden', 'Canada', 'France',
]

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(4px)' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img src={heroImg} alt="Highland coffee plantation" />
        </div>
        <div className="hero-overlay" />
        <Particles />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <h1>
            From the Misty Highlands
            <span className="gold">To the World's Finest Cups</span>
          </h1>
          <p className="hero-desc">
            Highland Origin Private Limited — India's trusted exporter of premium
            green coffee beans, sourcing exceptional Arabica, Robusta & Specialty
            coffees from the Western Ghats.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Explore Our Coffee</Link>
            <Link to="/contact" className="btn btn-white">Request a Sample →</Link>
          </div>
        </motion.div>
      </section>

      {/* Stats / Highlights */}
      <section className="stats" id="stats">
        <div className="container">
          <div className="stats-grid">

            <div className="stat-item">
              <div className="stat-number"><AnimatedCounter target={5} suffix="+" /></div>
              <div className="stat-label">Western Ghats Origins</div>
              <div className="stat-divider" />
            </div>
            <div className="stat-item">
              <div className="stat-number"><AnimatedCounter target={100} suffix="%" /></div>
              <div className="stat-label">Export Quality Certified</div>
              <div className="stat-divider" />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview" id="about-preview">
        <div className="container">
          <div className="about-grid">
            <ScrollReveal direction="left">
              <div className="about-image-wrapper">
                <div className="about-image">
                  <img src={aboutImg} alt="Highland coffee plantation in Western Ghats" />
                </div>
                <div className="about-image-accent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="about-content">
                <div className="section-label">Our Legacy</div>
                <h2 className="section-title">Rooted in Heritage, Reaching the World</h2>
                <p className="section-subtitle">Where altitude meets attitude — crafting India's finest green coffee for the global market.</p>
                <p className="about-text">
                  Highland Origin Private Limited was founded with a singular vision: to bring
                  the exceptional coffees grown in India's highland regions to discerning roasters
                  and importers worldwide. Our deep-rooted connections with farming communities
                  across the Western Ghats give us unparalleled access to the finest green coffee
                  beans India has to offer.
                </p>
                <p className="about-text">
                  From the mist-covered estates of Chikmagalur and Coorg to the lush plantations
                  of Wayanad and Nilgiris, Kodaikanal. Every bean we export carries the essence of its origin
                  — rich soil, pristine air, and generations of expertise.
                </p>
                <div className="about-features">
                  <div className="about-feature">
                    <span className="about-feature-icon">✓</span>
                    <span>FSSAI Certified</span>
                  </div>
                  <div className="about-feature">
                    <span className="about-feature-icon">✓</span>
                    <span>ISO 22000 Standards</span>
                  </div>
                  <div className="about-feature">
                    <span className="about-feature-icon">✓</span>
                    <span>Direct Farm Sourcing</span>
                  </div>
                  <div className="about-feature">
                    <span className="about-feature-icon">✓</span>
                    <span>Q-Graded Quality</span>
                  </div>
                </div>
                <Link to="/about" className="btn btn-outline" style={{ marginTop: '24px' }}>
                  Discover Our Story →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="products-preview" id="products-preview">
        <div className="container">
          <ScrollReveal>
            <div className="products-header">
              <div className="section-label" style={{ justifyContent: 'center' }}>Our Coffee</div>
              <h2>Premium Green Coffee Beans</h2>
              <p className="section-subtitle">Carefully sourced, meticulously processed, and expertly graded — our coffees represent the pinnacle of Indian origin.</p>
            </div>
          </ScrollReveal>
          <div className="products-grid">
            {productCategories.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.15}>
                <Link to={`/products/${p.id}`} className="product-card">
                  <div className="product-card-image">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <div className="product-card-body">
                    <h3 className="product-card-title">{p.title}</h3>
                    <p className="product-card-desc">Explore our premium range of {p.title} coffee, carefully sourced and graded for global export.</p>
                    <div className="product-card-link">
                      <span>View Specifications</span>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose" id="why-choose">
        <div className="container">
          <ScrollReveal>
            <div className="why-header">
              <div className="section-label" style={{ justifyContent: 'center' }}>Why Partner With Us</div>
              <h2>The Highland Origin Advantage</h2>
              <p className="section-subtitle">What sets us apart in the world of Indian green coffee exports.</p>
            </div>
          </ScrollReveal>
          <div className="why-grid">
            {whyItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
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



      {/* Global Reach */}
      <section className="global-reach" id="global-reach">
        <div className="container">
          <ScrollReveal>
            <div className="section-label" style={{ justifyContent: 'center' }}>Global Reach</div>
            <h2>Shipping Excellence Worldwide</h2>
            <p className="section-subtitle">Our coffees reach discerning roasters and importers across five continents.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="reach-countries">
              {countries.map(c => (
                <span key={c} className="reach-tag">{c}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>



      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Source Premium Indian Coffee?</h2>
            <p>Let's discuss your requirements and find the perfect origin match for your brand.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
              <Link to="/products" className="btn btn-white">View All Products</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
