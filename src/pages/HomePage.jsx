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

const products = [
  {
    title: 'Arabica Plantation',
    origin: 'Western Ghats, India',
    desc: 'Grown at elevations above 900m, our Arabica beans deliver a smooth, nuanced cup with notes of chocolate and citrus.',
    image: arabicaImg,
  },
  {
    title: 'Robusta Cherry AB',
    origin: 'Coorg & Wayanad',
    desc: 'Bold and full-bodied, our Robusta cherry beans are known for their rich crema and earthy depth — perfect for espresso blends.',
    image: robustaImg,
  },
  {
    title: 'Monsooned Malabar AA',
    origin: 'Malabar Coast',
    desc: 'A uniquely Indian specialty — exposed to monsoon winds for 12–16 weeks, creating a mellow, low-acid cup with a golden hue.',
    image: monsoonedImg,
  },
  {
    title: 'Specialty & Single Estate',
    origin: 'Select Highland Estates',
    desc: 'Micro-lot coffees scored 80+ by Q-graders, sourced from single estates in the Nilgiris and Bababudangiris ranges.',
    image: specialtyImg,
  },
]

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
  { icon: '◆', title: 'Unmatched Quality Control', desc: 'Every lot undergoes rigorous cupping, grading, and lab analysis. Our Q-certified cuppers ensure only the finest beans bear our name.' },
  { icon: '◈', title: 'Direct From Origin', desc: 'We work directly with highland farmers across Karnataka, Kerala, and Tamil Nadu — cutting middlemen, ensuring traceability.' },
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
            High Land Origin Private Limited — India's trusted exporter of premium
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
              <div className="stat-number"><AnimatedCounter target={100} suffix="%" /></div>
              <div className="stat-label">Direct Farm Sourced</div>
              <div className="stat-divider" />
            </div>
            <div className="stat-item">
              <div className="stat-number"><AnimatedCounter target={80} suffix="+" /></div>
              <div className="stat-label">SCA Specialty Score</div>
              <div className="stat-divider" />
            </div>
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
                  High Land Origin Private Limited was founded with a singular vision: to bring
                  the exceptional coffees grown in India's highland regions to discerning roasters
                  and importers worldwide. Our deep-rooted connections with farming communities
                  across the Western Ghats give us unparalleled access to the finest green coffee
                  beans India has to offer.
                </p>
                <p className="about-text">
                  From the mist-covered estates of Chikmagalur and Coorg to the lush plantations
                  of Wayanad and Nilgiris, every bean we export carries the essence of its origin
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
            {products.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.15}>
                <Link to="/products" className="product-card">
                  <div className="product-card-image">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <div className="product-card-body">
                    <div className="product-card-origin">{p.origin}</div>
                    <h3 className="product-card-title">{p.title}</h3>
                    <p className="product-card-desc">{p.desc}</p>
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

      {/* Process - From Farm to Shipment */}
      <section className="process" id="process">
        <div className="container">
          <ScrollReveal>
            <div className="process-header">
              <div className="section-label" style={{ justifyContent: 'center' }}>Our Process</div>
              <h2>From Farm to Shipment</h2>
              <p className="section-subtitle">A meticulous, transparent journey ensuring every green coffee bean meets the highest global export benchmarks.</p>
            </div>
          </ScrollReveal>

          <div className="process-journey">
            <div className="process-line-track" />
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 1
              return (
                <div key={step.num} className={`process-step-row ${isEven ? 'row-reversed' : ''}`}>
                  {/* Image side - clean without any stage tag */}
                  <ScrollReveal direction={isEven ? 'right' : 'left'} delay={0.1}>
                    <div className="process-media-card">
                      <div className="process-media-wrapper">
                        <img src={step.image} alt={step.imageAlt} />
                        <div className="process-media-overlay" />
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Step Node indicator in center */}
                  <div className="process-node">
                    <span className="process-node-number">{step.num}</span>
                    <div className="process-node-pulse" />
                  </div>

                  {/* Content side - clean without stage badge */}
                  <ScrollReveal direction={isEven ? 'left' : 'right'} delay={0.2}>
                    <div className="process-info-card">
                      <div className="process-info-subtitle">{step.subtitle}</div>
                      <h3 className="process-info-title">{step.title}</h3>
                      <p className="process-info-desc">{step.desc}</p>
                      <div className="process-highlights">
                        {step.highlights.map(h => (
                          <div key={h} className="process-pill">
                            <span className="pill-dot" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              )
            })}
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

      {/* Testimonials */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <ScrollReveal>
            <div className="testimonials-header">
              <div className="section-label" style={{ justifyContent: 'center' }}>Client Voices</div>
              <h2>Trusted by Roasters Worldwide</h2>
              <p className="section-subtitle">Hear from our global partners who trust Highland Origin for their sourcing needs.</p>
            </div>
          </ScrollReveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initial}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
