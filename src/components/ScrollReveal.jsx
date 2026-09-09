import { useInView } from 'react-intersection-observer'

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal'

  return (
    <div
      ref={ref}
      className={`${dirClass} ${inView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
