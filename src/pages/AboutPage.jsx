import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AboutPage({ setIsLoading }) {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <HeroSection />

      {/* Story */}
      <StorySection />

      {/* Values */}
      <ValuesSection />

      {/* CTA */}
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-10">
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full filter blur-3xl opacity-5"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About
          <motion.span
            className="text-accent block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            iMann
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A creative powerhouse dedicated to transforming businesses through innovative digital solutions
        </motion.p>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://picsum.photos/600/600?random=14"
              alt="Team collaboration"
              className="rounded-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-300 mb-6">
              Founded in 2025, iMann started with a simple mission: to help businesses thrive 
              in the digital age. What began as a small team of passionate designers and developers 
              has grown into a powerhouse of over 50 talented professionals.
            </p>
            <p className="text-gray-400 mb-6">
              We've had the privilege of working with startups, scale-ups, and Fortune 500 companies, 
              delivering transformative digital experiences that drive real business results. From 
              concept to launch, we're committed to excellence at every stage.
            </p>
            <p className="text-gray-400">
              Today, we continue to push boundaries and innovate, staying at the forefront of 
              design and technology trends to ensure our clients always get cutting-edge solutions.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <p className="text-4xl font-bold text-accent mb-2">4+</p>
                <p className="text-gray-400">Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">5+</p>
                <p className="text-gray-400">Team Members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every detail of our work',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and communication',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty and maintain strong principles',
      icon: '✓'
    },
    {
      title: 'Impact',
      description: 'We focus on creating measurable results for our clients',
      icon: '🚀'
    },
    {
      title: 'Passion',
      description: 'We love what we do and it shows in our work',
      icon: '❤️'
    }
  ]

  return (
    <section className="py-24 bg-dark-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Values</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-8 bg-dark rounded-xl border border-white/5 hover:border-accent/50 transition-all"
              whileHover={{ y: -10, borderColor: 'rgb(0, 217, 255)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-cyan-500/10 opacity-50" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Join Our Team
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          If you share our passion for creating amazing digital experiences, we'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/careers"
            className="inline-block px-10 py-4 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-all hover:scale-105"
          >
            View Open Positions
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
