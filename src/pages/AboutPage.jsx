import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AboutPage({ setIsLoading }) {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <HeroSection />

      {/* Story */}
      <StorySection />

      {/* Timeline */}
      <TimelineSection />

      {/* Team */}
      <TeamSection />

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
              Founded in 2018, iMann started with a simple mission: to help businesses thrive 
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
                <p className="text-4xl font-bold text-accent mb-2">100+</p>
                <p className="text-gray-400">Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">50+</p>
                <p className="text-gray-400">Team Members</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">6+</p>
                <p className="text-gray-400">Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  const milestones = [
    {
      year: '2018',
      title: 'Founded',
      description: 'iMann is born with a vision to revolutionize digital experiences'
    },
    {
      year: '2019',
      title: 'First Major Milestone',
      description: 'Completed our 25th project and expanded to 10 team members'
    },
    {
      year: '2020',
      title: 'Remote First',
      description: 'Went fully remote and expanded our global talent pool'
    },
    {
      year: '2021',
      title: 'Scale Up',
      description: 'Reached 30 team members and opened new creative studios'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Won multiple awards for design and development excellence'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Now operating with 50+ team members across multiple continents'
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Journey</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Key milestones in our growth and evolution
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-cyan-500 opacity-30" />

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`md:flex gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 md:text-right md:pr-12 pl-12 md:pl-0">
                  <p className="text-3xl font-bold text-accent mb-2">{milestone.year}</p>
                  <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex md:w-auto items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-dark-light" />
                </div>

                <div className="md:w-1/2 md:pl-12" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const team = [
    {
      name: 'Alex Morgan',
      role: 'Founder & Creative Director',
      image: 'https://picsum.photos/400/400?random=15',
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Designer',
      image: 'https://picsum.photos/400/400?random=16',
    },
    {
      name: 'James Williams',
      role: 'Tech Lead',
      image: 'https://picsum.photos/400/400?random=17',
    },
    {
      name: 'Maria Garcia',
      role: 'Product Manager',
      image: 'https://picsum.photos/400/400?random=18',
    },
    {
      name: 'David Lee',
      role: 'Full-Stack Developer',
      image: 'https://picsum.photos/400/400?random=19'
    },
    {
      name: 'Emma Watson',
      role: 'UI/UX Specialist',
      image: 'https://picsum.photos/400/400?random=20'
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Talented individuals united by a passion for excellence
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg h-64">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-accent text-sm font-semibold">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
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
