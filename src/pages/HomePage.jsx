import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants'
import { useScrollReveal, useSectionReveal } from '../animations/useScrollAnimations'
import LazyImage from '../components/LazyImage'

export default function HomePage({ setIsLoading }) {
  const scrollRef = useScrollReveal()

  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <ServicesPreview scrollRef={scrollRef} />

      {/* Featured Projects */}
      <FeaturedProjects scrollRef={scrollRef} />

      {/* About Preview */}
      <AboutPreview scrollRef={scrollRef} />

      {/* Client Logos */}
      <ClientLogos scrollRef={scrollRef} />

      {/* CTA Section */}
      <CTASection scrollRef={scrollRef} />
    </div>
  )
}

function HeroSection() {
  const titleRef = useEffect(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 50

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 1
        this.speedY = (Math.random() - 0.5) * 1
        this.opacity = Math.random() * 0.5 + 0.2
      }

      draw() {
        ctx.fillStyle = `rgba(0, 217, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.update()
        p.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-light opacity-30" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full filter blur-3xl opacity-10"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          We Build Digital
          <motion.span
            className="text-accent block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experiences
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Award-winning creative agency specializing in digital transformation, 
          stunning design, and technology that pushes boundaries.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/portfolio"
              className="px-8 py-3 bg-accent text-dark font-semibold rounded-lg inline-block hover:bg-accent-hover transition-all"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg inline-block hover:bg-accent/10 transition-all"
            >
              Start a Project
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
<motion.div
  className="fixed bottom-4 right-4"
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <div className="flex flex-col items-center gap-2">
    <span className="text-gray-400 text-sm">Scroll to explore</span>
    <svg
      className="w-6 h-6 text-accent"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </div>
</motion.div>

      </motion.div>
    </section>
  )
}

function ServicesPreview({ scrollRef }) {
  const services = [
    {
      icon: '🤖',
      title: 'AI Models',
      description: 'Custom machine learning and deep learning solutions'
    },
    {
      icon: '🧠',
      title: 'Generative AI',
      description: 'ChatGPT, image generation, and text synthesis'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'AI-powered insights and predictive analytics'
    },
    {
      icon: '⚡',
      title: 'Automation',
      description: 'Intelligent workflow automation and optimization'
    }
  ]

  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">AI Solutions</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Cutting-edge artificial intelligence capabilities for your business
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-dark-light rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 cursor-pointer"
              whileHover={{ y: -10, borderColor: 'rgb(0, 217, 255)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="inline-block text-accent font-semibold hover:text-accent-hover transition-colors flex items-center gap-2"
          >
            Explore all services
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedProjects({ scrollRef }) {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://picsum.photos/800/600?random=1'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App',
      image: 'https://picsum.photos/800/600?random=2'
    },
    {
      title: 'AI Analytics Dashboard',
      category: 'Product Design',
      image: 'https://picsum.photos/800/600?random=3'
    },
    {
      title: 'Social Network Redesign',
      category: 'UX/UI Design',
      image: 'https://picsum.photos/800/600?random=4'
    }
  ]

  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="py-24 bg-dark-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Showcasing our latest and greatest digital creations
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-accent text-sm font-semibold mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/portfolio"
            className="inline-block text-accent font-semibold hover:text-accent-hover transition-colors flex items-center gap-2"
          >
            View full portfolio
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function AboutPreview({ scrollRef }) {
  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://picsum.photos/600/600?random=13"
              alt="Team"
              className="rounded-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">About iMann</h2>
            <p className="text-lg text-gray-300 mb-6">
              We're a team of passionate designers, developers, and strategists dedicated to 
              creating world-class digital experiences.
            </p>
            <p className="text-gray-400 mb-8">
              Founded in 2018, iMann has worked with over 100+ companies globally, delivering 
              innovative solutions that drive real business results.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-3xl font-bold text-accent">100+</p>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-gray-400">Team Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-block px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ClientLogos({ scrollRef }) {
  const clients = ['Acme', 'Bolt', 'Zenith', 'Nexus', 'Pulse', 'Sphere']
  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="py-20 bg-dark-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          className="text-center text-gray-400 mb-12 text-sm uppercase tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by industry leaders
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="h-16 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <span className="font-semibold text-gray-400">{client}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTASection({ scrollRef }) {
  const sectionRef = useSectionReveal()

  return (
    <section ref={sectionRef} className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-cyan-500/10 opacity-50" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Let's work together to create something extraordinary. Get in touch today and let's 
          start building the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-all hover:scale-105"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
