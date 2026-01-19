import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function CareersPage({ setIsLoading }) {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <HeroSection />

      {/* Culture */}
      <CultureSection />

      {/* Open Positions */}
      <PositionsSection />

      {/* Benefits */}
      <BenefitsSection />

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
          Join Our
          <motion.span
            className="text-accent block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Creative Team
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Help us build the future of digital experiences and grow your career with us
        </motion.p>
      </div>
    </section>
  )
}

function CultureSection() {
  const aspects = [
    {
      title: 'Collaborative Workspace',
      description: 'Work in an environment where ideas flow freely and every voice matters',
      icon: '👥',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      title: 'Creative Freedom',
      description: 'Express your creativity and take ownership of your projects',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      title: 'Growth Opportunities',
      description: 'Continuous learning and development in a fast-paced industry',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and respect for personal time',
      icon: '⚖️',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    }
  ]

  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Culture</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            What makes iMann a great place to work
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {aspects.map((aspect, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden mb-6">
                <motion.img
                  src={aspect.image}
                  alt={aspect.title}
                  className="w-full h-full object-cover rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <div className="text-5xl mb-4">{aspect.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{aspect.title}</h3>
              <p className="text-gray-400">{aspect.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PositionsSection() {
  const [expandedJob, setExpandedJob] = useState(null)

  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote',
      level: 'Senior',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'We\'re looking for an experienced React developer to lead frontend development on our latest products.',
      requirements: ['5+ years React experience', 'Node.js knowledge', 'Team leadership experience', 'Passion for clean code']
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'New York, NY',
      level: 'Mid-level',
      type: 'Full-time',
      salary: '$90k - $120k',
      description: 'Join our design team to create beautiful, intuitive interfaces for web and mobile applications.',
      requirements: ['3+ years design experience', 'Figma proficiency', 'Portfolio of work', 'Attention to detail']
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      level: 'Mid-level',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Lead product strategy and development for our flagship applications.',
      requirements: ['3+ years PM experience', 'Analytics skills', 'Stakeholder management', 'Agile/Scrum']
    },
    {
      id: 4,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      level: 'Senior',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Build scalable backend systems using modern cloud technologies.',
      requirements: ['5+ years backend development', 'AWS/GCP experience', 'Database design', 'System architecture']
    },
    {
      id: 5,
      title: 'Creative Director',
      department: 'Design',
      location: 'New York, NY',
      level: 'Senior',
      type: 'Full-time',
      salary: '$140k - $180k',
      description: 'Lead our creative vision and oversee all design and branding initiatives.',
      requirements: ['10+ years design experience', 'Leadership skills', 'Brand strategy', 'Motion design']
    },
    {
      id: 6,
      title: 'Junior Developer',
      department: 'Engineering',
      location: 'Remote',
      level: 'Junior',
      type: 'Full-time',
      salary: '$60k - $80k',
      description: 'Start your career with us and learn from experienced developers.',
      requirements: ['1-2 years experience', 'Willingness to learn', 'Problem-solving skills', 'Communication']
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Open Positions</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {jobs.length} exciting opportunities to join our team
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {jobs.map((job, index) => (
            <JobCard
              key={job.id}
              job={job}
              index={index}
              isExpanded={expandedJob === job.id}
              onToggle={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function JobCard({ job, index, isExpanded, onToggle }) {
  return (
    <motion.div
      className="border border-white/5 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <motion.button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-dark/50 transition-colors"
        whileHover={{ x: 5 }}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">
                {job.department}
              </span>
              <span className="text-sm bg-white/5 text-gray-400 px-3 py-1 rounded-full">
                {job.location}
              </span>
              <span className="text-sm bg-white/5 text-gray-400 px-3 py-1 rounded-full">
                {job.level}
              </span>
              <span className="text-sm bg-white/5 text-gray-400 px-3 py-1 rounded-full">
                {job.salary}
              </span>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-accent text-2xl"
          >
            ▼
          </motion.div>
        </div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 border-t border-white/5">
          <p className="text-gray-300 mb-6">{job.description}</p>

          <div className="mb-6">
            <h4 className="font-semibold text-white mb-3">Requirements:</h4>
            <ul className="space-y-2">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="text-gray-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <motion.button
            className="w-full py-3 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => alert('Apply functionality would be implemented here')}
          >
            Apply Now
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

function BenefitsSection() {
  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: '🏥', title: 'Health Benefits', description: 'Comprehensive medical and dental coverage' },
    { icon: '🏖️', title: '30 Days PTO', description: 'Generous paid time off to recharge' },
    { icon: '📚', title: 'Learning Budget', description: '$2,000 annually for professional development' },
    { icon: '🏠', title: 'Remote Work', description: 'Flexible work arrangements' },
    { icon: '🎮', title: 'Team Perks', description: 'Gym stipends, wellness programs, and more' }
  ]

  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Benefits & Perks</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We take care of our team
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-8 bg-dark-light rounded-xl border border-white/5 text-center"
              whileHover={{ y: -10, borderColor: 'rgb(0, 217, 255)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 bg-dark-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-cyan-500/10 opacity-50" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Don't see your role?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          We're always looking for talented individuals. Send us your portfolio and let's talk about 
          how you can contribute to our mission.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Submit portfolio - form would be implemented here')}
          >
            Submit Your Portfolio
          </motion.button>

          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
