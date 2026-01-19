import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSectionReveal } from '../animations/useScrollAnimations'

export default function ServicesPage({ setIsLoading }) {
  const sectionRef = useSectionReveal()

  const services = [
    {
      icon: '🤖',
      title: 'AI Model Development',
      description: 'Custom AI and machine learning solutions tailored to your needs',
      features: ['LLM Fine-tuning', 'Deep Learning', 'Computer Vision', 'NLP Solutions']
    },
    {
      icon: '🧠',
      title: 'Generative AI',
      description: 'Cutting-edge generative AI applications and integrations',
      features: ['ChatGPT Integration', 'Image Generation', 'Text Generation', 'Custom Prompts']
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights with AI analytics',
      features: ['Predictive Analytics', 'Data Mining', 'Business Intelligence', 'Real-time Insights']
    },
    {
      icon: '🔮',
      title: 'AI Strategy & Consulting',
      description: 'Strategic guidance for AI adoption and implementation',
      features: ['AI Roadmapping', 'Use Case Identification', 'ROI Analysis', 'Change Management']
    },
    {
      icon: '⚡',
      title: 'Automation Solutions',
      description: 'Automate workflows and processes with intelligent systems',
      features: ['RPA', 'Process Automation', 'Workflow Optimization', 'Bot Development']
    },
    {
      icon: '🔐',
      title: 'AI Security & Ethics',
      description: 'Responsible AI deployment with security and compliance',
      features: ['AI Governance', 'Bias Detection', 'Security Audits', 'Compliance']
    }
  ]

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <HeroSection />

      {/* Services Grid */}
      <section ref={sectionRef} className="py-24 bg-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your unique needs and goals
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* CTA */}
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden pt-10">
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
          AI Solutions That
          <motion.span
            className="text-accent block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Transform Business
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Harness the power of artificial intelligence to drive innovation, efficiency, and growth
        </motion.p>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      className="group p-8 bg-dark-light rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 cursor-pointer"
      whileHover={{ y: -15, borderColor: 'rgb(0, 217, 255)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>

      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-400 mb-6">{service.description}</p>

      <div className="space-y-2 pt-6 border-t border-white/5">
        <p className="text-sm text-gray-300 font-semibold">What's included:</p>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <motion.a
        href="#"
        className="inline-block mt-6 text-accent font-semibold hover:text-accent-hover transition-colors"
        whileHover={{ x: 5 }}
      >
        Learn more →
      </motion.a>
    </motion.div>
  )
}

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep to understand your business, goals, and challenges'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive plan tailored to your specific needs'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Create beautiful, user-focused designs that align with your vision'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Build robust, scalable solutions using modern technology'
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous quality assurance to ensure excellence'
    },
    {
      number: '06',
      title: 'Launch',
      description: 'Deploy and optimize for maximum performance and impact'
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Process</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A proven methodology for delivering exceptional results
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-dark rounded-xl border border-white/5 h-full">
                <div className="text-5xl font-bold text-accent mb-4 opacity-20">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
              )}
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
          Let's Discuss Your Project
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Whether you're looking to build something new or improve existing solutions, 
          our team is ready to help.
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
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
