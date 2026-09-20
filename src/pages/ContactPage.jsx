import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import greenBeansImg from '../assets/images/green_beans.jpg'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', product: '', volume: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Web3Forms configuration
    const accessKey = "8d2be3a5-2d43-49e6-a2e9-d6dfb0429c6a" 
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Coffee Inquiry from ${formData.name}`,
          from_name: formData.name,
          ...formData
        }),
      })

      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          product: '',
          volume: '',
          message: ''
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
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
          <img src={greenBeansImg} alt="Contact Highland Origin" />
        </div>
        <div className="page-hero-overlay" />
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1>Get in Touch</h1>
          <p>Let's discuss how we can serve your green coffee sourcing needs.</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal direction="left">
              <div className="contact-info">
                <h3>Start a Conversation</h3>
                <p>
                  Whether you're looking for a specific grade of Indian green coffee, want to
                  request samples, or explore a long-term sourcing partnership — our team is
                  ready to help. Reach out and we'll get back to you within 24 hours.
                </p>

                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="contact-detail-icon">📍</div>
                    <div>
                      <h4>Visit Us</h4>
                      <p>HIGHLAND ORIGIN PRIVATE LIMITED<br />2nd Floor, Door No. 16/21, Thiru Nagar, 1st Street (Abetting 100ft Road),<br />Vadapalani, Chennai – 600026</p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon">📧</div>
                    <div>
                      <h4>Email Us</h4>
                      <p><a href="mailto:highlandorigin26@gmail.com">highlandorigin26@gmail.com</a></p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon">📞</div>
                    <div>
                      <h4>Call Us</h4>
                      <p><a href="tel:+917338885778">+91 73388 85778</a></p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon">💬</div>
                    <div>
                      <h4>WhatsApp</h4>
                      <p><a href="https://wa.me/917338885778" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="product">Coffee Type</label>
                    <select id="product" name="product" value={formData.product} onChange={handleChange}>
                      <option value="">Select coffee type</option>
                      <option value="arabica">Arabica Plantation</option>
                      <option value="robusta-cherry">Robusta Cherry</option>
                      <option value="robusta-parchment">Robusta Parchment</option>
                      <option value="monsooned">Monsooned Malabar</option>
                      <option value="specialty">Specialty / Single Estate</option>
                      <option value="custom">Custom Blend</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="volume">Estimated Volume</label>
                    <select id="volume" name="volume" value={formData.volume} onChange={handleChange}>
                      <option value="">Select volume</option>
                      <option value="sample">Sample Request</option>
                      <option value="1-5mt">1 – 5 MT</option>
                      <option value="5-20mt">5 – 20 MT</option>
                      <option value="20-50mt">20 – 50 MT</option>
                      <option value="50+mt">50+ MT</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your requirements, preferred grades, delivery schedule, or any specific questions..." />
                </div>
                <button type="submit" className="form-submit">
                  {submitted ? '✓ Message Sent Successfully!' : 'Send Inquiry →'}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
