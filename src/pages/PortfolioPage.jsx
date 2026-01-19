import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LazyImage from '../components/LazyImage'

export default function PortfolioPage({ setIsLoading }) {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Revolution',
      category: 'development',
      description: 'Complete e-commerce platform with AI recommendations',
      image: 'https://picsum.photos/800/600?random=5',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure banking application for iOS & Android',
      image: 'https://picsum.photos/800/600?random=6',
      tags: ['React Native', 'Firebase', 'Security']
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      category: 'design',
      description: 'Real-time analytics and reporting platform',
      image: 'https://picsum.photos/800/600?random=7',
      tags: ['Figma', 'Data Viz', 'Analytics']
    },
    {
      id: 4,
      title: 'Social Network Redesign',
      category: 'design',
      description: 'Complete UX redesign of social platform',
      image: 'https://picsum.photos/800/600?random=8',
      tags: ['UX/UI', 'Prototyping', 'User Research']
    },
    {
      id: 5,
      title: 'Cloud Migration Suite',
      category: 'development',
      description: 'Enterprise cloud migration and optimization',
      image: 'https://picsum.photos/800/600?random=9',
      tags: ['AWS', 'DevOps', 'Kubernetes']
    },
    {
      id: 6,
      title: 'AI-Powered Chatbot',
      category: 'development',
      description: 'Intelligent conversational AI system',
      image: 'https://picsum.photos/800/600?random=10',
      tags: ['Python', 'ML', 'NLP']
    },
    {
      id: 7,
      title: 'Fitness Mobile App',
      category: 'mobile',
      description: 'Complete fitness tracking and workout app',
      image: 'https://picsum.photos/800/600?random=11',
      tags: ['Flutter', 'Health API', 'Wearables']
    },
    {
      id: 8,
      title: 'Brand Identity System',
      category: 'design',
      description: 'Complete brand guidelines and design system',
      image: 'https://picsum.photos/800/600?random=12',
      tags: ['Branding', 'Design System', 'Components']
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
    { id: 'mobile', label: 'Mobile' }
  ]

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.category === selectedFilter)

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <HeroSection />

      {/* Filter */}
      <section className="py-12 bg-dark border-b border-white/5 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedFilter === cat.id
                    ? 'bg-accent text-dark'
                    : 'bg-dark-light text-gray-300 hover:text-white border border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

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
          Our
          <motion.span
            className="text-accent block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Latest Work
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Showcasing our best projects and digital creations
        </motion.p>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg h-80 bg-dark-light">
        <LazyImage
          src={project.image}
          alt={project.title}
          className="w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-8"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-accent text-sm font-semibold mb-2 capitalize">{project.category}</p>
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-dark-light rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-96 overflow-hidden">
          <LazyImage src={project.image} alt={project.title} className="w-full h-full" />

          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-dark/80 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-xl">✕</span>
          </motion.button>
        </div>

        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-accent text-sm font-semibold mb-3 uppercase">{project.category}</p>
            <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-300 text-lg mb-6">{project.description}</p>

            <div className="mb-8 pb-8 border-b border-white/10">
              <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="bg-accent/20 text-accent px-4 py-2 rounded-lg text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-white/10">
              <div>
                <p className="text-gray-400 text-sm mb-1">Timeline</p>
                <p className="font-semibold">4 Months</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Team Size</p>
                <p className="font-semibold">8 People</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Status</p>
                <p className="font-semibold text-accent">Completed</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Result</p>
                <p className="font-semibold">+300% ROI</p>
              </div>
            </div>

            <motion.button
              onClick={onClose}
              className="w-full py-3 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
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
          Ready to Start Your Project?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Let's create something amazing together. Get in touch with our team today.
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
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
