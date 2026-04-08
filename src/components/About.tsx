import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const strengths = [
  {
    number: '01',
    title: 'Full Stack Engineering',
    description: 'From pixel-perfect UIs to robust server architecture — I own the entire product lifecycle. React, Node.js, MongoDB, Redis: I build systems that scale under pressure.'
  },
  {
    number: '02',
    title: 'Product Thinking',
    description: 'I don\'t just implement features — I question why they exist. Every decision is tied to user impact, performance tradeoffs, and long-term maintainability.'
  },
  {
    number: '03',
    title: 'UI Craft & Visual Systems',
    description: 'Design is code to me. I build component systems, animation layers, and interfaces that feel alive — precision in every spacing unit, every easing curve.'
  },
  {
    number: '04',
    title: 'Sharp Problem Solving',
    description: 'I trace bugs at their root, design algorithms first in plain language, and cut through complexity with focused, high-signal reasoning under tight timelines.'
  },
]

const metrics = [
  { value: '95+', label: 'Lighthouse Score' },
  { value: '3+', label: 'AI Products Built' },
  { value: '80%', label: 'Payload Reduced' },
  { value: '100+', label: 'Concurrent Users' },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-text-muted-custom tracking-widest uppercase">About</span>
          <div className="w-6 h-px bg-border mt-2" />
        </motion.div>

        {/* Hero Statement */}
        <motion.div {...fadeInUp} className="mb-20 lg:mb-28">
          <h2 className="font-display text-[7vw] lg:text-[4.5rem] leading-none tracking-tight text-text-body">
            "I BUILD THINGS<br />
            <span className="text-text-heading underline underline-offset-8">THAT SHIP.</span><br />
            AND THINGS THAT<br />
            <span className="text-text-heading">LAST."</span>
          </h2>
          <p className="mt-8 text-base lg:text-lg text-text-body max-w-2xl leading-relaxed">
            I'm a Full Stack Developer based in New Delhi, India — obsessed with building 
            AI-integrated products, razor-sharp interfaces, and systems engineered for real-world scale.
            BCA from Chandigarh University. Currently open to high-impact roles.
          </p>
        </motion.div>

        {/* Metrics Strip */}
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border mb-20 lg:mb-28"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-b lg:border-b-0 lg:border-r border-border py-8 px-6 last:border-r-0"
            >
              <p className="font-display text-5xl lg:text-6xl text-text-heading leading-none">{metric.value}</p>
              <p className="text-xs text-text-muted-custom tracking-widest uppercase mt-3">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Strengths Grid */}
        <motion.div {...fadeInUp} className="mb-6">
          <span className="text-sm text-text-muted-custom tracking-widest uppercase">What I bring</span>
          <div className="w-6 h-px bg-border mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {strengths.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="border-t border-border py-10 px-6 group hover:bg-secondary/20 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="text-xs text-text-subtle font-mono mt-1 shrink-0">{item.number}</span>
                <div>
                  <h3 className="text-lg font-medium text-text-heading mb-3 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border col-span-1 md:col-span-2" />
        </div>
      </div>
    </section>
  )
}
