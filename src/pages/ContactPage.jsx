import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage({ setIsLoading }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <HeroSection />

      {/* Contact Form & Info */}
      <ContactSection formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} submitted={submitted} />

      {/* Map & Locations */}
      <LocationsSection />

      {/* FAQ */}
      <FAQSection />
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
          Let's Work
          <motion.span
            className="text-accent block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Together
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have a project in mind? Get in touch and let's create something amazing
        </motion.p>
      </div>
    </section>
  )
}

function ContactSection({ formData, handleChange, handleSubmit, submitted }) {
  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-accent mb-2 uppercase">Email</h3>
                <a href="mailto:hello@imann.agency" className="text-lg hover:text-accent transition-colors">
                  hello@imann.agency
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-accent mb-2 uppercase">Phone</h3>
                <a href="tel:+1234567890" className="text-lg hover:text-accent transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-accent mb-2 uppercase">Headquarters</h3>
                <p className="text-gray-400">
                  123 Creative Street<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-accent mb-2 uppercase">Other Offices</h3>
                <p className="text-gray-400">
                  San Francisco, CA<br />
                  London, UK<br />
                  Tokyo, Japan
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-accent mb-4 uppercase">Follow Us</h3>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      className="w-12 h-12 rounded-full bg-white/5 hover:bg-accent/20 flex items-center justify-center transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-semibold text-accent">{social[0]}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {submitted && (
              <motion.div
                className="p-4 bg-accent/20 border border-accent rounded-lg text-accent"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Thanks for reaching out! We'll be in touch soon.
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Full Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <FormField
              label="Company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              required
            />

            <div>
              <label className="block text-sm font-medium mb-3">Message</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell us about your project..."
                required
                whileFocus={{ borderColor: 'rgb(0, 217, 255)' }}
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="agree"
                className="w-4 h-4 cursor-pointer"
                required
              />
              <label htmlFor="agree" className="text-sm text-gray-400 cursor-pointer">
                I agree to the terms and privacy policy
              </label>
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-3">{label}</label>
      <motion.input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
        whileFocus={{ borderColor: 'rgb(0, 217, 255)' }}
      />
    </div>
  )
}

function LocationsSection() {
  const locations = [
    {
      city: 'New York',
      region: 'Headquarters',
      address: '123 Creative Street, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      image: 'https://picsum.photos/600/400?random=25'
    },
    {
      city: 'San Francisco',
      region: 'West Coast',
      address: '456 Innovation Ave, San Francisco, CA 94105',
      phone: '+1 (555) 987-6543',
      image: 'https://picsum.photos/600/400?random=26'
    },
    {
      city: 'London',
      region: 'Europe',
      address: '789 Design Street, London, UK EC1A 1BB',
      phone: '+44 (0) 20 1234 5678',
      image: 'https://picsum.photos/600/400?random=27'
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Offices</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Visit us at any of our global locations
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden mb-6">
                <motion.img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-full object-cover rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <h3 className="text-2xl font-bold mb-2">{location.city}</h3>
              <p className="text-accent text-sm font-semibold mb-3">{location.region}</p>
              <p className="text-gray-400 text-sm mb-3">{location.address}</p>
              <a href={`tel:${location.phone}`} className="text-accent hover:text-accent-hover transition-colors">
                {location.phone}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const faqs = [
    {
      q: 'What is your typical project timeline?',
      a: 'Most projects take 2-6 months depending on complexity. We\'ll provide a detailed timeline after the discovery phase.'
    },
    {
      q: 'Do you offer maintenance and support after launch?',
      a: 'Yes! We offer ongoing support, maintenance, and optimization packages tailored to your needs.'
    },
    {
      q: 'What is your pricing model?',
      a: 'We offer flexible pricing options including fixed-price projects, time & materials, and retainer agreements.'
    },
    {
      q: 'Can you sign an NDA?',
      a: 'Absolutely. We\'re happy to sign NDAs to protect your confidential information.'
    },
    {
      q: 'Do you work with international clients?',
      a: 'Yes! We have clients worldwide and experience working across different time zones and cultures.'
    },
    {
      q: 'How do we communicate during the project?',
      a: 'We use a combination of Slack, Zoom, and regular video calls. You\'ll have direct access to the team.'
    }
  ]

  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isExpanded={expandedFAQ === index}
              onToggle={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FAQItem({ faq, index, isExpanded, onToggle }) {
  return (
    <motion.div
      className="border border-white/5 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <motion.button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-dark-light transition-colors flex justify-between items-center"
        whileHover={{ x: 5 }}
      >
        <h3 className="text-lg font-semibold pr-4">{faq.q}</h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-accent text-xl flex-shrink-0"
        >
          ▼
        </motion.div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 border-t border-white/5 text-gray-400">
          {faq.a}
        </div>
      </motion.div>
    </motion.div>
  )
}
