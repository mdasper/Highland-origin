import { motion } from 'framer-motion'
import logo from '../assets/images/logo.png'

export default function LoadingScreen() {
  return (
    <motion.div
      className="welcome-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(8px)',
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Ambient background glow */}
      <div className="welcome-ambient-glow" />

      {/* Floating Coffee Origin Sparks */}
      <div className="welcome-particles">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="welcome-spark"
            style={{
              left: `${6 + (i * 6)}%`,
              animationDelay: `${(i % 5) * 0.3}s`,
              animationDuration: `${2.5 + (i % 3) * 0.5}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="welcome-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Welcome Tag Header */}
        <motion.div
          className="welcome-tag-wrap"
          initial={{ opacity: 0, letterSpacing: '8px' }}
          animate={{ opacity: 1, letterSpacing: '4px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="welcome-line" />
          <span className="welcome-tag-text">WELCOME TO</span>
          <span className="welcome-line" />
        </motion.div>

        {/* Large Prominent Logo Showcase */}
        <motion.div
          className="welcome-logo-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
        >
          <div className="welcome-logo-backdrop" />
          <img
            src={logo}
            alt="High Land Origin Private Limited"
            className="welcome-logo-img"
          />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          className="welcome-brand-info"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="welcome-brand-title">HIGH LAND ORIGIN</h1>
          <div className="welcome-brand-sub">PRIVATE LIMITED</div>

          {/* Golden Divider */}
          <div className="welcome-divider" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
